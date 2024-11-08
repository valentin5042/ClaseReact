import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';


const Formulario = () => {

    const validacion = Yup.object().shape({
        nombre: Yup.string().required('el nombre es obligatorio'),
        email: Yup.string().email('Ingresa un email válido').required('El email es obligatorio'),
        telefono: Yup.string().matches(/^\d+$/, 'El teléfono debe contener solo números').required('El teléfono es obligatorio'),
        mensaje: Yup.string().min(10, 'El mensaje debe tener al menos 10 caracteres').required('El mensaje es obligatorio')
    })

    const enviarMensaje = () => {
        console.log('formulario enviado');
    }

  return (
    <div className="px-3">

        <Formik
            initialValues={ { nombre: '', email: '', telefono: '', mensaje: '' } }
            validationSchema={ validacion }
            onSubmit={ ( Values, { resetForm } ) => {
                console.log('Formulario enviado', Values)
                resetForm();
            } }
        >

        <Form 
            className="p-10 w-full rounded-2xl mb-10"
        >
            <h2 className="text-3xl text-white mb-8" >Contáctanos para cotizar tu proyecto</h2>
            <div className="flex flex-col mt-4">
                <label className="text-white text-xl mb-1">Nombre o Empresa:</label>
                <Field name="nombre" type="text" placeholder="Ingresa tu nombre" className="bg-gray-100 rounded-md w-full h-10 px-2" />
                <ErrorMessage name="nombre" component="p" className="text-red-400" />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-white text-xl mb-1">Teléfono:</label>
                <Field name="telefono" type="text" placeholder="Ingresa tu teléfono" className="bg-gray-100 rounded-md w-full h-10 px-2" />
                <ErrorMessage name="telefono" component="p" className="text-red-400" />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-white text-xl mb-1">Email</label>
                <Field name="email" type="text" placeholder="Ingresa tu email" className="bg-gray-100 rounded-md w-full h-10 px-2" />
                <ErrorMessage name="email" component="p" className="text-red-400" />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-white text-xl mb-1">¿Cómo podemos ayudarte?</label>
                <Field as="textarea" name="mensaje" className="bg-gray-100 rounded-md w-full h-32 px-2"></Field>
                <ErrorMessage name="mensaje" component="p" className="text-red-400" />
            </div>

            <div className="mt-14 text-center">
                <button 
                    type="submit" 
                    className="bg-white hover:bg-gray-200 font-bold text-red-700 text-xl py-3 w-full lg:w-8/12 border rounded-lg transition"
                    onClick={ enviarMensaje }
                 >
                    Enviar
                </button>
            </div>

        </Form>
        
        </Formik>
    </div>
  )
}

export default Formulario