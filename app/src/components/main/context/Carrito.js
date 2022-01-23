import { useContexto } from "../../../context"
import { NavLink } from 'react-router-dom'
import { addDoc, collection, serverTimestamp} from "firebase/firestore"
import { db } from '../../../fireBase'

const Carrito = () => {
    
    const {carrito, borrarCarrito, limpiarCarrito, valorTotal} = useContexto()
    const finalizarCompra = () =>{
        const ventasCollection = collection(db,"ventas")
        addDoc(ventasCollection,{
            comprador: {
                nombre: "Tomás",
                apellido: "Sale",
                telefono: "+54 9 11 5488-9684",
                email: "algo@gmail.com",
                total: valorTotal,
            },
            items: carrito,
            fecha: serverTimestamp(),
        })
        .then(()=>{
            limpiarCarrito()
        })
    }
    
    return (
        <div id='carrito'>
            <h1>Carrito de compras</h1>
            <p>Valor total: {valorTotal}</p>
            <>
                {carrito.length === 0 ? (
                    <div className='carritoVacio'>
                        <h2>No hay productos en el carrito</h2>
                        <NavLink to="/">
                            <button>Seguir comprando</button>
                        </NavLink>              
                    </div>
                ) : (
                    <div className='carritoProductos'>
                        <ol> 
                            {carrito.map ((productoDetail, keyProp, agregado) => { 
                                return(
                                    <ul key={keyProp}>
                                        <li>
                                            <div>
                                                <p>{productoDetail.title}</p>
                                                <p>Valor Subtotal:{productoDetail.precio*agregado}</p>
                                            </div>
                                            <p>{agregado}</p>
                                        </li>
                                    <button onClick={()=>{borrarCarrito(productoDetail.id.agregado)}}>X</button>                                    
                                    </ul>
                                )
                            })}
                        </ol>
                        <button id='limpiar' onClick={limpiarCarrito}>Limpiar Carrito</button>
                        <button id='finalizar' onClick={finalizarCompra}>Finalizar Compra</button>
                    </div>
                )}
            </>
        </div>
    )
}

export default Carrito