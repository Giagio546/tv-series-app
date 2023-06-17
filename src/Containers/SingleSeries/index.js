import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../../Components/Loader";
import withRouter from "../../withRouter";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./index.css"
class SingleSeries extends Component {
    state = {
        show: null
    }
    componentDidMount() {
        const {id} = this.props.params;
        fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
          .then((response) => response.json())
          .then(json => this.setState({show: json}))
    }
    
    render() {
        const {show} = this.state;
        console.log(show);
  return (
    <div>
      { show === null && <Loader />}
      {
        show !== null
        &&
        <div>
            <Container>
                <Row>
                    <Col sm={4}></Col>
                    <Col><h1 id="name">{show.name}</h1></Col>
                    
                </Row>
                <Row>
                    <Col sm={4}></Col>
                    <Col><p id="rating">Rating - {show.rating.average}</p></Col>
                </Row>
                <Row>
                    <Col sm={4}></Col>
                    <Col><p id="premiere">Premiered - {show.premiered}</p></Col>
                    
                </Row>
                <Row>
                    <Col sm={4}></Col>
                    <Col><p id="episodes">Episodes - <span id="epLen">{show._embedded.episodes.length}</span></p></Col>
                </Row>
                <Row>
                    <Col sm={4}></Col>
                    <Col><Image alt="Show" src={show.image.medium} rounded /></Col>
                </Row> 
                <p>{removeHtmlTags(show.summary)}</p>               
            </Container>
        </div>
      }
    </div>
  );
  function removeHtmlTags(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return doc.body.textContent || '';
  }
}

}
export default withRouter(SingleSeries);