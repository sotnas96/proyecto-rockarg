import { useEffect, useState } from "react";
import axios from "axios";
const BackendProducts = ()=>{
    const [products, setProducts] = useState([]);
    useEffect(() => {
        //solicitud a la api
        const data = axios.get("http://localhost:5000/products");
        data.
            then(res => setProducts(res.data))
    },[])
    return (
        <div>
            <h1>soy el backend products</h1>
            {
                products.map(e => {
                    return (
                        <div>
                            {e.brand}
                        </div>
                    )
                                })
            }
        </div>
    )
};
export default BackendProducts