import React,  { Component } from "react";
import PopularSeries from "../../Components/PopularSeries";
import Loader from "../../Components/Loader";
class Home extends Component {
    state = {
        series:[],
        isFetching: false
    }
    componentDidMount() {
        this.setState({isFetching: true});
        fetch(`https://api.tvmaze.com/schedule`)
            .then(response => response.json())
            .then(json => this.setState({series: json, isFetching: false}));
    }

    render() {
        const { series, isFetching} = this.state;
        console.log(series)
        return(
            
            <div>
                {
                    series.length === 0 && isFetching === false 
                    &&
                    <p>No incoming series</p>
                }

                {
                    series.length === 0 && isFetching
                    &&
                    <Loader/>
                }

                {
                    !isFetching && <PopularSeries list={this.state.series}/>
                }
            </div>
        )
    }
}

export default Home;