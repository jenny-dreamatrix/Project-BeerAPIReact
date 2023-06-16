import { Link } from 'react-router-dom'
import './Arrow.css'

const Arrow = () => {
    return ( 
        <Link to='/beers' ><img className='arrow' src="../../public/Back.png" alt="" /></Link>
     );
}
 
export default Arrow;