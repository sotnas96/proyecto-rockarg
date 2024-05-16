    import { useContext, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
// import { products } from "../../productsMock";

import { CartContext } from "../../Context/CartContext";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import AddProductCard from "../AddProductCard/AddProductCard";

function ItemDetailContainer(props) {
    const {addProduct, amountInCart}= useContext(CartContext);
    let {id} = useParams()
    const [item, setItem] = useState({});
    let arrayKeysItem = Object.keys(item).length
    const [isProductAdd, setIsProductAdd] = useState(false)
    const [amount, setAmount] = useState(1)
    let onAdd = quantity =>{
        let cartProduct = {
            ...item,
            quantity,
        }
        setAmount(quantity)
        setIsProductAdd(true);
        setTimeout(() => {setIsProductAdd(false)}, 5000);
        addProduct(cartProduct)
    };
   

    useEffect(()=>{
        const productsCollection = collection(db, 'products')
        const ref = doc(productsCollection, id);
        getDoc(ref)
            .then(res => {
                    setItem({
                        ...res.data(),
                        id:res.id
                    })
                 
            });
        // const itemDetail = new Promise(resolve => {
        //     resolve (products.find(e => e.id === Number(id)))
        // })
        // itemDetail
        //     .then(res => setItem(res))
    },[id]);
    
    let info = {
        item: item,
        addProduct: onAdd,
        amountInCart:amountInCart(Number(id)),
    }
    // let item = products.find(e => e.id == id)
    if(arrayKeysItem === 1) {
        return <h1>The item with ID: {id}  doesnt exist</h1>
    }
    return (
        <div>
            {!item.propertyIsEnumerable('brand') ? (
                <>  
                <div className="d-flex justify-content-center align-items-center" style={{minHeight:'700px'}}>
                    <div className="spinner-border" role="status">
                    </div>
                </div>
                </>
            ) : (
                <div style={{padding:10,position:'relative'}}>
                    <div style={{padding:10,position:'relative'}}>
                        <ItemDetail info={info}/>
                    </div>
                    {isProductAdd && 
                    <div style={{position:'absolute', top:0, right: 10, zIndex:5}}>
                                    <AddProductCard item={item} amount={amount}/>      
                    </div>
                    }

                </div>

            )}
        </div>

    )
}
export default ItemDetailContainer;