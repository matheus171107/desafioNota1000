import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Desempenho from "./pages/Desempenho"
import Quiz from "./pages/Quiz"
import "./App.css"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);
  console.log(user)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/desempenho" element={<Desempenho />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  )
} 

export default App
