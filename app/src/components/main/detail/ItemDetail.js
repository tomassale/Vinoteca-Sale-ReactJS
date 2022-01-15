import ItemCount from "../ItemCount"
import { useState } from "react"

const ItemDetail = ({initial, productoDetail}) => {
    
    const [producto, setProducto] = useState([])
    const valor = useState("")
    const onAdd = (agregado, e)=>{
        alert(`Se agregaron ${agregado} ${productoDetail.stock} al carrito`)
        setProducto([...producto, valor])
        console.log(producto)
    }

    return(
        <div id='item'>
            <div className='flex'>
                <div className='flexL'>
                    <h2>{productoDetail.nombre}</h2>
                    <img src={productoDetail.imagen} alt='producto'/>
                </div>
                <div className='flexR'>
                    <p id='descripcion'>{productoDetail.descripcion}</p>
                    <p id='precio'>{productoDetail.precio}$</p>
                    <ItemCount stock={productoDetail.stock} initial={initial} onAdd={onAdd}/>
                </div>
            </div>
        </div>
        )
}

export default ItemDetail