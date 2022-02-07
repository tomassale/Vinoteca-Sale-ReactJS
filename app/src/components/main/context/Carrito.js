import { useState } from 'react'
import { useContexto } from "../../../context"
import { NavLink } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import { addDoc, collection, serverTimestamp} from "firebase/firestore"
import { db } from '../../../fireBase'

const Carrito = () => {
    const [comprado, setComprado] = useState(false)
    const {carrito, borrarCarrito, limpiarCarrito, valorTotal} = useContexto()
    const finalizarCompra = () =>{
        const ventasCollection = collection(db,"ventas")
        addDoc(ventasCollection,{
            comprador: {
                nombre: localStorage.getItem("nombre"),
                apellido: localStorage.getItem("apellido"),
                email: localStorage.getItem("email")
            },
            items: carrito,
            fecha: serverTimestamp (),
            total: valorTotal
        })
        .then(()=>{
            limpiarCarrito()
            setComprado(true)
        })
    }
    return (
        <div className='carrito'>
            <h1>Carrito de compras</h1>
            <p>Valor total: $ {valorTotal}</p>
            <>
                {carrito.length === 0 ? (
                    <div className='carritoVacio'>
                        {comprado?(
                            <h3>Gracias por su compra!!!</h3>
                        ):(
                            <h2>No hay productos en el carrito</h2>
                        )}
                        <NavLink to="/">
                            <button>Seguir comprando</button>
                        </NavLink>              
                    </div>
                ) : (
                    <>
                        <div className='carritoProductos'>
                            {carrito.map ((productoDetail) => { 
                                return(
                                    <ul>
                                        <li key={productoDetail.id} className='productoCarrito'>
                                            <div className='imagenC'>
                                                <img alt='producto' src={productoDetail.imagen}/>
                                            </div>
                                            <div className="cantidadAgregada"> 
                                                <Badge variant="primary" bg='light' text='black' pill>{productoDetail.cantidad}</Badge>
                                            </div>
                                            <div className="nombre">
                                                <h4>{productoDetail.nombre}</h4>
                                            </div>
                                            <div className="valorUnitario">
                                                <p>Valor unitario: $ {productoDetail.precio}</p>
                                            </div>
                                            <div className="equis">
                                                <button  onClick={()=>{borrarCarrito(productoDetail.id, productoDetail.cantidad, productoDetail.precio)}}>X</button>                                    
                                            </div>
                                        </li>
                                    </ul>
                                )
                            })}
                        </div>
                        <div id='limpiar'>
                            <button onClick={limpiarCarrito}>Limpiar Carrito</button>
                        </div>
                        <div id='finalizar'>
                            <button onClick={finalizarCompra}>Finalizar Compra</button>
                        </div>
                    </>
                )}
            </>
        </div>
    )
}

export default Carrito