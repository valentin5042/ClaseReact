

const Servicios = () => {
  return (
    <div className="flex flex-col items-center p-5">
        <h2 className="text-2xl text-center">Nuestros servicios</h2>
        <h2 style={{ color: '#174a82' }} className="text-3xl text-center font-bold">Todo lo que tu marca necesita está aquí</h2>

        <div className="flex flex-col lg:flex-row lg:justify-around lg:px-36 mt-20">
          <div
            style={{
              backgroundImage: `url('/card.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="p-8 lg:w-3/12 mt-8 lg:mt-0 rounded-xl"
          >
            <img 
              src="/cardimg.png"
              alt="Image "
              className="h-auto w-full mb-4"
            />
            <h3 className="text-white font-bold">Diseño Web</h3>
            <p className="text-white mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam odio id amet reprehenderit totam laborum distinctio accusamus expedita, nam rem eum dolore in ducimus sequi mollitia non qui numquam vero?</p>

            <button className="text-white text-xl py-3 w-full border mt-8 bg-transparent rounded-lg border-white hover:bg-white hover:text-red-600 transition">
              Soluciones
            </button>
          </div>
        </div>

        <div className="lg:flex lg:justify-around lg:px-36 mt-20">
          <div
            style={{
              backgroundImage: `url('/card.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="p-8 lg:w-3/12 mt-8 lg:mt-0 rounded-xl"
          >
            <img 
              src="/cardimg.png"
              alt="Image "
              className="h-auto w-full mb-4"
            />
            <h3 className="text-white font-bold">Diseño Web</h3>
            <p className="text-white mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam odio id amet reprehenderit totam laborum distinctio accusamus expedita, nam rem eum dolore in ducimus sequi mollitia non qui numquam vero?</p>

            <button className="text-white text-xl py-3 w-full border mt-8 bg-transparent rounded-lg border-white hover:bg-white hover:text-red-600 transition">
              Soluciones
            </button>
          </div>
        </div>

        <div className="lg:flex lg:justify-around lg:px-36 mt-20">
          <div
            style={{
              backgroundImage: `url('/card.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="p-8 lg:w-3/12 mt-8 lg:mt-0 rounded-xl"
          >
            <img 
              src="/cardimg.png"
              alt="Image "
              className="h-auto w-full mb-4"
            />
            <h3 className="text-white font-bold">Diseño Web</h3>
            <p className="text-white mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam odio id amet reprehenderit totam laborum distinctio accusamus expedita, nam rem eum dolore in ducimus sequi mollitia non qui numquam vero?</p>

            <button className="text-white text-xl py-3 w-full border mt-8 bg-transparent rounded-lg border-white hover:bg-white hover:text-red-600 transition">
              Soluciones
            </button>
          </div>
        </div>

    </div>
  )
}

export default Servicios