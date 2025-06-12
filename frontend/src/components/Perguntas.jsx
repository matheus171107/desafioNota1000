import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import carregando from "../assets/carregando.gif";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig"

function Perguntas() {
  const [perguntas, setPerguntas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [fim, setFim] = useState(false);
  const [validacao, setValidacao] = useState(true);
  const [scrollar, setScrollar] = useState(false);

  const location = useLocation();
  const { materia } = location.state || {};
  const userEmail = auth.currentUser.email;
  const navigate = useNavigate();

  const buttonProximo = document.querySelector("#buttonProximo");
  const materiaText = document.querySelector('#materiaText')
  const texto = document.querySelector("#texto")
  const texto1 = document.querySelector("#texto1")

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/${materia}`)
      .then((res) => setPerguntas(res.data))
      .catch((err) => console.log("Erro ao carregar", err));
  }, [materia]);

  useEffect(() => {
    if (scrollar) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      setScrollar(false);
    }
  }, [scrollar]);

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

      const buttons = document.querySelectorAll("#perguntasBox button");
      const buttonSelect = buttons[buttonIndice];
      const indiceCorreta = perguntaAtual.opcoes.findIndex(op => op === perguntaAtual.correta);
      if (opcao === perguntaAtual.correta) {
        setAcertos(prev => prev + 1);
        buttonSelect.style.backgroundColor = "#83db85";
      } else {
        buttonSelect.style.backgroundColor = "#ff5e85";
        const buttonCorreta = buttons[indiceCorreta];
        buttonCorreta.style.backgroundColor = "#83db85";
      }
      buttonProximo.style.display = "flex";
      const Areaexplicacao = document.getElementById("explicacao");
      const Textexplicacao = document.querySelector("#explicacao p");

      if (Areaexplicacao && Textexplicacao) {
        Areaexplicacao.style.display = "block";
        Textexplicacao.innerText = perguntaAtual.explicacao;
      }

      setValidacao(false);
      setScrollar(true);
    }
  };

  const proximaPergunta = async () => {
    const Areaexplicacao = document.getElementById("explicacao");
    const buttons = document.querySelectorAll("#perguntasBox button");
    if (Areaexplicacao) Areaexplicacao.style.display = "none";
    texto.innerText = `Questão ${indice + 2}`
    buttons.forEach(btn => (btn.style.backgroundColor = ""));

    if (indice + 1 < perguntas.length) {
      setIndice(indice + 1);
      buttonProximo.style.display = "none";
    } else {
      setFim(true);
      console.log(materia, acertos, perguntas.length);
    }
    setValidacao(true);
  };

  if (fim) {
    texto1.style.display = 'none'
    texto.style.display = 'none'
    materiaText.innerText = `SIMULADO DE ${materia.toUpperCase()} FINALIZADO`
    return (
      <>
        <h3 style={{ color: "black", fontSize: "27pt", textAlign: "center"}}>Seus Acertos</h3>
        <p style={{color: "black", fontSize: "20pt", textAlign: "center"}}><strong>Acertos: {acertos} / {perguntas.length}</strong></p>
        <div style={{display: "flex", justifyContent: "center", marginTop: "20px", flexDirection: "column", alignItems: "center"}}>
          <button style={{marginBottom: 10}} onClick={() => navigate("/desempenho")}>Ir para desempenho</button>
          <button onClick={() => navigate("/home")}>Voltar para home</button>
        </div>
      </>
    );
  }

  if (perguntas.length === 0) {
    return <img src={carregando} alt="Carregando..." width="60px" />;
  }

  const pergunta = perguntas[indice];
  const urlImg = pergunta.url;
  materiaText.innerText = pergunta.categoria;

  return (
    <div>
      <div id="perguntasBox">
        <h3 className="pergunta">{pergunta.enunciado}</h3>
        {urlImg && <img src={urlImg} alt="Imagem da pergunta" style={{maxWidth: 800}}/>}
        <h3 className="pergunta">{pergunta.pergunta}</h3>
        {pergunta.opcoes.map((op, idx) => (
          <button key={idx} onClick={() => responder(op, idx)}>{op}</button>
        ))}
      </div>

      <div id="buttonProximo">
        <button onClick={proximaPergunta}>Próxima Questão</button>
      </div>
    </div>
  );
}

export default Perguntas;
