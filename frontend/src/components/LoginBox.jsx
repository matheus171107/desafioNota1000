import logo from "../assets/logoHeader.png"
import google from "../assets/google.png"
import { auth } from "../../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function LoginPage(){
    const navigate = useNavigate();
    const loginGoogle = async () => {
        const provider = new GoogleAuthProvider();
    
        try {
          const result = await signInWithPopup(auth, provider);

          const userName = result.user.displayName;
          const email = result.user.email;
          const photoLink =  result.user.photoURL;

          console.log("Nome de Usuário: ", userName);
          console.log("Email: ", email);
          console.log("FotoPerfil: ", photoLink);
          navigate("/home");

        } catch (error) {
          alert("Erro ao fazer login: ", error);
        }
      };
    return(
        <>
            <div id="loginPageLogo">
                <img src={logo} alt="" />
            </div>
            <div id="loginPage">
                <h1>Login</h1>
                <p>Usuário</p>
                <input type="text" name="username" id="username" placeholder="Digite seu email" />
                <p>Senha</p>
                <input type="password" name="password" id="password" placeholder="Digite sua senha" />

                <div id="buttonArea">
                    <button id="login">Login</button>
                    <button id="loginGoogle" onClick={loginGoogle}><img src={google} alt="" id="google" /> Login com Google</button>
                </div>
            </div>
        </>
    )
}

export default LoginPage;

