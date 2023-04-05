import {GiConfirmed} from "react-icons/gi"

import { Link } from "react-router-dom";
const AddProductCard = ({item, amount} ) => {
    return (
        <div className=" d-flex flex-column p-2" style={{boxShadow:'0 0 30px #c8c6c4', border:'none'}}>
                                        <div className=" d-flex justify-content-center align-items-center mb-2">
                                            <GiConfirmed style={{color:'green', fontSize:"20px", width:'20%'}} />
                                            <p className="text-success mb-0" >{`Product add!` }</p>
                                        </div>
                                        <div className="d-flex mb-2">
                                            <div className="" style={{alignSelf:'center', padding:'5px'}}>
                                                <img src={item.img}  style={{maxWidth:'150px', maxHeight:'150px', padding:'5px'}} alt="..."/>
                                            </div>
                                            <div className="d-flex flex-column justify-content-around">
                                                <h5 className="mb-0" style={{fontWeight:'600'}} >{item.brand}</h5>
                                                <span>
                                                        Quantity:
                                                <span className="card-text mb-0" style={{fontWeight:'bold'}} > {amount}</span>
                                                </span>
                                                <span>
                                                        Price:
                                                <span className="card-text mb-0"style={{fontWeight:'bold'}}   > us${item.price}</span>
                                                </span>

                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-around mb-2">
                                            <Link to='/cart'>
                                                <button type="" className="btn btn-outline-primary ">go to cart</button>
                                            </Link>
                                            {/* <button type="" className=" btn btn-outline-success ">Checkout</button> */}
                                        </div>
                                    </div>  
    )
};
export default AddProductCard;