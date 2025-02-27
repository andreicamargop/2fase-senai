
  import { useState } from 'react'
  import './App.css'
import Conversao from './components/conversao';
import Conversao2 from './components/Conversao2';


  function App() {
    const [usuario, setUsuario] = useState("Juca ");
    const [nome, setNome] = useState("Juca");


  function lernome(){
    let nome = prompt("Digite seu nome")
    setNome(nome);
  }
    function lerUsuario(){
      let resposta = prompt("digite o novo usuario?")
      setUsuario(resposta);
    }
    return (
      <>
         <Conversao />
         <Conversao2 />

        <h1>Estados</h1>
        Nome: {nome}
        <div>
        Usuário: {usuario}
        </div>
        <button onClick={lernome}>Alterar nome</button>
        <button onClick={lerUsuario}> Trocar Usuario </button>
      </>
    )
  }

  export default App
