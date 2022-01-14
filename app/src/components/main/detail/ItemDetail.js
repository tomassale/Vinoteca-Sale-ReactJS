import ItemCount from "../ItemCount"

const ItemDetail = ({initial, productoDetail}) => {
    
    const onAdd = (agregado)=>{
        alert(`Se agregaron ${agregado} al carrito`)
    }
    return(
        <div id='item'>
            <div className='flex'>
                <div className='flexL'>
                    <h2>{productoDetail.nombre}</h2>
                    <img src={productoDetail.imagen} alt='producto'/>
                </div>
                <div className='flexR'>
                    <p id='descripcion'>{productoDetail.descripcion}</p>
                    <p id='precio'>{productoDetail.precio}$</p>
                    <ItemCount stock={productoDetail.stock} initial={initial} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail