import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList'
// import {products} from '../../productsMock';
import { useParams } from "react-router-dom";
import {db} from '../../firebaseConfig';
import { collection, getDocs, query, where } from "firebase/firestore";



const ItemListContainer = (props) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    useEffect(()=> {
        //promesa manual para representar llamadas al backend\
    
        // const itemsList = new Promise(resolve => {
        //     setTimeout(() => {
        //         resolve(!categoryId ? products : (products.filter(e => e.category === categoryId)))
        //     }, 1000);
        // });
        // itemsList
        //     .then(res => setItems(res))
        //     .catch(error => console.log(error))

        //llamada a firebase que represneta el backend
        const productsCollection = collection(db,'products');
        let consulta;
        if(!categoryId){
           consulta = getDocs(productsCollection)
             }
        else{
            const q = query(productsCollection, where('category', '==', categoryId));
            consulta = getDocs( q)
        }
        consulta
            .then(res => {
                let products = res.docs.map(e => {
                        return{
                            ...e.data(),
                            id: e.id
                        }
                });
                setItems(products)
            })
    }, [categoryId])
    return (
        <div>

            {items.length === 0 ? (
                <>  
                    <div className="d-flex justify-content-center align-items-center" style={{minHeight:'700px'}}>
                        <div className="spinner-border" role="status">
                        </div>
                    </div>
                </>
            ):(
                <div style={{margin:50, minHeight:'700px'}}> 
                    <ItemList items={items}/>
                </div>
            )}
        </div>
        
    )
};
export default ItemListContainer