import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Desafio Nota 1000!</h1>
      <Link to="/quiz"><button>Começar o Quiz</button></Link>
      <Link to="/ranking"><button>Ver Ranking</button></Link>
    </div>
  );
}

export default Home;
