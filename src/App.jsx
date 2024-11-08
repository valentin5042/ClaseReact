import { useState } from 'react'

import Header from './ui/Header'
import Inicio from './components/Inicio'
import Mensaje from './ui/Mensaje'
import Somos from './components/Somos'
import Servicios from './components/Servicios'
import Formulario from './components/Formulario'

const App = () => {

  const [ modalAbierto, setModalAbierto ] = useState(false);

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  return (
    <div className='flex flex-col items-center'>

      <Header abrirModal={ abrirModal } />

      <Inicio abrirModal={ abrirModal } />

      <Mensaje />

      <Somos abrirModal={ abrirModal } />

      <Servicios />

      {modalAbierto && (
        <div
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50'
          onClick={ cerrarModal }
        >
          <div style={{ backgroundColor: '#174a82' }} className='bg-white rounded-2xl p-6' onClick={ (e) => e.stopPropagation() }>
            <Formulario onClose={ cerrarModal }/>
          </div>
        </div>
      )}

    </div>
  )
}

export default App