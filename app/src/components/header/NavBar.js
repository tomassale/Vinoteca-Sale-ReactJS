import ItemNavBar from "./ItemNavBar"
import {useState, useEffect} from "react"
import {NavLink} from "react-router-dom"
import CartWidget from "./CartWidget"

const links = [

    {id:2, href: "/categoria/electronics", nombre:"Tecnologia"},
    {id:3, href: "/categoria/jewelery", nombre:"Joyeria"},
    {id:4, href: "/categoria/men's clothing", nombre: "Ropa de hombre"},
    {id:5, href: "/categoria/women's clothing", nombre: "Ropa de mujer"}
]

const NavBar = () =>{
    
    const [link, setLink] = useState([])
    useEffect(()=>{
        setLink(link)
    }, [link])

    return(
        <header>
            <nav>
                <NavLink to="/">
                    <h1 id='casonaWine'>Casona Wine</h1>
                </NavLink>               
                <ul>
                    <ItemNavBar link={links}/>
                    <CartWidget/>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar