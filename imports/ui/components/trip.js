import React, { Component } from 'react';
import {Link} from "react-router-dom";

class trip extends Component {
    render() {
        const{id,comments,trip:{description, title}}=this.props.trip;
 
        return (
            <Link to={`/currentTrip/${id}`}>
                <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{comments}</td>
                    <td>{description}</td>
                </tr>
            </Link>
        );
    }
}

export default trip;