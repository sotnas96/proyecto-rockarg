import { Link } from 'react-router-dom';
import './ProductCard.css'
const ProductCard = ({item})=> {
    // este componente seria el contenedor, por lo cual no tendria html, sino hijos.
    return (
        <div className="card cardContainer" >
            <Link to={`/item/${item.id}`} style={{textDecoration:'none', color:'black'}}>

                <img src={item.img} className="card-img-top" alt="..."/>  
                <div className="card-body lowCard">
                    <h5 className="card-title" style={{fontSize:'1.5rem', fontWeight:'700'}}>{item.brand} </h5>
                    <p className='itemName'>{item.name}</p>
                    <p className="card-text price">us${item.price}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </Link>
        </div>
    )
};
export default ProductCard;