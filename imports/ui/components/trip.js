import React, { Component } from 'react';

class trip extends Component {


    render() {
        const {id,description,title}= this.props.trip;
        console.log(this.props.trip);
        console.log(this.props);
        return (
            <tr>
                <td>{id}</td>
                <td>{description}</td>
                <td>{title}</td>
            </tr>  
        );
    }
}

export default trip;