import Perguntas from '../components/Perguntas'
import { useNavigate } from 'react-router-dom';
import Seta from "../assets/seta.png"
import "./style.css";

function Desempenho() {
  const navigate = useNavigate();
  return(
    <>
      <div id="mainQuiz">
        <h1>SIMULADO DE CIÊNCIAS DA NATUREZA</h1>

        <div className="hr"></div>
        <div id="container">
          <div id="materia"><img src={Seta} alt="" width="40px" onClick={() => navigate("/home")}/> BIOLOGIA</div>
          
          <div className="hr2"></div>

          <div className="questao">
            <p id='texto1'>ENEM 2016</p>
            <p id='texto'>QUESTÃO 1</p>
            <Perguntas></Perguntas>
          </div>
          <div id="explicacao">
            <h3>Explicação:</h3>
            <p>Olá</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Desempenho;
  