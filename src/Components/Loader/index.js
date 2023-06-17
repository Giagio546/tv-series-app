import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const Loader = props => (
    <div>
        <Spinner animation="border" role="status" size="md">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
);

export default Loader;