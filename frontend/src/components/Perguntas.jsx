import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import carregando from "../assets/carregando.gif";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth"; // Importação importante!
import { db, auth } from "../../firebaseConfig";

function Perguntas() {
  const [perguntas, setPerguntas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [fim, setFim] = useState(false);
  const [validacao, setValidacao] = useState(true);
  const [mostrarBotaoProximo, setMostrarBotaoProximo] = useState(false);
  const [scrollar, setScrollar] = useState(false);

  // 1. ESTADOS PARA AUTENTICAÇÃO SEGURA
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  const respostasContainerRef = useRef(null);
  const location = useLocation();
  const { materia } = location.state || {};
  const navigate = useNavigate();

  // Efeito para verificar o usuário logado de forma segura
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthChecked(true); // Marca que a verificação foi feita
    });
    return () => unsubscribe(); // Limpa o listener ao desmontar
  }, []);

  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";
    axios
      .get(`${API_BASE_URL}/${materia}`)
      .then((res) => setPerguntas(res.data))
      .catch((err) => console.log("Erro ao carregar perguntas:", err));
  }, [materia]);

  useEffect(() => {
    if (scrollar) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      setScrollar(false);
    }
  }, [scrollar]);

  // 2. LÓGICA DE SALVAMENTO RESTAURADA E MELHORADA
  useEffect(() => {
    // Só executa se o quiz terminou E se temos um usuário logado
    if (fim && user) {
      function sanitizarEmail(email) {
        return email.replace(/[.#$\[\]/]/g, "_");
      }

      const salvarResultado = async () => {
        try {
          console.log("Iniciando salvamento para:", user.email);
          const emailSanitizado = sanitizarEmail(user.email);
          const docRef = doc(db, "resultados", emailSanitizado);
          const docSnap = await getDoc(docRef);
          const erros = perguntas.length - acertos;

          if (docSnap.exists()) {
            const dadosAtuais = docSnap.data();
            const acertosPorAreaAtual = dadosAtuais.acertosPorArea || { linguagens: 0, matematica: 0, natureza: 0, humanas: 0 };
            acertosPorAreaAtual[materia] = (acertosPorAreaAtual[materia] || 0) + acertos;
            const simuladosFeitosAtual = dadosAtuais.simuladosFeitos || 0;

            await setDoc(docRef, {
              data: new Date(),
              materia: materia,
              total: perguntas.length,
              acertosTotais: (dadosAtuais.acertosTotais || 0) + acertos,
              errosTotais: (dadosAtuais.errosTotais || 0) + erros,
              acertosPorArea: acertosPorAreaAtual,
              simuladosFeitos: simuladosFeitosAtual + 1,
            }, { merge: true });

          } else {
            await setDoc(docRef, {
              data: new Date(),
              materia: materia,
              total: perguntas.length,
              acertosTotais: acertos,
              errosTotais: erros,
              acertosPorArea: {
                linguagens: materia === "linguagens" ? acertos : 0,
                matematica: materia === "matematica" ? acertos : 0,
                natureza: materia === "natureza" ? acertos : 0,
                humanas: materia === "humanas" ? acertos : 0,
              },
              simuladosFeitos: 1,
            });
          }
          console.log("Resultado salvo com sucesso!");
        } catch (error) {
          console.error("ERRO AO SALVAR RESULTADO NO FIREBASE:", error);
        }
      };
      salvarResultado();
    }
  }, [fim, acertos, materia, perguntas.length, user]); // Adicionado 'user' na dependência

  const responder = (opcao, buttonIndice) => {
    if (validacao) {
      const perguntaAtual = perguntas[indice];
      if (!perguntaAtual) return;
      const buttons = respostasContainerRef.current.querySelectorAll("button");
      const buttonSelect = buttons[buttonIndice];
      const indiceCorreta = perguntaAtual.opcoes.findIndex(op => op === perguntaAtual.correta);
      if (opcao === perguntaAtual.correta) {
        setAcertos(prev => prev + 1);
        buttonSelect.style.backgroundColor = "#83db85";
      } else {
        buttonSelect.style.backgroundColor = "#ff5e85";
        const buttonCorreta = buttons[indiceCorreta];
        if (buttonCorreta) {
          buttonCorreta.style.backgroundColor = "#83db85";
        }
      }
      setMostrarBotaoProximo(true);
      setValidacao(false);
      setScrollar(true); 
    }
  };

  const proximaPergunta = async () => {
    if (respostasContainerRef.current) {
      const buttons = respostasContainerRef.current.querySelectorAll("button");
      buttons.forEach(btn => (btn.style.backgroundColor = ""));
    }
    if (indice + 1 < perguntas.length) {
      setIndice(indice + 1);
      setMostrarBotaoProximo(false);
    } else {
      setFim(true);
    }
    setValidacao(true);
  };

  // Renderização condicional enquanto verifica a autenticação
  if (!authChecked || perguntas.length === 0) {
    return <img src={carregando} alt="Carregando..." width="60px" />;
  }
  
  // Se não houver usuário após a verificação, exibe mensagem
  if (!user) {
    return <p>Você precisa estar logado para continuar. Redirecionando...</p>;
    // (Opcional: navigate('/login') aqui dentro de um useEffect)
  }

  if (fim) {
    return (
      <>
        <h2 style={{textTransform: 'uppercase'}}>SIMULADO DE {materia} FINALIZADO</h2>
        <h3 style={{ color: "black", fontSize: "27pt", textAlign: "center" }}>Seus Acertos</h3>
        <p style={{ color: "black", fontSize: "20pt", textAlign: "center" }}>
          <strong>Acertos: {acertos} / {perguntas.length}</strong>
        </p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", flexDirection: "column", alignItems: "center" }}>
          <button style={{ marginBottom: 10 }} onClick={() => navigate("/desempenho")}>Ir para desempenho</button>
          <button onClick={() => navigate("/home")}>Voltar para home</button>
        </div>
      </>
    );
  }

  const pergunta = perguntas[indice];
  const urlImg = pergunta.url;

  return (
    <div>
      <h2 id="materiaText">{pergunta.categoria}</h2>
      <p id="texto">Questão {indice + 1}</p>
      <div id="perguntasBox" ref={respostasContainerRef}>
        <h3 className="pergunta">{pergunta.enunciado}</h3>
        {urlImg && <img src={urlImg} alt="Imagem da pergunta" style={{ maxWidth: 800 }} />}
        <h3 className="pergunta">{pergunta.pergunta}</h3>
        {pergunta.opcoes.map((op, idx) => (
          <button key={idx} onClick={() => responder(op, idx)}>{op}</button>
        ))}
      </div>
      {mostrarBotaoProximo && (
        <>
          <div id="explicacao" style={{display: 'block'}}>
            <p>{pergunta.explicacao}</p>
          </div>
          <div id="buttonProximo">
            <button onClick={proximaPergunta}>Próxima Questão</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Perguntas;