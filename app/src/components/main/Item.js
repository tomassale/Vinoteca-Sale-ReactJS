import { NavLink } from "react-router-dom"

const Item = ({producto}) =>{
    return(
        <div className="item">
            <div>
                <p className="nombre">{producto.title}</p>
                <div className="imagen">
                    <img src={producto.image} alt="vinos"/>
                </div>
                <NavLink to={`/producto/${producto.id}`}>
                    <button>Detalles del Producto</button>
                </NavLink>
            </div>
        </div>
    )
}
export default Item
