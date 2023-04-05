import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({info})=>{
    return(
        <div>
            {info.item.stock === 0 ? (
                <div className="d-flex justify-content-center">
                <div className="card mb-3 " style={{maxWidth: 700, boxShadow:'0 0 30px #c8c6c4', border:'none'}}>
                    <div className="row g-0">
                        <div className="col-md-5 position-relative" style={{alignSelf:'center', padding:'5px'}}>
                            <img src={info.item.img} className="img-fluid rounded-start bigImg" alt="..." style={{filter: "blur(0.3rem)"}}/>
                            <div className="position-absolute" style={{top:'50%', left:'50%',transform: 'translate(-50%, -50%)', fontSize:'20px', fontWeight:'700',color:'white'}}>OUT OF STOCK</div>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h3 className="card-title" style={{fontWeight:'900', fontSize:'30px'}}>{info.item.brand}</h3>
                                <h5 className="card-title" style={{fontWeight:'500'}}>{info.item.name}</h5>
                                <p className="card-text" style={{width: '100%'}}>{info.item.description}</p>
                                <p className="card-text" style={{color:'red' , fontSize:30}}>us${info.item.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            ) : (
                <div className="d-flex justify-content-center">
                    <div className="card mb-3 " style={{maxWidth: 700, boxShadow:'0 0 30px #c8c6c4', border:'none'}}>
                        <div className="row g-0">
                            <div className="col-md-5" style={{alignSelf:'center', padding:'5px'}}>
                                <img src={info.item.img} className="img-fluid rounded-start bigImg" alt="..."/>
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h3 className="card-title " style={{fontWeight:'bold', fontSize:'30px'}}>{info.item.brand}</h3>
                                    <h5 className="card-title" style={{fontWeight:'500'}}>{info.item.name}</h5>
                                    <p className="card-text" style={{width: '100%'}}>{info.item.description}</p>
                                    <p className="card-text" style={{color:'red' , fontSize:30}}>us${info.item.price}</p>
                                </div>
                            </div>
                        </div>
                        <ItemCount {...info} />
                    </div>
               </div>
            )
            }
            
        </div>

    )
};
export default ItemDetail;