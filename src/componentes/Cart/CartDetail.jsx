import { useContext, useEffect, useState } from "react";
import {BsFillTrashFill} from "react-icons/bs"
import { CartContext } from "../../Context/CartContext";
const CartDetail = ({...element})=>{
    const {deleteProduct, incrementItems, subtractItems} = useContext(CartContext)
    const [disableSubtract, setDisableSubtract] = useState(false);
    const [disableIncrement, setDisabeIncrement] = useState(false);
    let maxItems = element.stock
    let amountItems = element.quantity;
    useEffect(()=> {
        if(amountItems <2 ){
            setDisableSubtract(true)
        }else if (maxItems <= amountItems){
            setDisabeIncrement(true)
        }else{
            setDisableSubtract(false)
            setDisabeIncrement(false)

        }
    },[amountItems])

    return (
        <div className="row gx-3" style={{marginBottom:'20px', padding:'5px'}}>
            <div className="col-sm-5 d-flex justify-content-left align-items-center" >
                        <img src={element.img} className="" alt="..." style={{maxWidth:'64px', maxHeight:'64px', marginRight:'10px'}}/>
                        <div>
                            <p className='card-title' style={{fontWeight:'bolder'}} >{element.brand}</p>
                            <p className="card-title align-item-rigth" >{element.name}</p>
                        </div>
            </div>
            <div className="col-sm-2 d-flex align-items-center">
                <p className="mb-0" >us${element.price}</p>
            </div>
            <div className="col-sm-2 d-flex justify-content-left align-items-center">
                <button type="button" className="btn btn-light" onClick={()=> subtractItems(element.id)} disabled={disableSubtract}>-</button>
                <p className="mb-0 mx-3" > {element.quantity}</p>
                
                <button type="button" className="btn btn-light" onClick={()=> incrementItems(element.id)} disabled={disableIncrement}>+</button>

            </div>
            <div className="col-sm-2 d-flex align-items-center">
                 <p className="mb-0" >us${element.price * element.quantity}</p>

            </div>
            <div className="col-sm-1 d-flex align-items-center">
                <button className="btn btn-outline-danger"  onClick={()=> deleteProduct(element.id)}>
                    <BsFillTrashFill/>
                </button>
            </div>
 
        </div>
    )
};
export default CartDetail;