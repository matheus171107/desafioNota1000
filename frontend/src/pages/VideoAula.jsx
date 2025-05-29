import "./style.css";
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

function VideoAula() {
  const navigate = useNavigate();
  return (
    <>
      <main id="mainVideoAula">
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
          <h1>VIDEO AULA</h1>
          <hr></hr>

          <div class="areaVideos">
            {/* NATUREZA */}
            <div class="naturezaV">

              <div className="descricaoVideo">
                <h2><img src={natureza} class="icon"></img>Ciências da Natureza</h2>
                <h3>BIOLOGIA</h3>
                <p>Entenda como a Biologia aparece nas provas do ENEM</p>
              </div>

              <div>
                <iframe width="760" height="300" src="https://www.youtube.com/embed/LH9vrmh-5Q0?si=9ootcF4k7jpudZQB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ padding: 10 }}></iframe>
              </div>

              <div className="descricaoVideo">
                <h3>QUÍMICA</h3>
                <p>Entenda como a Química aparece nas provas do ENEM</p>
              </div>

              <div>
                <iframe width="760" height="315" src="https://www.youtube.com/embed/akKNhBT14gs?si=dzl2wD2-P3BLcBT5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ padding: 10 }}></iframe>
              </div>

              <div className="descricaoVideo">
                <h3>FÍSICA</h3>
                <p>Entenda como a Física aparece nas provas do ENEM</p>
              </div>
              <div>
                <iframe width="760" height="315" src="https://www.youtube.com/embed/hxciSW_B8Hw?si=EXIsw4HaoOzRxD9a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ padding: 10 }}></iframe>
              </div>
            </div><br></br>



            {/* MATEMATICA */}
            <div class='matematicaV'>

              <div className="descricaoVideo">
                <h2><img src={matematica} class="icon"></img>Matemática</h2>
                <h3>MATEMÁTICA</h3>
                <p>Entenda como a Matemática aparece nas provas do ENEM</p>
              </div>

              <div>
                <iframe width="760" height="315" src="https://www.youtube.com/embed/MSZdhDBoXe0?si=SJ6Zr7OO0jPYMNQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ padding: 10 }}></iframe>
              </div>

            </div><br></br>

            {/* HUMANAS */}
            <div class='humanasV'>

              <div className="descricaoVideo">
                <h2><img src={humanas} class="icon"></img>Ciências Humanas</h2>
                <h3>HISTÓRIA</h3>
                <p>Entenda como a História aparece nas provas do ENEM</p>
              </div>

              <div>
                <iframe width="760" height="315" src="https://www.youtube.com/embed/LxuTxkHAXeQ?si=6POw5sCMPvX3LaFv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ padding: 10 }}></iframe>
              </div>

              <div className="descricaoVideo">
                <h3>GEOGRAFIA</h3>
                <p>Entenda como a Geografia aparece nas provas do ENEM</p>
              </div>
              <div>
                <iframe width="760" height="315" src="https://www.youtube.com/embed/5w4MOmECfaA?si=VV5Xed3p-4jrZ6_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ padding: 10 }}></iframe>
              </div>
    
              <div className="descricaoVideo">
                <h3>FILOSOFIA</h3>
                <p>Entenda como a Filosofia aparece nas provas do ENEM</p>
              </div>
              <div>
              <iframe width="760" height="315" src="https://www.youtube.com/embed/OS7aVKiJvCU?si=a6DL31eqwpJ3BMVJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{padding: 10}}></iframe> 
              </div>

              <div className="descricaoVideo">
                <h3>SOCIOLOGIA</h3>
                <p>Entenda como a Sociologia aparece nas provas do ENEM</p>
              </div>
              <div>
              <iframe width="760" height="315" src="https://www.youtube.com/embed/FtOoP5Rh0cg?si=YdT2-FKXiJZepLo-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{padding: 10}}></iframe> 
              </div>
            </div>

             {/* LINGUAGENS */}
             <div class='literaturaV'>

              <div className="descricaoVideo">
              <h2><img src={linguagens} class="icon"></img>Linguagens</h2>
                <h3>LITERATURA</h3>
                <p>Entenda como a Literatura aparece nas provas do ENEM</p>
              </div>

              <div>
              <iframe width="760" height="315" src="https://www.youtube.com/embed/s58gHp2L7t4?si=ULFKkc4qBnPLdMDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ padding: 10 }}></iframe>
              </div>

              <div className="descricaoVideo">
                <h3>ARTES</h3>
                <p>Entenda como a Artes aparece nas provas do ENEM</p>
              </div>
              <div>
              <iframe width="760" height="315" src="https://www.youtube.com/embed/8jRs5CZwbQM?si=LE5J5fxGxc-19sYr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  style={{ padding: 10 }}></iframe>
              </div>

              <div className="descricaoVideo">
                <h3>GRAMÁTICA</h3>
                <p>Entenda como a Gramática aparece nas provas do ENEM</p>
              </div>
              <div>
              <iframe width="760" height="315" src="https://www.youtube.com/embed/SwjUGs1JPHk?si=3OXCCFgZoLG1ofvp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{padding: 10}}></iframe> 
              </div>

              <div className="descricaoVideo">
                <h3>LÍNGUA ESTRANGEIRA</h3>
                <p>Entenda como a Língua Estrangeira aparece nas provas do ENEM</p>
              </div>
              <div>
              <iframe width="760" height="315" src="https://www.youtube.com/embed/F_T9YoEad2A?si=t6wua6vb5c3bJNHk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{padding: 10}}></iframe>
              </div>

              <div className="descricaoVideo">
                <h3>EDUCAÇÃO FÍSICA</h3>
                <p>Entenda como a Educação Física aparece nas provas do ENEM</p>
              </div>
              <div>
              <iframe width="760" height="315" src="https://www.youtube.com/embed/AzSdDAUMCjg?si=EzTVSASkavB0_vjZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  style={{ padding: 10 }}></iframe>
              </div>
              </div>         

          </div>
        </div>
      </main>
    </>
  );
}

export default VideoAula;