import "./style.css";
import home from "../assets/Home.png";
import desempenho from "../assets/Desempenho.png";
import creditos from "../assets/Creditos.png";
import videoAula from "../assets/Videoaula.png";
import sair from "../assets/Sair.png";
import logo from "../assets/logoHeader.png";
import { useNavigate } from "react-router-dom";

function Desempenho() {
  const navigate = useNavigate();
  return (
    <>
    <main id="mainDesempenho">
      <div id="menu">
          <img src={logo} alt="" id="imgLog" />
          <ul>
            <li onClick={() => navigate('/home')}><img src={home} class="icones" />HOME</li>
            <hr></hr><br></br>
            <li onClick={() => navigate('/desempenho')}><img src={desempenho} class="icones"/>DESEMPENHO</li>
            <hr></hr><br></br>
            <li onClick={() => navigate('/videoaula')}><img src={videoAula} class="icones"/>VÍDEO AULAS</li>
            <hr></hr><br></br>
            <li onClick={() => navigate('/creditos')}><img src={creditos} class="icones"/>CRÉDITOS</li>
            <hr></hr><br></br>
            <li onClick={() => navigate('/desempenho')}><img src={sair} class="icones"/>SAIR</li>
            <hr></hr><br></br>
            <li style={{display:'flex'}}>
            <input id="checkboxInput" type="checkbox"/>
            <label class="toggleSwitch" for="checkboxInput">
            </label>
              Dark mode
            </li>
          </ul>
        </div>

        <div class="conteudo">
          <h1>DESEMPENHO</h1>
          <hr />
          <div class="desempenho-container">
            <div class="percentual-acertos">
              <h2>Percentual de Acertos</h2>
              <p>Nenhuma questão respondida</p>
              <p>0 questões</p>
            </div>

            <div class="estatisticas">

              <div class="estatistica verde">
                <p>QUESTÕES QUE ACERTEI</p>
              </div>

              <div class="estatistica vermelha">
                <p>QUESTÕES QUE ERREI</p>
              </div>

              <div class="estatistica">
                <p>Matéria com maior taxa de acerto</p>
              </div>

              <div class="estatistica">
                <p>Matéria com maior taxa de erro</p>
              </div>

              <div class="estatistica">
                <p>Simulados Feitos</p>
              </div>

              <div class="estatistica">
                <p>Taxa de acertos nos simulados</p>
              </div>
            </div>
          </div><br></br>

          <div class="materias-revisar">
            <p>Matérias que você precisa revisar</p>
            <table>
              <thead>
                <tr>
                  <th>Disciplina</th>
                  <th>Qt. Questões</th>
                  <th>% de erro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Matemática</td>
                  <td>15</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td>Linguagens</td>
                  <td>15</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td>Ciências Humanas</td>
                  <td>10</td>
                  <td>60%</td>
                </tr>
                <tr>
                  <td>Ciências Da Natureza</td>
                  <td>10</td>
                  <td>60%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export default Desempenho;