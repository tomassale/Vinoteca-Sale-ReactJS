import ItemCount from "../ItemCount"

const ItemDetail = ({initial, producto}) => {
    
    const onAdd = (agregado)=>{
        alert(`Se agregaron ${agregado} al carrito`)
    }
    return (
        <div id='item'>
            <div className='flex'>
                <div className='flexL'>
                    <h2>{producto.nombre}</h2>
                    <img src={producto.imagen} alt='producto'/>
                </div>
                <div className='flexR'>
                    <p id='descripcion'>{producto.descripcion}</p>
                    <p id='precio'>{producto.precio}$</p>
                    <ItemCount stock={producto.stock} initial={initial} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail