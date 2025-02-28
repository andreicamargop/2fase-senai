import './Conversao.css' 
import { useState } from 'react'
function Conversao() {
  
  const[ real, setReal] = useState(0)
  const[dolar,setDolar] = useState(0)
function converterRealParaDolar(){
  let entrada = Number(prompt('R$:'))
  setdolar ((entrada*0.1731).toFixed(2))
  setReal (entrada)
};

  return (

<div className="container-conversao">
  
      <h2> Real ➡️ Dolar</h2>
    <button onClick={converterRealParaDolar}>Converter</button>
    <p>
      valor original :R${real}
    </p>
      <p>
        valor convertido: U${dolar}
      </p>



      </div>
  )
}

export default Conversao    