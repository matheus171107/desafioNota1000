import "./style.css"
import home from '../assets/Home.png'
import desempenho from '../assets/Desempenho.png'
import creditos from '../assets/Creditos.png'
import videoAula from '../assets/Videoaula.png'
import sair from '../assets/Sair.png'
import logo from '../assets/logoHeader.png'
import { useNavigate } from 'react-router-dom';

function Creditos() {
  const navigate = useNavigate();
  return (
    <>
      <main id="mainCreditos">
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
          <h1>AGRADECIMENTOS</h1>
          <hr></hr><br></br>

          <div class="textodeAgradecimento">
            <p>Somos alunos do 3º ano de Desenvolvimento de Sistemas, e criamos esse site com o objetivo de oferecer materiais educativos de qualidade. Estamos felizes por você estar utilizando nosso conteúdo para aprender e crescer! Nosso compromisso é fornecer recursos que sejam não apenas informativos, mas também que ajudem a construir uma comunidade de aprendizado colaborativo entre os estudantes.</p>
          </div><br></br>

          <hr></hr>

          <div class="creditos">
            <h3>Créditos e Reconhecimentos</h3>

            <p>Desenvolvimento do Site:</p>
            <div class="funcao">
              <ul>
                <li>Amanda de Araújo Martins: <b>Back-End</b></li>
                <li>Ana Carolina Constantino de Oliveira: <b>Banco de Dados</b></li>
                <li>Ana Julia Camargo Senna: <b>Líder do grupo e Back-End</b></li>
                <li>Isabely Martins Zamperim: <b>Front-End</b></li>
                <li>Laura Dellovo Mora: <b>Documentação e Banco de Dados</b></li>
                <li>Matheus de Souza Alves Pereira: <b>Líder do grupo e Back-End</b></li>
                <li>Yasmin Ramos Fernandes: <b>Front-End</b></li>
              </ul>
            </div>

            <p>Video Aulas:</p>
            <div class="videos">
              <ul>
                <li>BIOLOGIA. AULÃO DE BIOLOGIA PARA O ENEM: os 10 temas que mais caem. Profes Juliana Evelyn e Claudia Aguiar, 2022. Disponível em: <b>https://www.youtube.com/watch?v=LH9vrmh-5Q0</b>. Acesso em: 20/05/2025.</li>
                <li>QUÍMICA. AULÃO DE QUÍMICA PARA O ENEM: 10 temas que mais caem | Aulão Enem | Profes. Larissa e Sobis, 2023. Disponível em: <b>https://youtu.be/akKNhBT14gs?si=QwKJnQSqi7yOxS7I</b>. Acesso em: 20/05/2025.</li>
                <li>FÍSICA. AULÃO DE FÍSICA PARA O ENEM: Resumo dos 10 temas que mais caem na prova. Prof Antônio Martins Tonho, 2022. Disponível em: <b>https://youtu.be/hxciSW_B8Hw?si=tUB_YL-dpduB4-B_</b>. Acesso em: 20/05/2025.</li>
                <li>HISTÓRIA. AULÃO DE HISTÓRIA GERAL PARA O ENEM: 5 temas que mais caem | Aulão Enem| Profa. Ana Cristina, 2023. Disponível em: <b>https://youtu.be/LxuTxkHAXeQ?si=2f3rN1R35y_xlUxv</b>. Acesso em: 20/05/2025.</li>
                <li>GEOGRAFIA. AULÃO ENEM DE GEOGRAFIA: 10 temas que mais caem | Aulão Enem 2024 | Eduardo e Carrieri, 2024. Disponível em: <b>https://youtu.be/5w4MOmECfaA?si=DQKvp-SiKHCGkv0r</b>. Acesso em: 20/05/2025.</li>
                <li>FILOSOFIA. AULÃO ENEM DE FILOSOFIA: 5 temas que mais caem | Aulão Enem 2024 | Ernani Júnior da Silva, 2024. Disponível em: <b>https://youtu.be/OS7aVKiJvCU?si=iWnWcpGK5ZEyvEta</b>. Acesso em: 20/05/2025.</li>
                <li>SOCIOLOGIA. AULÃO ENEM DE SOCIOLOGIA: 5 temas que mais caem | Aulão Enem 2024 | Fábio Luís Pereira, 2024. Disponível em: <b>https://youtu.be/FtOoP5Rh0cg?si=alsnKC1Kuyvrs9BJ</b>. Acesso em: 20/05/2025.</li>
                <li>LITERATURA. AULÃO ENEM DE LITERATURA: 10 temas que mais caem | Aulão Enem 2024 | Camila Brambilla, 2024. Disponível em: <b>https://youtu.be/s58gHp2L7t4?si=tVgas_z52Vwn_uci</b>. Acesso em: 20/05/2025.</li>
                <li>ARTE. AULÃO DE ARTE PARA O ENEM: conheça os temas que mais caem | Aulão Enem | Profa. Mariane Martins, 2023. Disponível em: <b>https://youtu.be/8jRs5CZwbQM?si=vzzv2M533_vzVVrp</b>. Acesso em: 20/05/2025.</li>
                <li>GRAMÁTICA. AULÃO ENEM DE PORTUGUÊS: 10 temas que mais caem | Aulão Enem 2024 | Fernanda e Mercedes, 2024. Disponível em: <b>https://youtu.be/SwjUGs1JPHk?si=mSxGFOkRG9auSEl_</b>. Acesso em: 20/05/2025.</li>
                <li>LÍNGUA ESTRANGEIRA. Qual ESCOLHER no ENEM: ESPANHOL ou INGLÊS?, 2022. Disponível em: <b>https://youtu.be/F_T9YoEad2A?si=rtDg2O-yJa95P2N0</b>. Acesso em: 20/05/2025.</li>
                <li>EDUCAÇÃO FÍSICA. Educação Física no ENEM: Como estudar?, 2022. Disponível em: <b>https://youtu.be/AzSdDAUMCjg?si=n7Z3u7kq3YBQ37hM</b>. Acesso em: 20/05/2025.</li>
                <li>MATEMÁTICA. AULÃO DE MATEMÁTICA PARA O ENEM E VESTIBULARES: Resumo dos 10 temas que mais caem na prova, 2022. Disponível em: <b>https://youtu.be/MSZdhDBoXe0?si=sFVxntGBzBR-EMgr</b>. Acesso em: 20/05/2025.</li>
              </ul>
            </div>

            <p>Questões e Exercícios:</p>
            <div class="questoesExercicios">
              <ul>
                <li>DESCOMPLICA. Estudar para o Enem. Disponível em: <b>https://descomplica.com.br/vestibulares-enem/estudar</b>. Acesso em: 15 maio 2025.</li>
                <li>REPERTÓRIO ENEM. Disponível em: <b>https://repertorioenem.com.br/</b>. Acesso em: 15 maio 2025.</li>
                <li>XEQUE-MATE ENEM. Disponível em: <b>https://xequematenem.com.br/</b>. Acesso em: 15 maio 2025.</li>
              </ul>
            </div>
          </div><br></br>

          <hr></hr>

          <div class="contatos">
            <p>Entre em contato:</p>
            <h4>Caso tenha dúvidas ou sugestões, entre em contato conosco pelo e-mail:
              <p><b>🖂 desafionota1000@gmail.com</b>.</p>
            </h4>
            <ul class="wrapper">
          <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
            <li class="icon facebook">
              <span class="tooltip">Facebook</span>
              
                <svg
                  viewBox="0 0 320 512"
                  height="1.2em"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              
            </li>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{color:'red'}}>
            <li class="icon instagram">
              <span class="tooltip">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.2em"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                ></path>
              </svg>
            </li>
          </a>
        </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Creditos;