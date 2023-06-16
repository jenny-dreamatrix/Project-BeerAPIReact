import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import './BeerDetail.css'
import ArrowRandom from "../components/ArrowRandom";

const RandomBeerDetail = () => {
    const [randomBeerData, setRandomBeerData] = useState([])

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((res) => res.json())
        .then((randomBeerData) => setRandomBeerData(randomBeerData))
        .catch((err) => console.log(`Fehler: ${err}`))
    },[])

    return (
        <section>
        <article className="beer-detail-art">
        <img className="product-img" src={randomBeerData.image_url} alt={randomBeerData.name} />
        <h1>{randomBeerData.name}</h1>
        <h3>{randomBeerData.tagline}</h3>
        <div className="brewed-wrapper">
            <div>
                <h5>First brewed:</h5>
                <h5>{randomBeerData.first_brewed}</h5>
            </div>
            <div>
                <h5 className="align-right">Attenuation level:</h5>
                <h5 className="align-right">{randomBeerData.attenuation_level}</h5>
            </div>
        </div>
        <p>{randomBeerData.description}</p>
        <ArrowRandom/>
        </article>
        <Nav/>
        </section> 
     );
}
 
export default RandomBeerDetail;