import ItemCount from "../ItemCount"
import { useState } from 'react'
import { NavLink } from "react-router-dom"
import { useContexto } from "../../../context"

const ItemDetail = ({initial, productoDetail}) => {
    
    const {agregarCarrito} = useContexto()
    const [mostrar, setMostrar] = useState(true)
    const[array, setArray] = useState([])
    const onAdd = (cantidad)=>{
        setArray([...array,cantidad])
        agregarCarrito(cantidad, productoDetail)
        setMostrar(false)
    }
    return(
            <div id='item'>
                <div className='flex'>
                    <div className='flexL'>
                        <h2>{productoDetail.title}</h2>
                        <img src={productoDetail.image} alt='producto'/>
                    </div>
                    <div className='flexR'>
                        <p id='descripcion'>{productoDetail.description}</p>
                        <p id='precio'>{productoDetail.price}$</p>
                        {mostrar?(<ItemCount stock={productoDetail.stock} initial={initial} onAdd={onAdd}/>
                        ):(
                        <NavLink to={'/Carrito'}>
                            <button className='finalizar'>Finalizar Compra</button>
                        </NavLink>
                        )}
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail