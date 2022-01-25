import ItemList from "./ItemList"
import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"


const ItemListContainer = (props) =>{
    
    const [lista, setLista] = useState([])
    const {categoriaId} = useParams()

    useEffect(()=>{
        let promesa
        if(categoriaId){
            promesa = fetch(`https://fakestoreapi.com/products/category/${categoriaId}`)
        }else{
            promesa = fetch(`https://fakestoreapi.com/products`)
        }
        promesa
        .then((res)=>res.json())
        .then((res)=>{
            setLista(res)
        })
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