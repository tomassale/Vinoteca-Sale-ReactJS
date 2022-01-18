import NavBar from "./components/header/NavBar"
import ItemListContainer from "./components/main/ItemListContainer"
import ItemDetailContainer from "./components/main/detail/ItemDetailContainer"
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Footer from "./components/footer/Footer"
import Cart from "./components/main/context/Cart"
import Contacto from "./components/main/Contacto"

const App = () =>{
    return(
            <BrowserRouter>
                <NavBar/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting="Tomás"/>}/>
                        <Route path="/Carrito" element={<Cart/>}/>
                        <Route path="/Contacto" element={<Contacto/>}/>
                        <Route path="/Categoria/:categoriaId" element={<ItemListContainer greeting="Tomás"/>}/>
                        <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
                    </Routes>
                <Footer/>
            </BrowserRouter>
    )
}
export default App