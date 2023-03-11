import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({...item})=>{
    let onAdd = quantity =>{
        console.log(`se agregaron ${quantity} productos`)
    }
    return(
        <div className="d-flex justify-content-center">
            <div className="card mb-3" style={{maxWidth: 700, boxShadow:'10px 5px 5px #c8c6c4', border:'none'}}>
                <div className="row g-0">
                    <div className="col-md-5" style={{alignSelf:'center'}}>
                        <img src={item.img} className="img-fluid rounded-start bigImg" alt="..."/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h3 className="card-title" style={{fontWeight:'600'}}>{item.brand}</h3>
                            <h5 className="card-title" style={{fontWeight:'500'}}>{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text" style={{color:'red' , fontSize:30}}>us${item.price}</p>
                        </div>
                    </div>
                </div>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
};
export default ItemDetail;