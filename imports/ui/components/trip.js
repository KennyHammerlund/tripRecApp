import React, { Component } from 'react';

class trip extends Component {
    render() {
        const{id,title,comments,description}=this.props.trip;
        console.log(this.props);
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