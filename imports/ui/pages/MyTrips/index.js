import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
// import { Switch, Route } from "react-router-dom";
import Trip from '../../components/trip';

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
    const{user} = this.props.data;

    return (

      <div>
      <div>
        
        <h2>This is the my trips page</h2>
        </div>
      
        <table>
          <tbody>
            <tr><td>My First Trip: </td><td>{this.props.trips}</td></tr>
            {user && user.trips ? user.trips.map(trip => <Trip trip={trip} key={trip.id} />) : null}
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