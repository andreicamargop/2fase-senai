import { useState } from 'react'
import './App.css'

function App() {
  const [valorImput, setValorImput] = useState()
  const [ValorTotal, setValorTotal] = useState (0)

function credito(){
  const valor = Number(valorImput)
  setValorTotal(ValorTotal + valor) 
  setValorImput('')   
  }

function debito(){
  const valor = Number(valorImput)
  setValorTotal(ValorTotal - valor)
  setValorImput('')
}
  

  return (
    <>
      <div className='body'>

      <div className='quadro'>

        <div> 
          <h1>Imesada</h1>
          <h4>Controlinho financeiro</h4>
        </div>
        
          <div className='saldo'>
           <h2>💰Saldo: R${ValorTotal.toFixed(2)}</h2> 
          </div>

          <div className='botoes'>
        
            <button onClick={debito} className='botao-debito'>Débito</button>
            <button onClick={credito} className='botao-credito'>Credito</button>
            
          </div>

            <div>
              <input type="Number"
              value={valorImput}
              onChange={(e) => setValorImput(e.target.value)}/>
            </div>
        
        </div>
      
      </div>

      

    
    </>
  )
}

export default App
