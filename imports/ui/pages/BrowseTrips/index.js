import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Maintrip from '../../components/maintrip';
const tripsQuery = gql`
  {
    allTrips {
      id
      title
      date
      description
      stops {
        id
        name
      }
      userTrips {
        id
        comments
        trip {
          title
          description
        }
      }
    }
  }
  
`
export class index extends Component {
  render() {
    
    const {data:{allTrips}} = this.props;
    
    return (
      <div>
      <div>
        <div >
          <h1>Browse for trips!</h1>
          </div>
      </div>
      
            {allTrips?allTrips.map(trip => <Maintrip trip={trip} />):null}
          

       </div>   
    );
  }
}


export default graphql(tripsQuery)(index);
