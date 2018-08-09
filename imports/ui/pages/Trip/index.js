import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Trip from '../../components/trip'
// import { Switch, Route } from "react-router-dom";

const userTripsQuery = gql`
{
    userTrip(id: 5) {
      id
      date
      images {
        id
        link
      }
      comments
      trip {
        id
        description
        stops{
          id
          name
          lat
          long
        }
      }
      user {
        firstName
        lastName
        email
        profileImage {
          link
        }
      }
    }
  }
`


export class index extends Component {
  render() {
/*     const {
      match: { path }
    } = this.props;
    console.log("------USERTRIPPROPS------");
    console.log(this.props);
    const{data} = this.props;
    const {user}=data; */
    
    return (
      
      <div className="flex flex-column m-b-20">
        <div class="col-lg-8">
          <div class="card-box">
            <h1 class ="text-dark header-title m-t-0">Your Trips</h1>
          
            <p class="text-muted m-b-25 font-13">go out and complete more trips!</p>
         
            <div class = "table-responsive">
              <table class ="table mb-0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Comments</th>
                  <th>Description</th>
                </tr>
              </thead>
            <tbody>
              {user&& user.trips ? user.trips.map(trip => <Trip trip={trip} key={trip.id} />):null}
            </tbody>
          </table>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default  graphql(userTripsQuery)(index);