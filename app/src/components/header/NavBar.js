import ItemNavBar from "./ItemNavBar"
import {useState, useEffect} from "react"
import {NavLink} from "react-router-dom"
import { db } from '../../fireBase'
import { collection, getDocs} from 'firebase/firestore'

const NavBar = () =>{
    
    const [link, setLink] = useState([])
    
    useEffect(()=>{
        const linksCollection = collection(db, 'navBar')

        getDocs(linksCollection)
            .then(({docs})=>{
                setLink(docs.map((doc)=>({id : doc.id, ...doc.data()})))
            })
    }, [link])
    return(
        <header>
            <NavLink to="/">
            <h1>Casona Wine</h1>
            </NavLink>
            <ul>
                <ItemNavBar links={link}/>
            </ul>
        </header>
    )
}
export default NavBar