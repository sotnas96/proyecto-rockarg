import ProductCard from "../ProductCard/ProductCard"

const ItemList = ({items}) => {
    return (
       
        <div className="d-flex flex-wrap justify-content-around" style={{margin:'20px',}}>
             {
                items.map((item,index)=> {
                    return <ProductCard key={item.id+index} item={item}/>
                })
            }
        </div>
    )
};
export default ItemList;