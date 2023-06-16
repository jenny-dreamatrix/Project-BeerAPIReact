import Button from "./Button";
import './BeerItem.css'

const BeerItem = (props) => {
    let createdBy = props.beer.contributed_by
    createdBy = createdBy.split("<")[0]

    return ( 
        <article className="beer-item-art">
            <div className="img-wrapper"><img src={props.beer.image_url} alt={props.beer.name} /></div>
            <div className="info-wrapper">
            <div>
            <h2>{props.beer.name}</h2>
            <h3>{props.beer.tagline}</h3>
            </div>
            <p>Created by: {createdBy}</p>
            <Button id={props.beer._id}/>
            </div>
        </article>
     );
}

export default BeerItem;