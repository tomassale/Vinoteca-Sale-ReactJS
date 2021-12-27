
const Item = ({producto}) =>{
    return(
        <div className="item">
            <div>
                <p className="nombre">{producto.nombre}</p>
                <div className="imagen">
                    <img src={producto.imagen} alt="vinos"/>
                </div>
                <button>Detalles del Producto</button>
            </div>
        </div>
    )
}
export default Item