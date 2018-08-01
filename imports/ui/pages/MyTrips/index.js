import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
// import { Switch, Route } from "react-router-dom";

const tripsQuery = gql`
  {
    user(id: 5) {
      firstName
      lastName
      trips{
        id
        title
        comments
        description
      }
    }
  }
`;

export class index extends Component {
  render() {
    const {
      match: { path }
    } = this.props;
    console.log("------MYTRIPROPS------");
    console.log(this.props);
    const{data:{allTrips}} = this.props;

    return (

      <div>
      <div>
        
        <h2>This is the my trips page</h2>
        </div>
      
        <table>
          <tbody>
            <tr><td>My First Trip: </td><td>{this.props.trips}</td></tr>
            {allTrips.map(trip => <Trip trip={trip} />)}
          </tbody>
        </table>


      
        {/* <Switch>
          Switches between login/logout and forgot passoword components
          <Route path={path} Component={test} />
        </Switch> */}
      
      </div>
    );
  }
}

export default  graphql(tripsQuery)(index);