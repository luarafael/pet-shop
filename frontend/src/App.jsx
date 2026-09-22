import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>PetShop</h1>

      <h2>Pets Cadastros</h2>
      
      {pets.map(pet => (
        <div key= {pet.id}>
          <p>Nome</p>
          <p>Espécie</p>
          <p>Raça</p>
          <hr />
        </div>
      ))}
    </>
  )
}

export default App
