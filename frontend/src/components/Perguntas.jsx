import { useEffect, useState } from "react";
import axios from "axios";
import carregando from "../assets/carregando.gif";
import { useLocation } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../../firebaseConfig"

function Perguntas() {
  const [perguntas, setPerguntas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [fim, setFim] = useState(false);
  const [validacao, setValidacao] = useState(true);
  const [scrollar, setScrollar] = useState(false);

  const location = useLocation();
  const { materia, ares} = location.state || {};

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
    const salvarResultado = async () => {
      try {
        await addDoc(collection(db, "resultados"), {
          data: new Date(),
          materia: materia,
          acertos: acertos,
          total: perguntas.length
        });
        console.log("Resultado salvo com sucesso!");
      } catch (err) {
        console.error("Erro ao salvar no Firestore:", err);
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
        <h3 style={{ color: "black", fontSize: "20pt" }}>Seus Acertos</h3>
        <p>Acertos: {acertos} / {perguntas.length}</p>
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
        {urlImg && <img src={urlImg} alt="Imagem da pergunta" style={{ maxWidth: "800px" }} />}
        <h3 className="pergunta">{pergunta.pergunta}</h3>
        {pergunta.opcoes.map((op, idx) => (
          <button key={idx} onClick={() => responder(op, idx)}>{op}</button>
        ))}
      </div>

      <div id="buttonProximo" style={{ display: "none" }}>
        <button onClick={proximaPergunta}>Próxima Questão</button>
      </div>
    </div>
  );
}

export default Perguntas;
