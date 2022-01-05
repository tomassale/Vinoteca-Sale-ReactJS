import ItemNavBar from "./ItemNavBar"
import {useState, useEffect} from "react"
import {NavLink} from "react-router-dom"

const links = [
    {id: 1, nombre: "Vinos Tintos", href: "/Categoria/Tintos"},
    {id: 2, nombre: "Vinos Blancos", href: "/Categoria/Blancos"},
    {id: 3, nombre: "Vinos espumosos", href: "/Categoria/Espumosos"},
    {id: 4, nombre: "Carrito", href: "/Carrito", icono: "shopping_cart"},
    {id: 5, nombre: "Contacto", href: "/Contacto", icono:"call"},
]

const NavBar = () =>{
    
    const [link, setLink] = useState([])
    
    useEffect(()=>{
        setTimeout(()=>
            setLink(link), 2000)
    }, [link])
    return(
        <header>
            <NavLink to="/">
            <h1>Casona Wine</h1>
            </NavLink>
            <ul>
                <ItemNavBar links={links}/>
            </ul>
        </header>
    )
}
export default NavBar