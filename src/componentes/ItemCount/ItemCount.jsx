import { useState } from "react"
import './ItemCount.css'
const ItemCount = ({initial=1, stock, onAdd}) =>{
    const [count, setCount] = useState(initial);
    
    let add = () => {
        if(stock > count){
            setCount(count+1)
        }
    }
    let restar = () => {
        if (count > initial){
            setCount(count-1)
        }
    }
    return(
        <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-between align-items-center buttonContainer">
                <button onClick={restar}className=" buttomCount" type="button">-</button>
                <p className="align-self-center" style={{fontSize:'20px'}} >{count}</p>
                <button onClick={add} className="buttomCount" type="button">+</button>
            </div>
            <button onClick={()=> onAdd(count)} className="btn btn-primary" style={{width:'80%', backgroundColor:'red', border:'none'}} type="button">Agregar al carrito</button>
        </div> 
    )
};
export default ItemCount;