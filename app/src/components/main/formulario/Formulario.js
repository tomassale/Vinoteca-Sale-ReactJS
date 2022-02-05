import { db } from '../../../fireBase'
import { addDoc, collection, serverTimestamp} from "firebase/firestore"
import { NavLink } from 'react-router-dom'


const Formulario = () =>{
    const registrar = () =>{
        const clientesCollection = collection(db,"clientes")
        addDoc(clientesCollection,{
            cliente: {
                nombre: "Tomás",
                apellido: "Sale",
                telefono: "+54 9 11 5488-9684",
                email: "algo@gmail.com",
            },
            fecha: serverTimestamp(),
        })
    }
    return(
        <>
            <div class='formulario'>
                <h1>Registrarse</h1>
                <form action='' method='POST' enctype='application/x-www-form-urlencoded'>
                    <div>
                        <div>
                            <label for='nombre'>Nombre: </label>
                            <input type='text' required  class='texto' id='nombre'/>
                        </div>
                        <div>
                            <label for='apellido'>Apellido: </label>
                            <input type='text' required  class='texto' id='apellido'/>
                        </div>
                        <div>
                            <label for='email'>Correo electronico: </label>
                            <input type='email' class='texto' id='email' required/>
                        </div>
                        <div>
                            <label for='contraseña'>Contraseña: </label>
                            <input type='password' required class='texto' id='contraseña'/>
                        </div>
                    </div>
                    <div>
                        <label for='sexo'><legend>Genero:</legend></label>
                        Hombre <input type='radio' name='sexo' value='hombre'/>
                        Mujer <input type='radio' name='sexo' value='mujer'/>
                        Otro <input type='radio' name='sexo' value='otro'/>
                    </div>
                    <select name='preferencias' class='menu'>
                        <option value='Seleccione preferencia'>Seleccione su preferencia</option>
                        <option value='vino tinto'>Vino Tinto</option>
                        <option value='vino blanco'>Vino Blanco</option>
                        <option value='espumante'>Espumante</option>
                        <option value='vino especial'>Vino Especial</option>
                    </select>
                    <p>Recibir mails con promociones <input type='checkbox'/></p>
                    <p> Estoy de acuerdo con los terminos y condiciones<input type='checkbox'/></p>
                    <NavLink to='/'>
                        <button type='submit' onClick={registrar} class='button'>Registrarme</button>
                    </NavLink>
                </form>
            </div>
        </>
    )
}
export default Formulario