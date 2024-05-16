    import ProductCard from "../ProductCard/ProductCard"

const ItemList = ({items}) => {
    return (
       
        <div className="d-flex flex-wrap justify-content-between" style={{margin:'20px', gap:'20px 0px'}}>
             {
                items.map((item,index)=> {
                    return <ProductCard key={item.id} item={item}/>
                })
            }
        </div>
    )
};
export default ItemList;