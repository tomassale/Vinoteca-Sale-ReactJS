import ItemList from "./ItemList"
import { useEffect, useState} from "react"

const listaProductos = [
    {id:1, nombre:"Dulce Dilema", precio:3100, imagen:"./img/vinos/dulceDilema.jpg", stock:15},
    {id:2, nombre:"Malbec", precio:800, imagen:"./img/vinos/malbec.jpg", stock:25},
    {id:3, nombre:"Tukma", precio:1000, imagen:"./img/vinos/tukma.jpg", stock:16},
    {id:4, nombre:"Champagne Brut Ros", precio:5000, imagen:"./img/vinos/champagne.jpg", stock:21},
    {id:5, nombre:"Salientein", precio:2100, imagen:"./img/vinos/salientein.jpeg", stock:86},
    {id:6, nombre:"Marlo", precio:2100, imagen:"./img/vinos/marlo.webp", stock:45},
    {id:7, nombre:"Don Valentin", precio:4000, imagen:"./img/vinos/donValentin.webp", stock:28},
    {id:8, nombre:"San Humberto", precio:1190, imagen:"./img/vinos/sanHumberto.webp", stock:75},
    {id:9, nombre:"El enemigo", precio:3500, imagen:"./img/vinos/elEnemigo.webp", stock:64},
    {id:10, nombre:"Rutini", precio:2100, imagen:"./img/vinos/rutini.webp", stock:18},
    {id:11, nombre:"Nicasia", precio:600, imagen:"./img/vinos/nicasia.webp", stock:43},
    {id:12, nombre:"Animal", precio:1700, imagen:"./img/vinos/animal.webp", stock:27}
]

const ItemListContainer = (props) =>{
    
    const [lista, setLista] = useState([])
    
    useEffect(()=>{
        setTimeout(()=>
            setLista(listaProductos), 2000)
        }, [])
        
    return(
        <>
        <h1 id="greeting">Hola {props.greeting}!!</h1>
        {lista.length === 0? (
            <h2>Cargando...</h2>
        ): (
            <div className="grid">
                <ItemList prop={lista}/>
            </div>
        )}
        </>
    )
}
export default ItemListContainer