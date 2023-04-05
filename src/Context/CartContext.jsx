import { createContext, useState } from "react";
import Swal from 'sweetalert2'
export const CartContext = createContext();
const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    //agregar producto
    const addProduct = (product)=> {
        //consulto si tengo ese producto en el arreglo de carrito
        let checkItem= isInCart(product);
        if ( checkItem){
            // cart[index].quantity += product.quantity;
            let newCart = cart.map (e => {
                if (e.id === product.id){
                    return  {
                        ...e,
                        quantity: e.quantity+product.quantity
                    }
                }else{
                    return{
                        ...e
                    }
                }
            });
            setCart(newCart)
        
        
        }else{
            setCart([...cart, product])
        }
    }
    //limpiar carrito
    const cleanCart = () => {
        setCart([])
        
    }
    //eliminar un producto del carrito
    const deleteProduct = (id) => {
        let newCart = cart.filter( e => e.id !== id);
        setCart(newCart)
    };
    //agregar elememtos al carrito
    const incrementItems = (id) => {
        let newCart = cart.map(e => {
            if (e.id === id && (e.quantity < e.stock)){
                return {
                    ...e,
                    quantity: e.quantity + 1
                }
            }else{
                return {...e}
            }
        });
        setCart(newCart);
    }
    //restar elementos al carrito
    const subtractItems = (id) => {
        let newCart = cart.map(e => {
            if (e.id === id && (e.quantity >1)){
                return {
                    ...e,
                    quantity: e.quantity - 1
                }
            }else{
                return {...e}
            }
        });
        setCart(newCart);
    }

    //consulto si existe en el carrito cierto producto 
    const isInCart = (product) => {
        // return cart.findIndex(e => e.id === product.id)
        return cart.some(e => e.id === product.id)
    }
    //obtener el total de los elementos del carrito
    const totalProducts = () => {
        let productsAmount =  cart.reduce((acc , current) => acc + current.quantity, 0 );
        return productsAmount;
    }
    //obtener el precio total del carrito  
    const totalPrice = () =>{
        let productsPrice = cart.reduce((acc, current) => acc + ((current.quantity)*(current.price)), 0);
        return productsPrice;
    };
    //obtener el numero disponible de productos by id
    let amountInCart = id => {
        const productAmount = cart.find(e=> e.id === Number(id))
        return productAmount? productAmount.quantity : 0
    };

    let data ={
        cart,
        addProduct,
        cleanCart,
        totalProducts,
        totalPrice,
        deleteProduct,
        incrementItems,
        subtractItems,
        amountInCart
    };
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
};
export default CartContextProvider;