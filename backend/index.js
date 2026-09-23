import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

const conexao = mysql.createPool({
  host: "petshop-db",
  user: "petshop",
  password: "petshop",
  database: "petshop",
});

app.get("/clientes", async (req, res) => {
  const [clientes] = await conexao.query("SELECT * FROM cliente");
  res.json(clientes);
});

app.get("/pet", async (req, res) => {
  const [pets] = await conexao.query(` 
      SELECT 
        pet.id AS pet_id,
        pet.nome AS pet_nome,
        pet.raca AS pet_raca,
        pet.idade AS pet_idade,
        cliente.id AS cliente_id,
        cliente.nome AS cliente_nome,
        cliente.telefone AS cliente_telefone
      FROM pet
      JOIN cliente ON pet.cliente_id = cliente.id
    `);
  res.json(pets);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
