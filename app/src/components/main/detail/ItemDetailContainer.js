import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer=({listaProductos})=> {  

    let [detail, setDetail] = useState({})
    let {id} = useParams()

    useEffect(()=>{
        if(id){
            const filtro = listaProductos.find(fil=>fil.id === id)
            setDetail(filtro)
        }
    }, [id])
    return(
        <>       
        {detail.length === 0?(
            <h2>Cargando detalles...</h2>
        ): (
            <ItemDetail producto={detail} />
        )}
        </>
    )
}

export default ItemDetailContainer