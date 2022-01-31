import ItemList from "./ItemList"
import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { db } from '../../fireBase'
import { collection, getDocs, query, where } from 'firebase/firestore' 

const ItemListContainer = (props) =>{
    
    const [lista, setLista] = useState([])
    const {categoriaId} = useParams()

    useEffect(()=>{
        const productosCollection = collection(db, 'listaProductos')
            if(categoriaId){
                const consulta = query(productosCollection,where('categoria','==',categoriaId))
                getDocs(consulta)
                .then(({docs})=>{
                    setLista(docs.map((doc)=>({ id : doc.id, ...doc.data()})))
                })
            }else{
                getDocs(productosCollection)
                .then(({docs})=>{
                    setLista(docs.map((doc)=>({ id : doc.id, ...doc.data()})))
                })
            }
    }, [categoriaId])
    
    return(
        <div id="index">
            <h1 id="greeting">Hola {props.greeting}!!</h1>
            {lista.length === 0? (
                <h2>Cargando...</h2>
            ): (
                <div className="grid">
                    <ItemList prop={lista}/>
                </div>
            )}
        </div>
    )
}
export default ItemListContainer