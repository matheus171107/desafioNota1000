const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

const app = express();
app.use(cors());
app.use(express.json());

// Inicializando o Firebase Admin SDK
if (!admin.apps.length) {
    try {
        const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}');
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
    } catch (error) {
        console.error("Erro ao inicializar o Firebase Admin SDK:", error);
    }
}

const db = admin.firestore();

// Rota para obter perguntas
app.get("/api/linguagens", async (req, res) => {
  try {
    const snapshot = await db.collection("linguagens").get();
    const perguntas = snapshot.docs.map((doc) => doc.data());
    res.json(perguntas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar perguntas" });
  }
});

app.get("/api/matematica", async (req, res) => {
  try {
    const snapshot = await db.collection("matematica").get();
    const perguntas = snapshot.docs.map((doc) => doc.data());
    res.json(perguntas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar perguntas" });
  }
});

app.get("/api/natureza", async (req, res) => {
  try {
    const snapshot = await db.collection("natureza").get();
    const perguntas = snapshot.docs.map((doc) => doc.data());
    res.json(perguntas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar perguntas" });
  }
});

app.get("/api/humanas", async (req, res) => {
  try {
    const snapshot = await db.collection("humanas").get();
    const perguntas = snapshot.docs.map((doc) => doc.data());
    res.json(perguntas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar perguntas" });
  }
});

app.get("/", (req, res) => {
  res.status(200).send("API rodando com sucesso!");
});

module.exports = app;