
  import { useState } from 'react'
  import './App.css'
import Conversao from './components/conversao';
import Conversao2 from './components/Conversao2';
import Estados from './components/Estados';
import Aviso from './components/Aviso';


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
         <Aviso />
         <Conversao />
         <Conversao2 />
         <Estados />

      </>
      
    )
  }

  export default App
