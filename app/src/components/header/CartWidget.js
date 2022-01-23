import { NavLink } from "react-router-dom"
import { useContexto } from "../../context"
const CartWidget = () => {
    
    const {cantidadTotal} = useContexto()
    return(
        <>
            {cantidadTotal === 0?(
                null
            ):(
                <li>
                    <NavLink to={"/Carrito"}>
                        Carrito<span className="material-icons">shopping_cart</span>{cantidadTotal}
                    </NavLink>
                </li>
            )}
        </>
    )
}

export default CartWidget
