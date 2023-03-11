import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock";

function ItemDetailContainer(props) {
    let {id} = useParams()
    let item = products.find(e => e.id == id)    
    return (
        <div style={{padding:10}}>
            <div style={{padding:10}}>
                <ItemDetail {...item}/>
            </div>
        </div>
    )
}
export default ItemDetailContainer;