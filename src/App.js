// import Footer from "./componentes/Footer/Footer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer';
import Navbar from "./componentes/Navbar/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import BackendProducts from "./componentes/BackendProducts/BackendProducts";
import CartContextProvider from "./Context/CartContext";
import Cart from "./componentes/Cart/CartContainer";
import Login from "./componentes/Login/Login";
import FormikValid from "./componentes/FormikValid/FormikValid";
function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar>
              <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/formik" element={<FormikValid/>}/>
        
                
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/backendProducts" element={<BackendProducts/>}/>
                <Route path="*" element={<h1>NOT FOUND</h1>}/>
              </Routes>
        </Navbar>
      </CartContextProvider>
    </BrowserRouter>
  );
} 

export default App;
