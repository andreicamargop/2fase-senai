import './Corpov2.css'
function Corpo(){
    function alertarUsuario(){
        alert("cuidadoooo!!")
    }
    return (
       <div className="container-corpo">
        <h1>Desbravando o React</h1>
         <p>Vamos começar a nossa avetura!</p>
         <button onClick={alertarUsuario}>Alerta</button>
        <img  onClick={alertarUsuario} className='imagem' src="./vegita.avif" alt="" />
        {6+6}
       </div>
    )
}
export default Corpo; 
