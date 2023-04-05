import { useContext } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { CartContext } from "../../Context/CartContext";
import './CartWidget.css'
const CartWidget = ()=> {
    const {totalProducts, cart} = useContext(CartContext)
    return (
        <div className="cartContainer" style={{marginTop:20}}>
            <BsCartCheckFill color="white" size={30} margin="10"/>
            {cart.length > 0 &&  
                <div className="productsQuant">
                <span >
                    {totalProducts()}
                </span>
             </div>
            }
            
        </div>
    )
}
export default CartWidget;