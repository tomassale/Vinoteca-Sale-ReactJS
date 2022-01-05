import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer=()=> {  

    let [detail, setDetail] = useState({})
    let {id} = useParams()

    useEffect(()=>{
        fetch('/item/' + id)
            .then((res)=>{
                setDetail(res)
            })
    },[id])
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