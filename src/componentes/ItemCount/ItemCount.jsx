import { useState } from "react"

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
        <div className="d-grid gap-2">

            <button onClick={restar}className="btn btn-primary" type="button">-</button>
            <p style={{textAlign:'center'}}>{count}</p>
            <button onClick={add} className="btn btn-primary" type="button">+</button>
            <button onClick={()=> onAdd(count)} className="btn btn-primary" type="button">Agregar al carrito</button>
        </div> 
    )
};
export default ItemCount;