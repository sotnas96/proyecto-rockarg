import { useState } from "react";
const ItemCount = ()=> {
    const [contador, setContador] = useState(2);
    const sumar = () => {
        setContador(contador+1);
    }
    const restar = () => {
        setContador(contador-1)
    }
    
    return (
        <div>
            {/* <h1> Item Count</h1>
            <h2>{contador}</h2>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button> */}

        </div>
    )
};
export default ItemCount;