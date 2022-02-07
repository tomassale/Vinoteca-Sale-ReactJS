import { db } from '../../fireBase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { NavLink } from 'react-router-dom';

const Formulario = () => {
    const registrarse = () =>{        
        const clienteCollection = collection (db, "cliente")
        addDoc (clienteCollection, {
            comprador: {
                nombre: document.querySelector('#nombre').value,
                apellido: document.querySelector('#apellido').value,
                email: document.querySelector('#email').value,
                contraseña: document.querySelector('#contraseña').value,
            },
            fecha: serverTimestamp (),
        })
    }
    return(
        <div className="formulario">
            <h1>Registrarse</h1>
            <form action="" method="POST" enctype="application/x-www-form-urlencoded">
                <div>
                    <div>
                        <label for="nombre">Nombre: </label>
                        <input type="text" required  className="textoRegistro" id="nombre"/>
                    </div>
                    <div>
                        <label for="apellido">Apellido: </label>
                        <input type="text" required  className="textoRegistro" id="apellido"/>
                    </div>
                    <div>
                        <label for="email">Correo electronico: </label>
                        <input type="email" required className="textoRegistro" id="email"/>
                    </div>
                    <div>
                        <label for="contraseña">Contraseña: </label>
                        <input type="password" required className="textoRegistro" id="contraseña"/>
                    </div>
                </div>
                    <NavLink to='/'>
                        <button type="submit" className="button" onClick={registrarse}>Registrarme</button>
                    </NavLink>
            </form>
        </div>
    )
}

export default Formulario;