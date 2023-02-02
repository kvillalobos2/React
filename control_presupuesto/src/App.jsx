import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal';
function App() {
  // se define en la app principal para poder utilizarlos en los demás componentes
  const [presupuesto, setPresupuesto] = useState();
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  // es false porque no queremos que se muestre hasta dar click
  const [modal, setModal] =useState(false)
  const handleNuevoGasto=()=>{
    setModal(true)
  }
  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}>
      </Header>
      {isValidPresupuesto && (
        <div className="nuevo-gasto">
          <img
            src={IconoNuevoGasto}
            alt="icono nuevo gasto"
            onClick={handleNuevoGasto} />

        </div>
      ) }

      {modal && 
      <Modal
      setModal={setModal}></Modal>}

    </div>
  )
}

export default App
