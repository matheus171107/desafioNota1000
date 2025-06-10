import { getAuth, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Usuário deslogado com sucesso.");
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Erro ao deslogar:", error);
      });
  };

  return handleLogout;
};

export default Logout;
