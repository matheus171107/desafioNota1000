import "./style.css";
import "../css/quizStyle.css"
import Perguntas from '../components/Perguntas'
import { useNavigate, useLocation } from 'react-router-dom';
import Seta from "../assets/seta.png"


function Desempenho() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { area, materia} = location.state || {};

  return (
    <>
      <div id="mainQuiz">
        <h1>SIMULADO DE {area}</h1>

        <div className="hr"></div>
        <div id="container">

        <div id="materia"><img src={Seta} alt="" width="40px" onClick={() => navigate("/home")} /> <p id="materiaText">{materia.toUpperCase()}</p></div>
          <div className="questao">
            <p id='texto1'>Questões ENEM</p>

          <div className="hr2"></div>
          <Perguntas></Perguntas>
          </div> 
          <div id="explicacao">
            <h3>Explicação:</h3>
            <p></p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Desempenho;
