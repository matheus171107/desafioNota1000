import Header from '../components/Header'  
import "./home.css"
import logo from '../assets/logoHeader.png'
import home from '../assets/Home.png'
  
function Home() {
  return (
    <>
    <main id="mainHome">
      <div id="menuLateral">
        <img src={logo} alt="" />
        <ul>
          <li><img src={home} alt="" />Home</li>
          <li>Desempenho</li>
          <li>Video Aulas</li>
          <li>Créditos</li>
          <li>Sair</li>
        </ul>
      </div>
      <div id="conteudo">
        <h1>ENEM</h1>
        <hr/>
      </div>
    </main>
    </>
  );
}

export default Home;
