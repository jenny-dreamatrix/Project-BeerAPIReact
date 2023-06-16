import { Link } from "react-router-dom";
import './Button.css'

const Button = (props) => {
    return ( 
        <Link to={`/beers/${props.id}`}><button>Details</button></Link>
     );
}
 
export default Button;