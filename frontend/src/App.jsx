import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig"
import Login from "./pages/Login"
import PrivateRoute from "./pages/PrivateRoute";
import Home from "./pages/Home"
import Desempenho from "./pages/Desempenho"
import Quiz from "./pages/Quiz"
import Creditos from "./pages/Creditos"
import VideoAula from "./pages/VideoAula"
import "./App.css"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      } />
        <Route path="/desempenho" element={
        <PrivateRoute>
          <Desempenho />
       </PrivateRoute>} />
        <Route path="/quiz" element={
          <PrivateRoute>
            <Quiz />
          </PrivateRoute>} />
        <Route path="/creditos" element={
          <PrivateRoute>
            <Creditos />  
          </PrivateRoute>
        } />
        <Route path="/videoaula" element={
          <PrivateRoute>
            <VideoAula />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  )
} 

export default App
