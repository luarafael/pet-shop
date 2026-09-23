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
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>🐾 PetShop System</h1>
        <p style={styles.subtitle}>Pets e Responsáveis Cadastrados</p>
      </header>

      <div style={styles.grid}>
        {pets.map((pet) => (
          <div key={pet.pet_id} style={styles.card}>
            <div style={styles.petHeader}>
              <h3 style={styles.petName}>{pet.pet_nome}</h3>
              <span style={styles.badge}>{pet.pet_raca}</span>
            </div>

            <div style={styles.cardBody}>
              <p style={styles.info}>
                <strong>Idade:</strong> {pet.pet_idade}
              </p>
              <div style={styles.divider}></div>
              <p style={styles.info}>
                <strong>Dono:</strong> {pet.cliente_nome}
              </p>
              <p style={styles.info}>
                <strong>Contato:</strong> {pet.cliente_telefone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Estilos em linha para garantir que funcione de primeira
const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#2c3e50",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#7f8c8d",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    border: "1px solid #eaeaea",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    textAlign: "left",
  },
  petHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
    borderBottom: "2px solid #f4f6f7",
    paddingBottom: "10px",
  },
  petName: {
    margin: 0,
    fontSize: "1.3rem",
    color: "#2c3e50",
  },
  badge: {
    backgroundColor: "#e8f4fd",
    color: "#3498db",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "600",
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  info: {
    margin: 0,
    fontSize: "0.95rem",
    color: "#555",
  },
  divider: {
    height: "1px",
    backgroundColor: "#f0f0f0",
    margin: "8px 0",
  },
};

export default App;
