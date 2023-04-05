import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useRef, useState } from "react";
import { db } from "../../firebaseConfig";

const FormCheckout = ({cart,getTotalPrice, cleanCart, setOrderId, cancelPurchase}) => {
    const [userData, setUserData] = useState({name:'',email:'',phone:''})
    let inputName = useRef();
    let inputSurname = useRef();
    let inputPhone = useRef();
    let email = useRef();
    let reEmail = useRef();


    let handleChange = e => {
        
        if(e.target.name === 'name' ){
            if( e.target.value.length < 5){
                inputName.current.className = 'w-25 form-control is-invalid'

            }else{
                inputName.current.className = 'w-25 form-control is-valid'
                setUserData({...userData, [e.target.name]:e.target.value})
            }
        }
        if(e.target.name === 'surname' ){
            if( e.target.value.length < 5){
                inputSurname.current.className = 'w-25 form-control is-invalid'

            }else{
                inputSurname.current.className = 'w-25 form-control is-valid'
                setUserData({...userData, [e.target.name]:e.target.value})
            }
        }
        if(e.target.name === 'phone'){
            if( e.target.value.length < 10){
                inputPhone.current.className = 'w-25 form-control is-invalid'

            }else{
                inputPhone.current.className = 'w-25 form-control is-valid'
                setUserData({...userData, [e.target.name]:e.target.value})
            }
        }
        if(e.target.name === 'email'){
            if(e.target.value.includes('@')){
                email.current.className = 'w-25 form-control is-valid'
                setUserData({...userData, [e.target.name]:e.target.value})
            }
            else{
                email.current.className = 'w-25 form-control is-invalid'
            }
        }
        if(e.target.name === 'reEmail'){
            if(reEmail.current.value === email.current.value){
                reEmail.current.className = "w-25 form-control is-valid"
            }else{
                reEmail.current.className = "w-25 form-control is-invalid"
            }
        }
    };
    let handleForm = e => {
        e.preventDefault();
        let order = {
            buyer: userData,
            item: cart,
            price: getTotalPrice(),
            date: new Date()
        };
        const orderCollection = collection(db,'orders');
        addDoc(orderCollection,order)
            .then(res => {
                setOrderId(res.id);
                cleanCart()
            })
        cart.forEach(product => {
            let productUpdate = doc(db, 'products', product.id);
            updateDoc(productUpdate, {stock: product.stock - product.quantity})
        })
        

    }
    return (
        <div style={{margin:10}}>
            <form action="" onSubmit={handleForm} className="d-flex flex-column ">
                <div className="my-2">
                    <input type="text" name="name" placeholder="Nombre" onChange={handleChange} className={`w-25 form-control`} ref={inputName}/>
                </div>
                <div className="my-2">
                    <input type="text" name="surname" placeholder="Apellido" onChange={handleChange} className={`w-25 form-control`} ref={inputSurname}/>
                </div>
                <div className="my-2">
                    <input type="phone" name='phone' placeholder="Phone-Number" onChange={handleChange}className={`w-25 form-control`} ref={inputPhone} />
                </div >
                <div  className="my-2">
                    <input type="email" name='email' placeholder="Email" onChange={handleChange} className={`w-25 form-control`}  ref={email}/>
                </div>
                <div  className="my-2">
                    <input type="email" name='reEmail' placeholder="Repeat email" onChange={handleChange} className={`w-25 form-control`}  ref={reEmail}/>
                </div>
                <div className="my-2">
                    <button type="submit" className="btn btn-success w-25">Purchase</button>

                </div>  
                <div className="my-2">
                    <button type="" className="btn btn-warning w-25" onClick={cancelPurchase}>Cancel</button>
                </div>
            </form>
        </div>
    )
};
export default FormCheckout;