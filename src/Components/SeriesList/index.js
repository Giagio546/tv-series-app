import React from "react";
import './index.css';
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";


const SeriesListItem = ({ series }) => {
    return(
        <ListGroup.Item id="movieList" action variant="light">
            <Link to={`series/${series.show.id}`} state={{from: series.show.id}}>
            {series.show.name}
            </Link>      
        </ListGroup.Item >    
    )
}
const SeriesList = props => {
    return(
        <div>
            <ListGroup>
                {props.list.map(series =>(
                    <SeriesListItem series={series} key={series.show.id} />
                ))}
            </ListGroup>
        </div>
    )
}

export default SeriesList;