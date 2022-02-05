import { useContexto } from "../../../context"
import { NavLink } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
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
        <div className='carrito'>
            <h1>Carrito de compras</h1>
            <p>Valor total: $ {valorTotal}</p>
            <>
                {carrito.length === 0 ? (
                    <div className='carritoVacio'>
                        <h2>No hay productos en el carrito</h2>
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
                                                    <Badge variant="primary" pill>{productoDetail.cantidad}</Badge>
                                                </div>
                                                <div className="nombre">
                                                    <h4>{productoDetail.nombre}</h4>
                                                </div>
                                                <div className="valorUnitario">
                                                    <p>Valor unitario: $ {productoDetail.precio*productoDetail.cantidad}</p>
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
