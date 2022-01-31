import { useContexto } from "../../../context"
import { NavLink } from 'react-router-dom'
import { ListGroup, Badge} from 'react-bootstrap'
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
                    <div className='carritoProductos'>
                        {carrito.map ((productoDetail) => { 
                            return(
                                <div key={productoDetail.id}>
                                    <ListGroup as="ul">
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">{productoDetail.nombre}</div>
                                                <div className="fw">$ {productoDetail.precio*productoDetail.cantidad}</div>
                                            </div>
                                            <Badge variant="primary" pill>{productoDetail.cantidad}</Badge>
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <button onClick={()=>{borrarCarrito(productoDetail.id, productoDetail.cantidad, productoDetail.precio)}}>X</button>                                    
                                </div>
                            )
                        })}
                        <button id='limpiar' onClick={limpiarCarrito}>Limpiar Carrito</button>
                        <button id='finalizar' onClick={finalizarCompra}>Finalizar Compra</button>
                    </div>
                )}
            </>
        </div>
    )
}

export default Carrito
