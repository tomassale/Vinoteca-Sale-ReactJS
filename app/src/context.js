import { createContext, useContext, useState } from "react";
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider } from "./fireBase"

const contexto = createContext()
export const { Provider } = contexto
export const useContexto = () =>{
    return useContext(contexto)
}

const CustomProvider = ({children}) =>{
    
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [carrito, setCarrito] = useState([])
    const [valorTotal, setValorTotal] = useState(0)
    const [isSignIn, setIsSignIn] = useState (true)

    const signInGoogle = () => {
        signInWithPopup (auth, provider)
        .then ((res) => {
            const nombre = res.user.displayName
            const email = res.user.email
            localStorage.setItem ("nombre", nombre)
            localStorage.setItem ("email", email)
            setIsSignIn (false)    
        }) 
    }
    const signOutGoogle = ()=>{
        signOut (auth) 
        .then (() =>{
            localStorage.removeItem ("nombre")
            localStorage.removeItem ("email")
            document.location.reload()
            setIsSignIn (true)
        })
    }
    const agregarCarrito = (cantidad, productoDetail) =>{
        const id = productoDetail.id
        if(isInCart(id)){
            const copiaCarrito = [...carrito]
            let match = copiaCarrito.find((p)=>p.id === id)
            match.cantidad = match.cantidad + cantidad
            setCarrito([...copiaCarrito])
        }else{
            const copiaProducto = {...productoDetail, cantidad}
            setCarrito ([...carrito, copiaProducto])
        }
        const copiaProductoValor = {...productoDetail, cantidad}
        const valorCantidad = copiaProductoValor.precio*cantidad
        setValorTotal(valorTotal + valorCantidad)
        setCantidadTotal (cantidadTotal + cantidad)
    }
    const borrarCarrito = (id, cantidad, precio) =>{ 
        const filtro = carrito.filter(e=>(e.id) !== id)
        setCarrito(filtro)
        setCantidadTotal(cantidadTotal - cantidad)
        setValorTotal (valorTotal - precio*cantidad)
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
        isSignIn,
        signInGoogle,
        signOutGoogle,
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