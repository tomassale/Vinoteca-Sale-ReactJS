import ItemCount from "./ItemCount"

const Item = ({precio, imagen, nombre, stock, initial}) =>{
    return(
        <div className="item">
            <div>
                <p className="nombre">{nombre}</p>
                <div className="imagen">
                    <img src={imagen} alt="vinos"/>
                </div>
                <button>Detalles del Producto</button>
                <p className="precio">{precio}$</p>
            </div>
            <ItemCount stock={stock} initial={initial}/>
        </div>
    )
}
export default Item