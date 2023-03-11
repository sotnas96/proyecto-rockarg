import Footer from "./componentes/Footer/Footer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Navbar from "./componentes/Navbar/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Form from "./componentes/Form/Form";
function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Footer>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/login" element={<h1>Soy el login</h1>}/>
              <Route path="/cart" element={<h1>Soy el cart</h1>}/>
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
              <Route path="/formulario" element={<Form/>}/>

              <Route path="*" element={<h1>NOT FOUND</h1>}/>
            </Routes>
        </Footer>
      </Navbar>
    </BrowserRouter>
  );
} 

export default App;
