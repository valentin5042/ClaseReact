

const Somos = () => {
  return (
    <div className="flex flex-col items-center p-10">
        <div className="lg:flex lg:justify-around items-center w-full lg:w-8/12">
            <div className="w-full lg:w-5/12">
                <h2 style={{ color: '#c42825' }} className="text-3xl font-bold">
                    Transformamos tu visión en una identidad que deja huella
                </h2>
                <p className="text-2xl mt-4">
                    En Zone, transformamos tus ideas en realidades visuales que conectan. Nos especializamos en crear marcas que son memorables, modernas y diseñadas para destacar. Ya seas un emprendedor apasionado o una empresa en crecimiento, te ayudamos a sobresalir con una identidad única que resuene con tu audiencia y te posicione por encima de la competencia.
                </p>
            </div>
            <img 
                src='/sadsad.png'
                alt='Imagen secundaria'
                className="h-auto w-full lg:w-6/12"
            />
        </div>

        <div className="flex flex-col-reverse lg:flex-row lg:justify-around items-center w-full lg:w-9/12">
            <img 
                src='/sadsad.png'
                alt='Imagen secundaria'
                className="h-auto w-full lg:w-5/12"
            />
            <div className='w-full lg:w-5/12'>
                <h2 style={{ color: '#c42825' }} className="text-3xl font-bold">
                    Elige como trabajar con Zone:
                </h2>
                <p className="text-2xl mt-4">
                    Descubre el poder de las ideas hechas realidad. ¡Explora mi portafolio y ve cómo tu marca puede destacar!
                </p>
                <p className="text-2xl mt-4">
                    Es hora de darle vida a tu visión. ¡Agenda una cita y comencemos a construir la identidad visual que hará que tu marca impacte!
                </p>
                <div className="flex flex-col lg:flex-row lg:justify-around w-full p-8 lg:p-0 mt-10">
                    <button className="text-red-700 text-xl py-3 w-full lg:w-5/12 border mb-8 lg:mb-0 bg-transparent rounded-lg border-red-700 hover:bg-red-800 hover:text-white transition">Ver portafolio</button>
                    
                    <button className="text-white text-xl py-3 bg-red-700 hover:bg-red-800 transition w-full lg:w-5/12 rounded-lg">Contáctame</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Somos