import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import Arrow from "../components/Arrow";
import './BeerDetail.css'

const BeerDetail = () => {
    const param = useParams()
    const [detailData, setDetailData] = useState([])

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${param.id}`)
        .then((res) => res.json())
        .then((detailData) => setDetailData(detailData))
        .catch((err) => console.log(`Fehler: ${err}`))
    },[])

    return (
        <section>
        <article className="beer-detail-art">
        <img className="product-img" src={detailData.image_url} alt={detailData.name} />
        <h1>{detailData.name}</h1>
        <h3>{detailData.tagline}</h3>
        <div className="brewed-wrapper">
            <div>
                <h5>First brewed:</h5>
                <h5>{detailData.first_brewed}</h5>
            </div>
            <div>
                <h5 className="align-right">Attenuation level:</h5>
                <h5 className="align-right">{detailData.attenuation_level}</h5>
            </div>
        </div>
        <p>{detailData.description}</p>
        <Arrow/>
        </article>
        <Nav/>
        </section> 
     );
}
 
export default BeerDetail;