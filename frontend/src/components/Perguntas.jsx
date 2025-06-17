import { useEffect, useState, useRef } from "react"; // 1. Importar useRef
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import carregando from "../assets/carregando.gif";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";

function Perguntas() {
  const [perguntas, setPerguntas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [fim, setFim] = useState(false);
  const [validacao, setValidacao] = useState(true);
  
  // 2. Usar estado para controlar a visibilidade do botão "Próximo"
  const [mostrarBotaoProximo, setMostrarBotaoProximo] = useState(false);

  // 3. Usar useRef para obter uma referência segura aos botões de resposta
  const respostasContainerRef = useRef(null);

  const location = useLocation();
  const { materia } = location.state || {};
  const userEmail = auth.currentUser.email;
  const navigate = useNavigate();

  // O useEffect para buscar os dados está correto, sem alterações aqui.
  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";
    axios
      .get(`${API_BASE_URL}/${materia}`)
      .then((res) => setPerguntas(res.data))
      .catch((err) => console.log("Erro ao carregar", err));
  }, [materia]);

  // Este useEffect para o scroll também pode ser mantido
  useEffect(() => {
    if (mostrarBotaoProximo) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [mostrarBotaoProximo]);

  // O useEffect para salvar o resultado no Firebase também está correto.
  useEffect(() => {
    if (fim) {
      function sanitizarEmail(email) {
        return email.replace(/[.#$\[\]/]/g, "_");
      }

      const salvarResultado = async () => {
        const emailSanitizado = sanitizarEmail(userEmail);
        const docRef = doc(db, "resultados", emailSanitizado);

        const docSnap = await getDoc(docRef);
        const erros = perguntas.length - acertos;

        if (docSnap.exists()) {
          const dadosAtuais = docSnap.data();
          const acertosPorAreaAtual = dadosAtuais.acertosPorArea || {
            linguagens: 0,
            matematica: 0,
            natureza: 0,
            humanas: 0,
          };

          acertosPorAreaAtual[materia] = (acertosPorAreaAtual[materia] || 0) + acertos;
          const simuladosFeitosAtual = dadosAtuais.simuladosFeitos || 0;

          await setDoc(
            docRef,
            {
              data: new Date(),
              materia: materia,
              total: perguntas.length,
              acertosTotais: (dadosAtuais.acertosTotais || 0) + acertos,
              errosTotais: (dadosAtuais.errosTotais || 0) + erros,
              acertosPorArea: acertosPorAreaAtual,
              simuladosFeitos: simuladosFeitosAtual + 1,
            },
            { merge: true }
          );
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
      };
      salvarResultado();
    }
  }, [fim, acertos, materia, perguntas.length]);

  const responder = (opcao, buttonIndice) => {
    if (validacao) {
      const perguntaAtual = perguntas[indice];
      if (!perguntaAtual) return;

      // 4. Acessar os botões de forma segura através do ref
      const buttons = respostasContainerRef.current.querySelectorAll("button");
      const buttonSelect = buttons[buttonIndice];
      const indiceCorreta = perguntaAtual.opcoes.findIndex(op => op === perguntaAtual.correta);
      
      if (opcao === perguntaAtual.correta) {
        setAcertos(prev => prev + 1);
        buttonSelect.style.backgroundColor = "#83db85";
      } else {
        buttonSelect.style.backgroundColor = "#ff5e85";
        const buttonCorreta = buttons[indiceCorreta];
        if (buttonCorreta) { // Verificação extra de segurança
          buttonCorreta.style.backgroundColor = "#83db85";
        }
      }
      
      // 5. Atualizar o estado para mostrar o botão e a explicação
      setMostrarBotaoProximo(true);
      setValidacao(false);
    }
  };

  const proximaPergunta = async () => {
    // 6. Resetar os estilos dos botões de forma segura
    if (respostasContainerRef.current) {
      const buttons = respostasContainerRef.current.querySelectorAll("button");
      buttons.forEach(btn => (btn.style.backgroundColor = ""));
    }

    if (indice + 1 < perguntas.length) {
      setIndice(indice + 1);
      setMostrarBotaoProximo(false); // Esconde o botão novamente
    } else {
      setFim(true);
    }
    setValidacao(true);
  };

  if (perguntas.length === 0) {
    return <img src={carregando} alt="Carregando..." width="60px" />;
  }

  // 7. Mover a lógica de UI para dentro do return, controlada pelo estado 'fim'
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

  // 8. Toda a UI agora é renderizada pelo componente, sem manipulação externa
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

      {/* 9. Renderização condicional da explicação e do botão "Próximo" */}
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