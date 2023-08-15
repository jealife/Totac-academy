import { Link, NavLink } from "react-router-dom";
import './nav.css';
import logo from '../../assets/images/Logo_TOTAC.png'
function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Link to="/"><img src={logo} alt="logo TOTAC"/></Link>
            </div>
           <div className="menu">
             <NavLink className="link-item" to="/">Accueil</NavLink>
            <NavLink className="link-item" to="/a-propos">A propos</NavLink>
           </div>
        </nav>
    )
}

export default Navbar
