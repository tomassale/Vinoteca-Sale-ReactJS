import {useState} from "react"

const ItemCount = ({stock, onAdd}) =>{
    
    
    const initial = 1
    let [contador, setContador] = useState(1)
    let sumar = ()=>{setContador(contador + 1)}
    let restar = ()=>{setContador(contador - 1)}

    
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
                <button onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </div>
    )
}
export default ItemCount