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

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <main id="mainHome">
        <div id="menu">
          <img src={logo} alt="" id="imgLog" />
          <ul>
            <li><img src={home} class="icones" />HOME</li>
            <hr></hr><br></br>
            <li><img src={desempenho} class="icones"/>DESEMPENHO</li>
            <hr></hr><br></br>
            <li><img src={videoAula} class="icones"/>VÍDEO AULAS</li>
            <hr></hr><br></br>
            <li><img src={creditos} class="icones"/>CRÉDITOS</li>
            <hr></hr><br></br>
            <li><img src={sair} class="icones"/>SAIR</li>
            <hr></hr><br></br>
            <li>Dark mode</li>
          </ul>
        </div>
        
        <div class="conteudo">
          <h1>ENEM</h1>

          <hr></hr>

          <div class="natureza">
            <h2><img src={natureza} class="icon"></img>Ciências da Natureza</h2> 
            <p>Neste simulado, você vai testar seus conhecimentos em Ciências da Natureza: Biologia, Física e Química, da maneira em que são mais cobrados. Ao todo, serão 15 questões: 10 com nível básico e médio, de conhecimento comum, pra revisar o que você já sabe, e 5 mais difíceis, retiradas de provas anteriores do Enem. Essa é uma ótima forma de treinar e se preparar para a prova de verdade!</p>
            <div class="buttons"><button onClick={() => navigate("/quiz")}>Iniciar Simulado</button></div>
            
          </div>

          <div class="matematica">
            <h2><img src={matematica} class="icon"></img>Matemática</h2>
            <p>Neste simulado, você vai testar seus conhecimentos em Matemática, resolvendo questões de Matemática Básica, Álgebra, Estátistica e Geometria. Ao todo, serão 15 questões: 10 com nível básico e médio, de conhecimento comum, pra revisar o que você já sabe, e 5 mais difíceis, retiradas de provas anteriores do Enem. Essa é uma ótima forma de treinar e se preparar para a prova de verdade!</p>
            <div class="buttons"><button>Iniciar Simulado</button></div>
          </div>

          <div class="humanas">
            <h2><img src={humanas} class="icon"></img>Ciências Humanas</h2>
            <p>Neste simulado, você vai testar seus conhecimentos em Ciências Humanas: História Geral e do Brasil, Geografia, Sociologia e Filosofia, da maneira em que são mais cobrados. Ao todo, serão 15 questões: 10 com nível básico e médio, de conhecimento comum, pra revisar o que você já sabe, e 5 mais difíceis, retiradas de provas anteriores do Enem. Essa é uma ótima forma de treinar e se preparar para a prova de verdade!</p>
            <div class="buttons"><button>Iniciar Simulado</button></div>
          </div>

          <div class="linguagens">
            <h2><img src={linguagens} class="icon"></img>Linguagens</h2>
            <p>Neste simulado, você vai testar seus conhecimentos em Linguagens: Literatura, Artes, Gramática, Educação Física e Lingua Estrangeira da maneira em que são mais cobrados. Ao todo, serão 15 questões: 10 com nível básico e médio, de conhecimento comum, pra revisar o que você já sabe, e 5 mais difíceis, retiradas de provas anteriores do Enem. Essa é uma ótima forma de treinar e se preparar para a prova de verdade!</p>
            <div class="buttons"><button>Iniciar Simulado</button></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;