
const Footer = (props) =>{
    return (
        <>
        {props.children}
        <nav className="navbar navbar-expand-lg  border-nav container-navbar">
                <div className="container-fluid justify-content-between" style={{margin:10}}>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav" >
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#" style={{color:"white"}}>Contacto</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#" style={{color:"white"}}>Condiciones</a>
                            </li>
                            
                            <li className="nav-item">
                            <a className="nav-link" href="#"style={{color:"white"}}>Redes</a>
                            </li>
                        </ul>
                    </div>
                        
                </div>
            </nav>
        </>
    )
}
export default Footer;