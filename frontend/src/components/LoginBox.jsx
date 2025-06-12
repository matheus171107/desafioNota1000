import logo from "../assets/logoHeader.png";
import google from "../assets/google.png";
import { auth } from "../../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    const loginGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("Usuário logado com Google:", result.user);
            navigate("/home");
        } catch (error) {
            alert("Erro ao fazer login: " + error.message);
        }
    };
    const cadastrarUser = async ({ email, senha }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha); // Use "senha" aqui
            console.log("Usuário criado:", userCredential.user);
            navigate("/home"); 
        } catch (error) {
            if(error.code == "auth/email-already-in-use"){
                await loginEmail(email, senha)
            }else{
                console.log(error.code)
            }
        }
    };

    const loginEmail = async (email, senha) => {    
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, senha);
            console.log("Usuário logado:", userCredential.user);
            navigate("/home");
        } catch (error) {
            if (error.code === 'auth/invalid-credential') {
                window.alert("Usuario ou Senha Invalidas");
            }else { 
                console.log(error.code)
            }
        }
    };

    return (
        <>
            <div id="loginPageLogo">
                <img src={logo} alt="Logo" />
            </div>
            <div id="loginPage">
                <h1>Login</h1>
                <p>Usuário</p>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>Senha</p>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <div id="buttonArea">
                    <button id="login" onClick={() => cadastrarUser({ email, senha })}>Login</button>
                    <button id="loginGoogle" onClick={loginGoogle}>
                        <img src={google} alt="Google" id="google" /> Login com Google
                    </button>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
