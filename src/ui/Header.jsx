import PropTypes from 'prop-types';
import { useState } from 'react'

const Header = ({ abrirModal }) => {

    const [ abierto, setAbierto ] = useState(false);

    const abrirMenu = () => {
        setAbierto( !abierto )
    }

  return (
    <header style={{ background: '#174a82' }} className="w-full md:w-10/12 fixed top-0 z-50 py-4 md:py-2 mt-0 md:mt-6 flex md:items-center justify-around rounded-none md:rounded-full">
        <div className={`W-2/12 ${abierto ? 'hidden' : 'block'} md:block`}>
            <img
                src="/Frame.png"
                alt="Logotipo"
                className="h-16 w-auto"
            />
        </div>

        <nav className={`md:px-0 ${abierto ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row space-x-0 md:space-x-4">
                <li>
                    <a className='text-2xl cursor-pointer font-semibold text-white hover:text-red-600 transition'>Inicio</a>
                </li>
                <li>
                    <a className='text-2xl cursor-pointer font-semibold text-white hover:text-red-600 transition'>Proyectos</a>
                </li>
                <li>
                    <a className='text-2xl cursor-pointer font-semibold text-white hover:text-red-600 transition'>Servicios</a>
                </li>
                <li>
                    <button
                        onClick={ abrirModal }
                        className='text-2xl cursor-pointer font-semibold text-white hover:text-red-600 transition uppercase lg:hidden'
                    >Contacto</button>
                </li>
            </ul>
        </nav>

        <button
            onClick={ abrirMenu }
            className='text-white md:hidden focus:outline-none'
        >
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={abierto ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>

        </button>

        <nav className="px-4 hidden md:block">
            <ul className="flex flex-row space-x-4">
                <li>
                    <button
                        onClick={ abrirModal }
                        className='text-2xl bg-red-700 py-1 px-6 rounded-3xl font-semibold text-white hover:bg-red-800 transition'
                    >Contacto</button>
                </li>
                <li>
                    <a className=''>
                        <img className="h-8 w-auto" src="/Facebook.png" alt="facebook"/>
                    </a>
                </li>
                <li>
                    <a className=''>
                        <img className="h-8 w-auto" src="/Behance.png" alt="behance"/>
                    </a>
                </li>
                <li>
                    <a className=''>
                        <img className="h-8 w-auto" src="/Instagram.png" alt="instagram"/>
                    </a>
                </li>
                <li>
                    <a className=''>
                        <img className="h-8 w-auto" src="/Tik-Tok.png" alt="tik tok"/>
                    </a>
                </li>
            </ul>
        </nav>

    </header>
  )
}

Header.propTypes = {
    abrirModal: PropTypes.func.isRequired,
}


export default Header