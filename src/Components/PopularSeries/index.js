import React, {Component} from "react";
import Loader from "../Loader";
import Home from "../../Containers/Home";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

const PopularSeries = props => {
        return(
                <div class="container-shows"> 
                {props.list.map( series => (
                    <div class="single-show" key={series.id}>
                        <Link to={`series/${series.show.id}`} state={{from: series.show.id}}><h2>{series.show.name.length > 15 ? series.show.name.substring(0,21) : series.show.name }</h2></Link>
                        <Link to={`series/${series.show.id}`} state={{from: series.show.id}}><img src={series.show?.image?.medium} alt="locandina"/></Link>
                        <p>{series.airdate} - {series.airtime}</p>
                        <p>Network: {series.show?.network?.name}</p>
                    </div>
                ))}
                </div>
            
        )
}

export default PopularSeries