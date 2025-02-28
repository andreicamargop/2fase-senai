import React, { useState } from 'react'

export default function Aviso() {
    const [avisar, Setavisar] = useState(false)

    function toggleAviso(){
        Setavisar(!avisar)
        console.log(avisar);
    }
 
    return (
    <div>
        {avisar && <p>
        Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.

       </p> }
        <button onClick={toggleAviso}>Aviso</button>
        
    </div>
  )
}
