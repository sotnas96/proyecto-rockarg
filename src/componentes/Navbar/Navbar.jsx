import './Navbar.css'
import logoXl from '../../images/logoWhite-noBack.png'

import logoS from '../../images/rockargIconWhite.png'
import {AiOutlineMenu} from "react-icons/ai"
import { Link, NavLink } from 'react-router-dom'

import CartWidget from '../CartWidget/CartWidget'
import Footer from '../Footer/Footer'
function Navbar (props) {
    const listStyle = ({ isActive}) => ({ 
        color:'white',
        borderBottom: isActive ? '1px solid white' : 'none'
    })
    return (
        <>
            <nav className="navbar navbar-expand-lg  border-nav container-navbar sticky-top">
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
                        <ul className="navbar-nav " id='listNav'>
                            <li className="nav-item">
                                <NavLink  className="nav-link active" aria-current="page" to="/" style={listStyle} >Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to='/category/guitars' className="nav-link" href="#" style={listStyle}>Guitars</NavLink >
                            </li>
                            <li className="nav-item">
                            <NavLink to='/category/keyboards' className="nav-link" href="#"  style={listStyle}>Keyboards</NavLink >
                            </li>
                            
                            <li className="nav-item">
                            <NavLink to='/category/drums' className="nav-link" href="#" style={listStyle}>Drums</ NavLink>
                            </li>
                        </ul>
                    </div>
                        <Link to='/cart'>
                            <CartWidget/>
                        </Link>
                </div>
            </nav>
            <div style={{minHeight:'700px'}}>
                {props.children }
            </div>
            <Footer/>
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