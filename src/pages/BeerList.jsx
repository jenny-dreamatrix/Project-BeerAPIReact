import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import BeerItem from "../components/BeerItem";

const BeerList = () => {
    const [beersData, setBeersData] = useState([])

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers`)
        .then((res) => res.json())
        .then((beersData) => setBeersData(beersData))
        .catch((err) => console.log(`Fehler: ${err}`))
    },[])

    return ( 
        <section className="beer-list-sec">
        {beersData.map((beer, index) => {return <BeerItem beer={beer} key={index} />})}
        <Nav/>
        </section>
     );
}
 
export default BeerList;