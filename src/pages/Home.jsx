import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return ( 
        <section className="home-sec">
            <article>
                <img src="./christin-hume-08tX2fsuSLg-unsplash.png" alt="all beers" />
                <Link to='/beers'><h2>All Beers</h2></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            </article>
            <article>
                <img src="./proriat-hospitality-flENqflm6xU-unsplash.png" alt="random beer" />
                <Link to='/random'><h2>Random Beer</h2></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            </article>
        </section>
     );
}
 
export default Home;