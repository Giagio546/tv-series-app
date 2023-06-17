import React from "react";
import {Routes, Route} from "react-router-dom"
import Series from "../../Containers/Series";
import SingleSeries from "../../Containers/SingleSeries";
import Home from "../../Containers/Home";

const Main = props => (
    <Routes>
        <Route exact path="/series" element={<Series />}/>
        <Route path="/series/:id" element={<SingleSeries />}/>
        <Route path="/" element={<Home/>}/>
    </Routes>
);

export default Main;