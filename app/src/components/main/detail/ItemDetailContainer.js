import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"

const ItemDetailContainer=()=> {  

    let [detail, setDetail] = useState([])

    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://mocki.io/v1/139eb92c-9caf-4641-8345-9210ef987d27')
                .then((res)=>res.json())
                .then((res)=>{setDetail(res)})
        }, 2000)
    }, [])
    
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