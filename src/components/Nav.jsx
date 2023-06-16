import { Link } from "react-router-dom";
import './Nav.css'
import logo from '../../public/Logo.svg'

const Nav = () => {
    return ( 
        <nav>
            <Link to='/'><img src={logo} alt="logo" /></Link>
        </nav>
     );
}

export default Nav;