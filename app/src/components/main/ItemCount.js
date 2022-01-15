import {useState} from "react"
import { NavLink } from "react-router-dom"

const ItemCount = ({stock, onAdd}) =>{
    
    const initial = 1
    let [contador, setContador] = useState(1)
    let sumar = ()=>{setContador(contador + 1)}
    let restar = ()=>{setContador(contador - 1)}
    let agregar = ()=>{
        onAdd(contador)
        setContador(initial)
    }
    
    if(contador === initial){
        restar = null
    }
    if(contador === stock){
        sumar = null
    }
    
    return(
        <div className="botones">
            <div className="contador">
                <button onClick={restar}>-</button>
                <p>{contador}</p>
                <button onClick={sumar}>+</button>
            </div>
            <div className="agregarAlCarrito">
                <NavLink to={'/Carrito'}>
                    <button onClick={agregar}>Agregar al Carrito</button>
                </NavLink>
            </div>
        </div>
    )
}
export default ItemCount