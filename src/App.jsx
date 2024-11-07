import Header from './ui/Header'
import Inicio from './components/Inicio'
import Mensaje from './ui/Mensaje'
import Somos from './components/Somos'
import Formulario from './components/Formulario'

const App = () => {
  return (
    <div className='flex flex-col items-center'>

      <Header />

      <Inicio />

      <Mensaje />

      <Somos />

      <Formulario /> 
    </div>
  )
}

export default App