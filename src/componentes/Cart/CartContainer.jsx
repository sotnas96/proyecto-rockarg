import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../Context/CartContext";
import FormCheckout from "../FormCheckout/FormCheckout";
import CartDetail from "./CartDetail";
function Cart(){
    const {cart, cleanCart, totalPrice} = useContext(CartContext)
    const [showCheckoutForm , setShowCheckoutForm] = useState(false)
    const [orderId, setOrderId] = useState(null);
    let cancelPurchase = () => {
        setShowCheckoutForm(false)
    }
    let clearCart = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                cleanCart();
                Swal.fire(
                    'Deleted!',
                    'Your cart has been deleted.',
                    'success'
                    )
            }
          })
    }
    let continuePurchase = ()=> {
        setShowCheckoutForm(true);
    }
    let textStyle= {
        fontWeight: '700'
    }
    if(orderId){
        return <div>
            <h1>Your order ID is: {orderId}</h1>
        </div>
            
    }
    return(
        <div>
            
         {(cart.length === 0)? 
         ( 
            <div style={{padding: '10px'}} className="d-flex flex-column  align-items-center">
                <h2>
                    Shopping Cart
                </h2>
                <p>Your shopping cart is empty</p>
                <Link to='/' style={{textDecoration:'none'}}>
                     <button type="button" className="btn btn-success align-self-start">GO SHOPPING!</button>
                </Link>
            </div>
         ) : (
            <div style={{padding: '10px'}} className="d-flex flex-column ">
                <h2>Shopping Cart</h2>
                <div >

                    <div className="d-flex justify-content-around card" >
                        <div className="row card gx-3" style={{ padding: '10px', flexDirection:'row', backgroundColor:'#f2f2f2'}} >
                            <p className="col-sm-5 " style={textStyle}>Item</p>
                            <p className="col-sm-2 " style={textStyle}> Price</p>
                            <p className="col-sm-2 " style={textStyle}>Amount</p>
                            <p className="col-sm-3 " style={textStyle}>Subtotal</p>

                            
                        </div>
                        {cart.map ((element) => {
                            return <CartDetail key={element.id} {...element} />
                        })}
                        
                    </div>
                    <div className="row card gx-3" style={{ padding: '10px', flexDirection:'row', backgroundColor:'#f2f2f2'}}>
                            <h5 className="col-12" style={textStyle} >Order summary</h5>
                            <h5 className="col-12" >Total: <span style={{...textStyle,color:'red'}}>us${totalPrice()}</span> </h5>
                            <button type="button" className="btn btn-primary col-3" onClick={continuePurchase}>Proceed to checkout</button>
                            {showCheckoutForm && <FormCheckout cart={cart} getTotalPrice={totalPrice} cleanCart={cleanCart} setOrderId={setOrderId} cancelPurchase={cancelPurchase}/>}
                            
                    </div>
                </div>
                <button onClick={clearCart} className="btn btn-danger align-self-end">LIMPIAR CARRITO</button>
            </div>
          )}
            
        </div>
        
    )
}
export default Cart;