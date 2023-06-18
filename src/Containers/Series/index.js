import React, {Component} from "react";
import SeriesList from "../../Components/SeriesList";
import Loader from "../../Components/Loader";
import Intro from "../../Components/Intro";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./index.css";

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
      }
    componentDidMount() {
        
      }

    onSeriesInputChange = e => {
        this.setState({seriesName: e.target.value, isFetching: true})
        fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
          .then((response) => response.json())
          .then(json => this.setState({series: json, isFetching: false}))
    }
    render() {
        const { series, seriesName, isFetching} = this.state;
        return (
            
            <div>
                <Container>
                    <Row>
                        <Col><Intro message="Here you can find all of your most loved series" /></Col>
                        <Col xs="auto"></Col>
                    </Row>
                    <Row>  
                        <Col>
                            <InputGroup className="mb-3">
                                <Form.Control
                                id="inMovie"
                                autocomplete="off"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                value={seriesName} type="text" onChange={this.onSeriesInputChange}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={9}></Col>
                    </Row>
                    <Row>
                        <Col><div>
                    
                        
                    </div>
                    { 
                        !isFetching && series.length === 0 && seriesName.trim() === ''
                        &&                
                        <p>Please enter series name into the input</p>
                    }

                    {
                        !isFetching && series.length === 0 && seriesName.trim() !== ''
                        &&
                        <p>No TV series have been found with this name</p>
                    }

                    {
                        isFetching && <Loader />
                    }

                    {
                        !isFetching && <SeriesList className="movie-list-container" list={this.state.series}/>
                    }</Col>
                    <Col xs={9}></Col>
                    </Row>
                    
                </Container>
            </div>
            
        )
    }
}

export default Series;