import './Navbar.css'
import logoXl from '../../images/logoWhite-noBack.png'
import logoS from '../../images/rockargIconWhite.png'
import {AiOutlineMenu} from "react-icons/ai"

import CartWidget from '../CartWidget/CartWidget'
function Navbar (props) {
    
    return (
        <>
        <nav class="navbar navbar-expand-lg  border-nav container-navbar">
            <div class="container-fluid">
                <a class="navbar-brand d-none d-sm-block" href="#">
                    <img src={logoXl} alt="" style={{width: 200}}/>
                </a>
                <a class="navbar-brand  d-block d-sm-none" href="#">
                    <img src={logoS} alt="" style={{width: 100, height:85}} />
                </a>
                <button class="navbar-toggler" style={{border:'none', boxShadow:'none'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span class="navbar-toggler-icon" ></span> */}
                    <AiOutlineMenu style={{color:'white'}}/>
                </button>
                {/* <GiHamburgerMenu/> */}
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav" style={{width:50}}>
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#" style={{color:"white"}} >Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#" style={{color:"white"}}>Guitars</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#" style={{color:"white"}}>Keyboards</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#"style={{color:"white"}}>Woodwinds</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#"style={{color:"white"}}>Drums</a>
                        </li>
                    </ul>
                </div>
                <a href="#">
                    <CartWidget/>
                </a>
            </div>
        </nav>
        {props.children}
        </>
        // <div className='container-navbar'>
        //     {/* Existen 3 formas de importar imagenes */}
        //     {/* 1 . desde cloudinary */}
        //     {/* 2 . importando desde carpeta images en src */}
        //     {/* 3. en src partimos desde public y vamos a la carpeta donde esta la imagen como haciamos con express */}
        //     <img src={logo} alt="" style={{width:200}} />
        //     <ul className='container-list'>
        //         <li>
        //             <a href="">todas</a>
        //         </li>
        //         <li>
        //             <a href="">guitars</a>
        //         </li>
        //         <li>
        //             <a href="">drums</a>
        //         </li>
        //         <li>
        //             <a href="">keyboards</a>
        //         </li>
        //         <li>
        //             <a href="">woodwinds</a>
        //         </li>
        //     </ul>
        //     <CartWidget/>
        // </div>
    )
}
export default Navbar;