import "./style.css";
import "../css/desempenhoStyle.css";
import home from "../assets/Home.png";
import desempenho from "../assets/Desempenho.png";
import creditos from "../assets/Creditos.png";
import videoAula from "../assets/Videoaula.png";
import sair from "../assets/Sair.png";
import logo from "../assets/logoHeader.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import GraficoPizza from "./../components/GraficoPizza";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import Logout from "../components/Logout";

function Desempenho() {
  const navigate = useNavigate();
  const handleLogout = Logout();
  const userEmail = auth.currentUser?.email;

  const [dados, setDados] = useState({
    acertosTotais: 0,
    errosTotais: 0,
    acertosPorArea: {
      linguagens: 0,
      humanas: 0,
      matematica: 0,
      natureza: 0,
    },
    simuladosFeitos: 0,
    taxaAcertosSimulados: 0,
  });

  function sanitizarEmail(email) {
    return email.replace(/[.#$\[\]/]/g, "_");
  }

  const getResultados = async (userEmail) => {
    if (!userEmail) {
      console.log("Usuário não autenticado.");
      return;
    }

    const emailSanitizado = sanitizarEmail(userEmail);
    const docRef = doc(db, "resultados", emailSanitizado);

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDados(docSnap.data());
        console.log("Dados obtidos:", docSnap.data());
      } else {
        console.log("Nenhum documento encontrado para este e-mail.");
      }
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  const calcularMaiorTaxa = (acertosPorArea) => {
    const areas = Object.entries(acertosPorArea);
    const maior = areas.reduce(
      (prev, curr) => (curr[1] > prev[1] ? curr : prev),
      ["Você ainda não fez nenhum simulado", 0]
    );
    return maior[0];
  };

  const calcularMenorTaxa = (acertosPorArea) => {
    const areas = Object.entries(acertosPorArea);

    const areasComAcertos = areas.filter(([, valor]) => valor > 0);
    if (areasComAcertos.length === 0)
      return "Você ainda não fez nenhum simulado";

    const menor = areasComAcertos.reduce((prev, curr) =>
      curr[1] < prev[1] ? curr : prev
    );

    return menor[0];
  };
  const TaxaAcerto = () => {
    const total = dados.acertosTotais + dados.errosTotais;
    if (total > 0) {
      return (dados.acertosTotais * 100) / total;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    getResultados(userEmail);
  }, [userEmail]);

  return (
    <>
      <main id="mainDesempenho">
        <div id="menu">
          <img src={logo} alt="" id="imgLog" />
          <ul>
            <li onClick={() => navigate("/home")}>
              <img src={home} className="icones" alt="Home" />
              HOME
            </li>
            <hr />
            <br />
            <li onClick={() => navigate("/desempenho")}>
              <img src={desempenho} className="icones" alt="Desempenho" />
              DESEMPENHO
            </li>
            <hr />
            <br />
            <li onClick={() => navigate("/videoaula")}>
              <img src={videoAula} className="icones" alt="Vídeo Aulas" />
              VÍDEO AULAS
            </li>
            <hr />
            <br />
            <li onClick={() => navigate("/creditos")}>
              <img src={creditos} className="icones" alt="Créditos" />
              CRÉDITOS
            </li>
            <hr />
            <br />
            <li onClick={handleLogout}>
              <img src={sair} className="icones" alt="Sair" />
              SAIR
            </li>
            <hr />
            <br />
          </ul>
        </div>

        <div className="conteudo">
          <h1>DESEMPENHO</h1>
          <hr />
          <div className="desempenho-container">
            <div className="percentual-acertos">
              <h2>Percentual de Acertos</h2>
              {
                <GraficoPizza
                  dataErro={[
                    (100 - TaxaAcerto()).toFixed(2),
                    TaxaAcerto().toFixed(2)
                  ]}
                ></GraficoPizza>
              }
            </div>

            <div className="estatisticas">
              <div className="estatistica verde">
                <p>
                  <strong>{dados.acertosTotais}</strong>
                </p>
                <p>QUESTÕES QUE ACERTEI</p>
              </div>

              <div className="estatistica vermelha">
                <p>
                  <strong>{dados.errosTotais}</strong>
                </p>
                <p>QUESTÕES QUE ERREI</p>
              </div>

              <div className="estatistica">
                <p>Matéria com maior taxa de acerto</p>
                <p>
                  <strong>
                    {calcularMaiorTaxa(dados.acertosPorArea).toUpperCase()}
                  </strong>
                </p>
              </div>

              <div className="estatistica">
                <p>Matéria com maior taxa de erro</p>
                <p>
                  <strong>
                    {calcularMenorTaxa(dados.acertosPorArea).toUpperCase()}
                  </strong>
                </p>
              </div>

              <div className="estatistica">
                <p>Simulados Feitos</p>
                <p>
                  <strong>{dados.simuladosFeitos}</strong>
                </p>
              </div>

              <div className="estatistica">
                <p>Taxa de acertos nos simulados</p>
                <p>
                  {dados.acertosTotais + dados.errosTotais > 0
                    ? TaxaAcerto().toFixed(2) + "%"
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
          <br />

          <div className="materias-revisar">
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
                  <td>
                    {dados.acertosPorArea.matematica  > 0
                      ? (100 - ((dados.acertosPorArea.matematica * 100) / 15)).toFixed(2) + "%"
                      : "0.00%"}
                  </td>
                </tr>
                <tr>
                  <td>Linguagens</td>
                  <td>10</td>
                  <td>
                    {dados.acertosPorArea.linguagens > 0
                      ? (100 - ((dados.acertosPorArea.linguagens * 100) / 10)).toFixed(2) + "%"
                      : "0.00%"}
                  </td>
                </tr>
                <tr>
                  <td>Ciências Humanas</td>
                  <td>10</td>
                  <td>
                    {dados.acertosPorArea.humanas > 0
                      ? (100 - ((dados.acertosPorArea.humanas * 100) / 10)).toFixed(2) + "%"
                      : "0.00%"}
                  </td>
                </tr>
                <tr>
                  <td>Ciências Da Natureza</td>
                  <td>13</td>
                  <td>
                    {dados.acertosPorArea.natureza > 0
                      ? (100 - ((dados.acertosPorArea.natureza * 100) / 13)).toFixed(2) + "%"
                      : "0.00%"}
                  </td>
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
