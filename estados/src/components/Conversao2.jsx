import { useState } from 'react'
import './Conversao2.css'

function Conversao2() {
  const[km, setKm] = useState(0)
  const[milha,setMilhas] = useState(0)
  const[legua, setLegua] = useState(0) 
  function converterKmparaMilhas(){
    let entrada = Number(prompt('km:'))
    setMilhas(entrada * 0.621371)
    setLegua(entrada * 0,217124)
    setKm(entrada)

  }
    return (
    <div className='container-conversao2'>
        <h2>km ➡️ milhas ➡️ leguas </h2>
        <button onClick={converterKmparaMilhas}>Converter</button>
    <p>
      Km: {km}
    </p>
      <p>
        Milhas: {milha}
      </p>
      <p> 
        Leguas: {legua}
      </p>
    </div>
  )
}

export default Conversao2