import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Trip from '../../components/trip'
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
      }
    }
  }
`


export class index extends Component {
  render() {
    const {
      match: { path }
    } = this.props;
    console.log("------MYTRIPROPS------");
    console.log(this.props);
    const{data} = this.props;
    const {user}=data;
    
    return (

      <div>
      <div>
        
        <h2>This is the my trips page</h2>
        </div>
      
        <table>
          <tbody>
            {user&& user.trips ? user.trips.map(trip => <Trip trip={trip} />):null}
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