import ItemList from "./ItemList"
import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"

const listaProductos = [
    {id:1, nombre:"Dulce Dilema", href:"/item/Blanco", categoria:"Blanco", precio:3100, imagen:"./img/vinos/dulceDilema.jpg", stock:15},
    {id:2, nombre:"Malbec", href:"/item/Tinto", categoria:"Tinto", precio:800, imagen:"./img/vinos/malbec.jpg", stock:15},
    {id:3, nombre:"Tukma", href:"/item/Tinto", categoria:"Tinto", precio:1000, imagen:"./img/vinos/tukma.jpg", stock:16},
    {id:4, nombre:"Champagne Brut Ros", href:"/item/Espumoso", categoria:"Espumoso", precio:5000, imagen:"./img/vinos/champagne.jpg", stock:21},
    {id:5, nombre:"Salientein", href:"/item/Tinto", categoria:"Tinto", precio:2100, imagen:"./img/vinos/salientein.jpeg", stock:86},
    {id:6, nombre:"Marlo", href:"/item/Blanco", categoria:"Blanco", precio:2100, imagen:"./img/vinos/marlo.webp", stock:45},
    {id:7, nombre:"Don Valentin", href:"/item/Tinto", categoria:"Tinto", precio:4000, imagen:"./img/vinos/donValentin.webp", stock:28},
    {id:8, nombre:"San Humberto", href:"/item/Tinto", categoria:"Tinto", precio:1190, imagen:"./img/vinos/sanHumberto.webp", stock:75},
    {id:9, nombre:"El enemigo", href:"/item/Tinto", categoria:"Tinto", precio:3500, imagen:"./img/vinos/elEnemigo.webp", stock:64},
    {id:10, nombre:"Rutini", href:"/item/Tinto", categoria:"Tinto", precio:2100, imagen:"./img/vinos/rutini.webp", stock:18},
    {id:11, nombre:"Nicasia", href:"/item/Tinto", categoria:"Tinto", precio:600, imagen:"./img/vinos/nicasia.webp", stock:43},
    {id:12, nombre:"Animal", href:"/item/Tinto", categoria:"Tinto", precio:1700, imagen:"./img/vinos/animal.webp", stock:27}
]

const ItemListContainer = (props) =>{
    
    const [lista, setLista] = useState([])
    const {id} = useParams()

    useEffect(()=>{
            if(id){
                const filtro = listaProductos.filter(fil => fil.categoria === id)
                setLista(filtro)
                console.log(lista)
            }else{
                setLista(listaProductos)
            }
    }, [id])

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