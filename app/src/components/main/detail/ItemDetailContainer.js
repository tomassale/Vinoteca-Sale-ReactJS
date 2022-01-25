import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer=()=> {  

    const [detail, setDetail] = useState({});
    const {id} = useParams()

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res)=>res.json())
            .then((res)=>{
                setDetail(res)
            })
    }, [id])
    
    return(
        <>       
        {detail.length === 0?(
            <h2>Cargando detalles...</h2>
        ): (
            <ItemDetail productoDetail={detail} />
        )}
        </>
    )
}

export default ItemDetailContainer