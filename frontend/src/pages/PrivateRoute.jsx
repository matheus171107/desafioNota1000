import { Navigate } from "react-router-dom";
import { auth } from "../../firebaseConfig"; // ← verifique este caminho
import { useAuthState } from "react-firebase-hooks/auth";
import carregando from "../assets/carregando.gif"

function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <img src={carregando} alt="" width="60px" />;
  if (!user) return <Navigate to="/" />; // volta ao login
  return children;
}
export default PrivateRoute;