import { useEffect, useState } from "react"
// import { Link } from "react-router-dom";
import './ItemCount.css'
const ItemCount = ({ ...info}) =>{
    const [count, setCount] = useState(1);
    const [disableAddProduct, setdisableAddProduct] = useState(false);
    // const [hideCartButton, setHideCartButton] = useState(false)
    let amountAvailable = info.item.stock-info.amountInCart;
    let blockButton = () => {
        setdisableAddProduct(true);
        info.addProduct(count)
        // setHideCartButton(true)
        setTimeout(()=>{
            // setHideCartButton(false);
            setdisableAddProduct(false)},5000)
    }
    let add = () => {
        if(amountAvailable > count){
            setCount(count+1)
        }
    }
    let restar = () => {
        if (count > 1){
            setCount(count-1)
        }
    }
    useEffect(()=> {
        if(amountAvailable < count){
            setCount(amountAvailable)
        }
    },[info.amountInCart])
    
    return(
        <div className="d-flex justify-content-end flex-wrap" style={{margin:10}}>
            <div className="d-flex justify-content-between align-items-center buttonContainer">
                <button onClick={restar}className=" buttomCount" type="button">-</button>
                <span className="align-self-center" style={{fontSize:'20px'}} >{count}</span>
                <button onClick={add} className="buttomCount" type="button">+</button>
            </div>
            <button onClick={()=> {blockButton()}} className="btn btn-danger" style={{width:'50%'}} type="button" disabled={disableAddProduct}>Agregar al carrito</button>
            {/* {
                hideCartButton && 
                <Link to='/cart' style={{width:'50%', marginTop:'10px'}} className="align-self-end">
                    <button  className="btn btn-success" style={{width:'50%', marginTop:'10px'}} type="button" >go to cart</button>
                </Link>
            } */}

            
        </div> 
    )
};
export default ItemCount;