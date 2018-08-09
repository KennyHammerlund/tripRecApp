import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Trip from '../../components/trip'
import Token from "../../components/token";
import PageTitle from "../../components/pageTitle";


const Query = gql
`
{
  user(id: 6) {
    id
    firstName
    lastName
    trips {
      id
      date
      comments
      trip {
        id
        date
        title
        description
        createdBy {
          firstName
        }
      }
    }
  }
}
`

const token =Token.get();
export class index extends Component {
  render() {
    const {
      match: { path }
    } = this.props;
    console.log("------MYTRIPROPS------");
    console.log(this.props);

    const{viewer, data} = this.props;
    const {user}=data;
/*     const {
      data: { viewer }
    } = this.props; */
    
    return (
      <div>
      <PageTitle>
      My Trips Page 
      {viewer && (
        <span className="pull-right text-muted">
          {` Welcome ${viewer.firstName} ${viewer.lastName}!`}
        </span>
      )}
      </PageTitle>

      <div className="flex flex-column m-b-20">
        <div className="col-lg-8">
          <div className="card-box">
            <h1 className ="text-dark header-title m-t-0">Your Trips</h1>
          
            <p className="text-muted m-b-25 font-13">go out and complete more trips!</p>
         
            <div className = "table-responsive">
              <table className ="table mb-0">
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
      </div>
    );
  }
}

export default graphql(Query, {
  options: () => ({
    variables: {
      token
    }
  })
})(index);