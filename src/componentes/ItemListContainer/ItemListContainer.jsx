import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList'
import {products} from '../../productsMock';
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    useEffect(()=> {
        const itemsList = new Promise(resolve => {
            resolve(!categoryId ? products : (products.filter(e => e.category == categoryId)))
        });
        itemsList
            .then(res => setItems(res))
            .catch(error => console.log(error))
    }, [categoryId])
    return (
        <div style={{margin:50}}> 
            <ItemList items={items}/>
        </div>
    )
};
export default ItemListContainer