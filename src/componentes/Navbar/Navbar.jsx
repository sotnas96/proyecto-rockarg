import './Navbar.css'
import logoXl from '../../images/logoWhite-noBack.png'

import logoS from '../../images/rockargIconWhite.png'
import {AiOutlineMenu} from "react-icons/ai"
import { Link } from 'react-router-dom'

import CartWidget from '../CartWidget/CartWidget'
function Navbar (props) {
    
    return (
        <>
            <nav className="navbar navbar-expand-lg  border-nav container-navbar">
                <div className="container-fluid justify-content-between" style={{margin:10}}>
                    <Link to='/'  className="navbar-brand d-none d-sm-block" href="#">
                        <img src={logoXl} alt="" style={{width: 200}}/>
                    </Link >
                    <Link to='/' className="navbar-brand  d-block d-sm-none" href="#">
                        <img src={logoS} alt="" style={{width: 100, height:85}} />
                    </Link >
                    <button className="navbar-toggler" style={{border:'none', boxShadow:'none'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon" ></span> */}
                        <AiOutlineMenu style={{color:'white'}}/>
                    </button>
                    {/* <GiHamburgerMenu/> */}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav" >
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={{color:"white"}} >Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/category/guitars' className="nav-link" href="#" style={{color:"white"}}>Guitars</Link >
                            </li>
                            <li className="nav-item">
                            <Link to='/category/keyboards' className="nav-link" href="#" style={{color:"white"}}>Keyboards</Link >
                            </li>
                            
                            <li className="nav-item">
                            <Link to='/category/drums' className="nav-link" href="#"style={{color:"white"}}>Drums</Link >
                            </li>
                        </ul>
                    </div>
                        <Link to='/cart'>
                            <CartWidget/>
                        </Link>
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