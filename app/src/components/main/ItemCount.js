import {useState} from "react"

const ItemCount = ({stock, onAdd, initial}) =>{
    
    let [contador, setContador] = useState(0)
    let sumar = ()=>{setContador(contador + 1)}
    let restar = ()=>{setContador(contador - 1)}
    let agregar= ()=>{onAdd(contador)}
    
    if(contador === initial){
        restar = null
    }
    if(contador === stock){
        sumar = null
    }
    
    return(
        <div className="botones">
            <div className="contador">
                <button onClick={sumar}>+</button>
                <p>{contador}</p>
                <button onClick={restar}>-</button>
            </div>
            <div className="agregarAlCarrito">
                <button onClick={agregar}>Agregar al Carrito</button>
            </div>
        </div>
    )
}
export default ItemCount