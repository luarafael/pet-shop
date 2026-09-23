import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function carregarPets() {
      try {
        const resposta = await axios.get("http://localhost:3000/pet");
        const dadosPets = Array.isArray(resposta.data) ? resposta.data : [];
        setPets(dadosPets);
      } catch (error) {
        console.error("Erro ao buscar os pets:", error);
      }
    }

    carregarPets();
  }, []);

  return (
    <>
      <h1>PetShop</h1>
      <h2>Pets e Responsáveis Cadastrados</h2>

      {pets.map((pet) => (
        <div
          key={pet.pet_id}
          style={{ marginBottom: "20px", textAlign: "left" }}
        >
          <p>
            <strong>Nome do Pet:</strong> {pet.pet_nome}
          </p>
          <p>
            <strong>Raça:</strong> {pet.pet_raca}
          </p>
          <p>
            <strong>Idade:</strong> {pet.pet_idade}
          </p>
          <p>
            <strong>Dono (Cliente):</strong> {pet.cliente_nome}
          </p>
          <p>
            <strong>Telefone:</strong> {pet.cliente_telefone}
          </p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default App;
