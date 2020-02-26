import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Route
} from "react-router-dom";
import Extract from "./Extract";
import Home from "./Home";
import Files from "./Files";

function Content(props){
    return(
        <div className="content">
                <Route exact path="/" component={Home}/>
                <Route exact path="/extract" component={Extract} />
                <Route exact path="/files" component={Files} />
        </div>
    );
}

export default Content;