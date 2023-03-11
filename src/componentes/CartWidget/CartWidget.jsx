import { BsCartCheckFill } from "react-icons/bs";
import './CartWidget.css'
const CartWidget = ()=> {
    return (
        <div className="cartContainer" style={{marginTop:20}}>
            <BsCartCheckFill color="white" size={30} margin="10"/>
            <div className="productsQuant">
                <span >0</span>
            </div>
        </div>
    )
}
export default CartWidget;