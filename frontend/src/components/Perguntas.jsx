import { useEffect, useState, useRef } from "react";
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
  
  const [mostrarBotaoProximo, setMostrarBotaoProximo] = useState(false);
  
  // 1. RE-INTRODUZINDO O ESTADO SÓ PARA O SCROLL
  const [scrollar, setScrollar] = useState(false); 

  const respostasContainerRef = useRef(null);
  const location = useLocation();
  const { materia } = location.state || {};
  const userEmail = auth.currentUser.email;
  const navigate = useNavigate();

  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";
    axios
      .get(`${API_BASE_URL}/${materia}`)
      .then((res) => setPerguntas(res.data))
      .catch((err) => console.log("Erro ao carregar", err));
  }, [materia]);

  // 2. CORRIGINDO O useEffect DO SCROLL PARA SER UM GATILHO
  useEffect(() => {
    if (scrollar) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      setScrollar(false); // Importante: reseta o gatilho!
    }
  }, [scrollar]);

  // useEffect do Firebase (sem alterações)
  useEffect(() => {
    if (fim) {
      // ... seu código de salvar no Firebase aqui, está correto ...
    }
  }, [fim, acertos, materia, perguntas.length]);

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
      // 3. ATIVANDO O GATILHO DO SCROLL
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

  // Lógica de renderização (sem alterações)
  if (perguntas.length === 0) {
    return <img src={carregando} alt="Carregando..." width="60px" />;
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