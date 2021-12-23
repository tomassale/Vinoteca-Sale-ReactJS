import Item from "./Item"

const ItemList  = ({prop}) =>{
    return(
        <>
        {prop.map((mapeo)=>(
            <Item 
            id={mapeo.id} 
            nombre={mapeo.nombre} 
            precio={mapeo.precio} 
            imagen={mapeo.imagen} 
            stock={mapeo.stock}/>
        ))}
        </>
    )
}
export default ItemList