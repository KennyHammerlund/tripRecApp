import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Trip from '../../components/trip';
const tripsQuery = gql`
  {
    allTrips{
        id
        title
        description
    }
}
  
`;
export class index extends Component {
  render() {
    
    console.log("------browseTrips------");
    console.log(this.props);
    const {data:{allTrips}} = this.props;
    
    return (
      <div>
      <div>
        <div>
          <h2>Browse trips here</h2>
          </div>
      </div>
        <table>
            <tbody>
            {allTrips.map(trip => <Trip trip={trip} />)}
            </tbody>
          </table>

       </div>   
    );
  }
}


export default graphql(tripsQuery)(index);
