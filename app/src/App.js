import NavBar from "./components/header/NavBar";
import ItemListContainer from "./components/main/ItemListContainer";

const App = () =>{
    return(
        <>
        <NavBar/>
        <ItemListContainer greeting="Tomás"/>
        </>
    )
}
export default App