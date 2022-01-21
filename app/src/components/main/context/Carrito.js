import ItemCarrito from './ItemCarrito'
import { useContexto } from "../../../context"


const Carrito = () => {
    
    const {carrito, valorTotal} = useContexto()
    
    return (
        <div id='carrito'>
            <h1>Carrito de compras</h1>
            <p>Valor total: {valorTotal}</p>
            <ItemCarrito productoCarrito={carrito}/>
        </div>
    )
}

export default Carrito