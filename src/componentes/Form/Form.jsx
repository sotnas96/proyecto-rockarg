import { useState } from "react";

const Form = ()=> {
    // const [name, setName] = useState('');
    const [userData, setUserData] = useState({name:'',email:'',password:''})
    let handleChange = e => {
        setUserData({...userData, [e.target.name]:e.target.value})
    }
    return (
        <div>
            <form action="">
                <input type="text" name="name" placeholder="ingrese su nombre" onChange={handleChange}/>
                <input type="email" name='email' placeholder="ingrese su email" onChange={handleChange}/>

                <button>Enviar</button>
            </form>
        </div>
    )
};
export default Form;