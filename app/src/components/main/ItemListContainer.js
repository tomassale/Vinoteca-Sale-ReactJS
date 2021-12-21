import ItemCount from "./ItemCount"

let onAdd = (agregado)=>{
    console.log(`Se agregaron ${agregado} al carrito`)
};

const ItemListContainer = (props) =>{
    return(
        <>
        <h1 id="greeting">Hola {props.greeting}!!</h1>
        <ItemCount stock={10} initial={0} onAdd={onAdd}/>
        </>
    )
}
export default ItemListContainer