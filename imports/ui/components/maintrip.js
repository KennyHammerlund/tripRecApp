import React, { Component } from 'react';
import Trip from "./trip"

class Maintrip extends Component {
    constructor(props)
    {super(props)
    this.state={
        hide:true
    }
    this.hide=this.hide.bind(this);
    };
    hide(e){
        e.preventDefault();
        this.setState({
            hide:!this.state.hide

        });

    }


    render() {
        const{userTrips,title}=this.props.trip;
        const{hide}=this.state;
     
        return (
                <div>
                   <div>
                   <h2>{title}</h2>
                     <button onClick={this.hide}>hide</button>
                   </div>
                     <div className={hide?"hide":"block"}> 
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
                    {userTrips?userTrips.map(trip => <Trip key={trip.id} trip={trip} />):null}
                    </tbody>
                    </table>
                    </div>
                   </div>
                </div>


        );
    }
}

export default Maintrip;