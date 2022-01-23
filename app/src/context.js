import { createContext, useContext, useState } from "react";

const contexto = createContext()
export const { Provider } = contexto
export const useContexto = () =>{
    return useContext(contexto)
}

const CustomProvider = ({children}) =>{
    
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [carrito, setCarrito] = useState([])
    const [valorTotal, setValorTotal] = useState(0)
    
    const agregarCarrito = (agregado, productoDetail) =>{
        const id = productoDetail.id
        const copiaCarrito = [...carrito]
        if(isInCart(id)){
            let match = copiaCarrito.find((p)=>p.id === productoDetail.id)
            match.agregado = match.agregado + agregado
            setCarrito(copiaCarrito)
        }else{
            const copiaProducto = {...productoDetail}
            copiaProducto.agregado = agregado
            setCarrito ([...carrito, copiaProducto])
        }
        productoDetail.map((e)=>{
            const valorCantidad = e.precio*agregado
            return(
                setValorTotal(valorTotal + valorCantidad)
            )
        })
        setCantidadTotal (cantidadTotal + agregado)
    }
    const borrarCarrito = (id, cantidad) =>{
        let carritoFiltrado = carrito.filter((e)=>e.id !== id)
        setCarrito(carritoFiltrado)
        setCantidadTotal(cantidadTotal - cantidad)
        let valorFiltrado = 0
        carritoFiltrado.map ((e)=> {
            const valorNuevo = e.precio*cantidad
            valorFiltrado += valorNuevo
            return(
                setValorTotal(valorFiltrado)  
            )
        })
    }
    const limpiarCarrito = () =>{
        setCarrito([])
        setCantidadTotal(0)
        setValorTotal(0)
    }
    const isInCart = (id) =>{
        return carrito.some(p => p.id === id)
    } 
    const valorContexto = {
        carrito,
        cantidadTotal,
        valorTotal,
        agregarCarrito,
        borrarCarrito,
        limpiarCarrito,
        isInCart,
    }
    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}
export default CustomProvider