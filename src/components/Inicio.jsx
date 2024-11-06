

const Inicio = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/banner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
      }}
      className="px-8"
    >
        <div className='flex flex-col lg:flex-row mt-24 py-6 md:py-0 justify-around items-center lg:px-20 px-10'>
            <div className="lg:w-4/12 w-full">
                <h2 className="text-4xl font-bold text-white mb-8">Dando vida a ideas poderosas que conectan.</h2>
                <p className="text-2xl text-white">Innovación, Estrategia y Creatividad: Forjamos juntos la esencia que hará que tu marca destaque y perdure.</p>

                <div className="flex flex-col lg:flex-row lg:justify-around w-full mt-10">
                    <button className="text-white text-xl py-3 bg-red-700 hover:bg-red-800 transition w-full lg:w-5/12 rounded-lg">Ver portafolio</button>
                    <button className="text-white text-xl py-3 w-full lg:w-5/12 border mt-8 lg:mt-0 bg-transparent rounded-lg border-white hover:bg-white hover:text-red-600 transition">Contáctame</button>
                </div>
            </div>
            <img className="h-auto w-full lg:w-4/12" src='/sadsad.png' alt='Imagen principal' />
        </div>

    </div>
  )
}

export default Inicio