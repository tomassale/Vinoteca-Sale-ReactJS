import { useContexto } from "../../../context"
import { NavLink } from 'react-router-dom'
import { ListGroup, Badge} from 'react-bootstrap'


const Carrito = () => {
    
    const {carrito, borrarCarrito, limpiarCarrito, valorTotal} = useContexto()
    const finalizarCompra = () =>{
        limpiarCarrito()
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
                                                <div className="fw-bold">{productoDetail.title}</div>
                                                <div className="fw">$ {productoDetail.price*productoDetail.cantidad}</div>
                                            </div>
                                            <Badge variant="primary" pill>{productoDetail.cantidad}</Badge>
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <button onClick={()=>{borrarCarrito(productoDetail.id, productoDetail.cantidad, productoDetail.price)}}>X</button>                                    
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
