import React, { Component } from 'react';

class trip extends Component {
    render() {
        const{id,comments,trip:{description, title}}=this.props.trip;
        console.log(this.props.trip)
        return (
                <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{comments}</td>
                    <td>{description}</td>
                </tr>
        );
    }
}

export default trip;