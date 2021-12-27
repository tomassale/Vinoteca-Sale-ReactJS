import NavBar from "./components/header/NavBar";
import ItemListContainer from "./components/main/ItemListContainer";
import ItemDetailContainer from "./components/main/detail/ItemDetailContainer";

const App = () =>{
    return(
        <>
        <NavBar/>
        <ItemListContainer greeting="Tomás"/>
        <ItemDetailContainer/>
        </>
    )
}
export default App