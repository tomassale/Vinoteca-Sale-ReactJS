import ItemCount from "../ItemCount"
import { useState } from 'react'
import { NavLink } from "react-router-dom"

const ItemDetail = ({initial, productoDetail}) => {
    
    const [mostrar, setMostrar] = useState(true)
    const[array, setArray] = useState([])
    const onAdd = (agregado)=>{
        alert(`Se agregaron ${agregado} al carrito`)
        setArray([...array,agregado])
        setMostrar(false)
    }

    if(mostrar){
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
    else{
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
                    <NavLink to={'/Carrito'}>
                        <button id='finalizar'>Finalizar Compra</button>
                    </NavLink>
                </div>
            </div>
        </div>
        )
    }
}

export default ItemDetail