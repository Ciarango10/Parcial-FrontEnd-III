import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import './Styles/Form.css'

function App() {
  const [payload, setPayload] = useState({
    name: "",
    password: ""
  });
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const handleName = (e) => setPayload({...payload, name: e.target.value});
  const handlePassword = (e) => setPayload({...payload, password: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar que no tenga espacios en blanco al inicio
    const RegExp = /^\s/;

    if(RegExp.test(payload.name) || payload.name.trim().length < 3 || payload.password.trim().length < 6) {
      setError(true);
      setShow(false);
    } else {
      setError(false);
      setShow(true);
    }
  }

  return (
    <div className='app'>
      {
        show
        ? <Card payload={payload} />
        : <div>
            <h1>Carga de estudiantes</h1>
            <form onSubmit={handleSubmit} >
              <div>
                <label htmlFor="txtName">Nombre: </label>
                <input type="text" id='txtName' onChange={handleName} value={payload.name} />
              </div>
              <div>
                <label htmlFor="txtPassword">Contraseña: </label>
                <input type="password" id='txtPassword' onChange={handlePassword} value={payload.password} />
              </div>
              <button type='submit'>Ingresar</button>
            </form>
          </div>
      }  
      { error 
        ? <div><h3 style={{color:"red"}}>Por favor chequea que la información sea correcta</h3></div> 
        : null
      }
    </div>
  )
}

export default App
