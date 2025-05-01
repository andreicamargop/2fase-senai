import { useEffect, useState } from 'react'
import './Sorteio.css'

function Sorteio() {
    const[inputNome, setImputNome] = useState('')
    const[nomes, setNomes] = useState ([])

useEffect(()=> console.log(nomes)
,[nomes])

    function cadastrarNome(){
        setNomes([inputNome, ...nomes])
       // console.log(nomes);
    }
  return (
    <div className='container-sorteio'>
        <h2>SORTEIO !!</h2>
        <p>Inscreva-se aqui para o sroteio de uma linda camiseta</p>
        <label htmlFor="Nome"></label>
        <input type="text" 
        value={inputNome}
        onChange={(Event) => setImputNome(Event.target.value)}
        />
        <button onClick={cadastrarNome}>Cadastrar</button>
        <button>Faltou Sortear</button>
        
        </div>
  )
}

export default Sorteio