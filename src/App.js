import Footer from "./componentes/Footer/Footer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Navbar from "./componentes/Navbar/Navbar"
import ProductCard from "./componentes/ProductCard/ProductCard";
import ItemCount from "./componentes/ItemCount/ItemCount"

function App() {
  return (
    <div >
      <Navbar>
        <ItemListContainer saludo='Maria'/>
        <ItemCount/>
      </Navbar>
      {/* <ProductCard/> */}
      {/* <Footer/> */}
    </div>
  );
} 

export default App;
