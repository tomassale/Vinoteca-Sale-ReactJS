import Carrito from "./CartWidget"
const NavBar = () =>{
    return(
        <header>
            <h1>Casona Wine</h1>
            <ul>
                <li>
                    <a href="contacto.html">Contacto<span className="material-icons">call</span></a>
                </li>
                <Carrito/>
                <li>
                    <a href="productos.html">Productos<span className="material-icons">liquor</span></a>
                </li>
            </ul>
        </header>
    )
}
export default NavBar