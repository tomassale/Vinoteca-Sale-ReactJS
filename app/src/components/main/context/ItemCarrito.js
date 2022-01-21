import { useContexto } from "../../../context"
import { NavLink } from 'react-router-dom'
import { addDoc, collection, serverTimestamp} from "firebase/firestore"
import { db } from '../../../fireBase'
import {Badge, ListGroup} from 'react-bootstrap'

const ItemCarrito = () => {
    
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
            <div id="carrito">
                {carrito.length === 0 ? (
                    <div className='carritoVacio'>
                        <h2>No hay productos en el carrito</h2>
                    <NavLink to="/">
                        <button>Seguir comprando</button>
                    </NavLink>              
                    </div>
                ) : (
                    <div className='carritoProductos'>
                        {carrito.map ((producto) => { 
                        let {agregado,...objeto} = producto
                        const valores = Object.values (objeto)
                        return(
                            <>
                            {valores.map((productoCarrito)=>{
                                return(
                                    <> 
                                        <ListGroup as="ol" numbered key={productoCarrito.id}>
                                            <ListGroup.Item as="li"className="d-flex justify-content-between align-items-start" >
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">{productoCarrito.nombre}</div>
                                                Valor Subtotal:{productoCarrito.precio*agregado}
                                                </div>
                                                <Badge variant="primary" pill>{agregado}</Badge>
                                            </ListGroup.Item>
                                            <button onClick={borrarCarrito}>X</button>
                                        </ListGroup>
                                    </>
                                )
                            })}
                            </>
                        )})}
                        <button onClick={limpiarCarrito}>Limpiar Carrito</button>
                        <button onClick={finalizarCompra}>Finalizar Compra</button>
                    </div>
                )}
            </div>
    )
}

export default ItemCarrito