import "./style.css";
import home from '../assets/Home.png';
import desempenho from '../assets/Desempenho.png';
import creditos from '../assets/Creditos.png';
import videoAula from '../assets/Videoaula.png';
import sair from '../assets/Sair.png';
import logo from '../assets/logoHeader.png';

function Desempenho() {
  return (
    <>
      <main id="mainDesempenho">
        <div id="menu">
          <img src={logo} alt="" id="imgLog" />
          <ul>
            <li><img src={home} className="icones" />Início</li>
            <hr /><br />
            <li><img src={desempenho} className="icones" />Desempenho</li>
            <hr /><br />
            <li><img src={videoAula} className="icones" />Vídeo Aulas</li>
            <hr /><br />
            <li><img src={creditos} className="icones" />Créditos</li>
            <hr /><br />
            <li><img src={sair} className="icones" />Sair</li>
            <hr /><br />
            <li>Dark mode</li>
          </ul>
        </div>
        
        <div className="conteudo">
          <h1>DESEMPENHO</h1>
          <hr />
        </div>
      </main>
    </>
  );
}

export default Desempenho;
