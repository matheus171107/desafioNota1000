import "./style.css"
import home from '../assets/Home.png'
import desempenho from '../assets/Desempenho.png'
import creditos from '../assets/Creditos.png'
import videoAula from '../assets/Videoaula.png'
import sair from '../assets/Sair.png'
import natureza from '../assets/natureza.png'
import matematica from '../assets/matematica.png'
import humanas from '../assets/humanas.png'
import linguagens from '../assets/linguagens.png'
import logo from '../assets/logoHeader.png'
import { useNavigate } from 'react-router-dom';
import Logout from "../components/Logout";
import { auth } from "../../firebaseConfig";


function Home() {
  const navigate = useNavigate();
  const handleLogout = Logout();
  const email = auth.currentUser.email;
  const foto = auth.currentUser.photoURL;
  const user = auth.currentUser.displayName;

  return (
    <>
      <main id="mainHome">
        <div id="menu">
          <img src={logo} alt="" id="imgLog" />
          <ul>
            <li onClick={() => navigate('/home')}><img src={home} className="icones" />HOME</li>
            <hr></hr><br></br>
            <li onClick={() => navigate('/desempenho')}><img src={desempenho} className="icones"/>DESEMPENHO</li>
            <hr></hr><br></br>
            <li onClick={() => navigate('/videoaula')}><img src={videoAula} className="icones"/>VÍDEO AULAS</li>
            <hr></hr><br></br>
            <li onClick={() => navigate('/creditos')}><img src={creditos} className="icones"/>CRÉDITOS</li>
            <hr></hr><br></br>
            <li onClick={handleLogout}><img src={sair} className="icones"/>SAIR</li>
            <hr></hr><br></br>
            <li style={{display:'flex'}}>
            <input id="checkboxInput" type="checkbox"/>
            <label className="toggleSwitch" for="checkboxInput">
            </label>
              Dark mode
            </li>
          </ul>
        </div>
        
        <div className="conteudo">
          <h1>ENEM</h1>
          <hr></hr>

          <div className="natureza">
            <h2><img src={natureza} className="icon"></img>Ciências da Natureza</h2> 
            <p>Neste simulado, você vai testar seus conhecimentos em Ciências da Natureza: Biologia, Física e Química, da maneira em que são mais cobrados. Ao todo, serão 15 questões: 10 com nível básico e médio, de conhecimento comum, pra revisar o que você já sabe, e 5 mais difíceis, retiradas de provas anteriores do Enem. Essa é uma ótima forma de treinar e se preparar para a prova de verdade!</p>
            <div className="buttons"><button onClick={() => navigate("/quiz" , 
            {state:{
              materia:"natureza", 
              area: "CIÊNCIAS DA NATUREZA"}
            })}>Iniciar Simulado</button></div>
            
          </div>

          <div className="matematica">
            <h2><img src={matematica} className="icon"></img>Matemática</h2>
            <p>Neste simulado, você vai testar seus conhecimentos em Matemática, resolvendo questões de Matemática Básica, Álgebra, Estátistica e Geometria. Ao todo, serão 15 questões: 10 com nível básico e médio, de conhecimento comum, pra revisar o que você já sabe, e 5 mais difíceis, retiradas de provas anteriores do Enem. Essa é uma ótima forma de treinar e se preparar para a prova de verdade!</p>
            <div className="buttons"><button onClick={() => navigate("/quiz" , 
              {state:{
                materia:"matematica",
                area: "MATEMÁTICA"}
              })}>Iniciar Simulado</button></div>
          </div>

          <div className="humanas">
            <h2><img src={humanas} className="icon"></img>Ciências Humanas</h2>
            <p>Neste simulado, você vai testar seus conhecimentos em Ciências Humanas: História Geral e do Brasil, Geografia, Sociologia e Filosofia, da maneira em que são mais cobrados. Ao todo, serão 15 questões: 10 com nível básico e médio, de conhecimento comum, pra revisar o que você já sabe, e 5 mais difíceis, retiradas de provas anteriores do Enem. Essa é uma ótima forma de treinar e se preparar para a prova de verdade!</p>
            <div className="buttons"><button onClick={() => navigate("/quiz" , 
              {state:{
                materia:"humanas",
                area: "CIÊNCIAS HUMANAS"}
              })}>Iniciar Simulado</button></div>
          </div>

          <div className="linguagens">
            <h2><img src={linguagens} className="icon"></img>Linguagens</h2>
            <p>Neste simulado, você vai testar seus conhecimentos em Linguagens: Literatura, Artes, Gramática, Educação Física e Lingua Estrangeira da maneira em que são mais cobrados. Ao todo, serão 15 questões: 10 com nível básico e médio, de conhecimento comum, pra revisar o que você já sabe, e 5 mais difíceis, retiradas de provas anteriores do Enem. Essa é uma ótima forma de treinar e se preparar para a prova de verdade!</p>
            <div className="buttons"><button onClick={() => navigate("/quiz" , 
              {state:{
                materia:"linguagens", 
                area: "LINGUAGENS"}})}>Iniciar Simulado</button></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;