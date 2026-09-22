import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

const conexao = mysql.createPool({
  host: "petshop",
  user: "petshop",
  password: "petshop",
  database: "petshop",
});

app.get("/cachorros", async (req, res) => {
  const [cachorros] = await connection.query("SELECT * FROM cachorro");
  res.json(cachorros);
});

app.get("/gato", async (req, res) => {
  const [gatos] = await connection.query("SELECT * FROM gato");
  res.json(gatos);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
