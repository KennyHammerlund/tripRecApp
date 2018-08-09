import React, { Component } from 'react';
import {Link} from "react-router-dom";

class trip extends Component {
    render() {
        const{id,comments,trip:{description, title}}=this.props.trip;
 
        return (
            
            <div className="row">
                <Link to={`/currentTrip/${id}`}>
                        <div className="col-sm-2">{id}</div>
                        <div className="col-sm-3">{title}</div>
                        <div className="col-sm-3">{comments}</div>
                        <div className="col-sm-4">{description}</div>
                </Link>
            </div>
        );
    }
}

export default trip; 