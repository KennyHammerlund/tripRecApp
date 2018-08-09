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
        
        console.log(this.props)
        return (
                <div>
                   <div>
                   <h2>{title}</h2>
                     <button onClick={this.hide}>hide</button>
                   </div>
                     <div className={hide?"hide":"block"}> 
              <div className = "table-responsive">
                  <div className="row">
                    <div className="col-sm-2 trip-linkheader">ID</div>
                    <div className="col-sm-3">Title</div>
                    <div className="col-sm-3">Comments</div>
                    <div className="col-sm-4">Description</div>
                  </div>
                    {userTrips?userTrips.map(trip => <Trip key={trip.id} trip={trip} />):null}

                    </div>
                   </div>
                </div>


        );
    }
}

export default Maintrip;