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
        if(isInCart){
            const copiaProducto = {...productoDetail} 
            copiaProducto.agregado= agregado
            setCarrito ([...carrito, copiaProducto]) 
            setCantidadTotal (cantidadTotal + agregado) 
            const precioCantidad= copiaProducto.precio*agregado
            setValorTotal (valorTotal + precioCantidad)
        }
    }
    const borrarCarrito = (id, agregado) =>{
        const filtroCarrito = carrito.filter(item => item.id !== id)        
        if (valorTotal > 0) {
            setCarrito (filtroCarrito)       
            setValorTotal (valorTotal - agregado)
            filtroCarrito.map ((e) =>{
                const valorFinal = e.precio*agregado
                return(
                    setValorTotal(valorFinal)
                )
            })
        } else {
            setValorTotal (0)
        }
    }
    const limpiarCarrito = () =>{
        setCarrito([])
        setCantidadTotal(0)
        setValorTotal(0)
    }
    const isInCart = (id) =>{
        return carrito.some(item => item.id = id)
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