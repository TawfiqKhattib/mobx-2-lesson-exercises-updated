import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import Reservation  from './Reservation';

class Restaurant extends Component{
    constructor(){
        super();
        this.state={update:false};
        this.addRes = this.addRes.bind(this);
    }

    addRes(){
        let name = this.props.GeneralStore.name;
        let numPeople = this.props.GeneralStore.numPeople;
        this.props.RestaurantStore.addRes(name,numPeople);
    }
    render () {
        return (
            <div>
                <span>You have {this.props.RestaurantStore.openTables} open tables</span>
                {/* Add in # of people in restaurant */}
                <div>You have {this.props.RestaurantStore.restPopulation} people in restaurant</div>
                {/* Add in # of completed tables with id "completedTables*/}
                <div>You have {this.props.RestaurantStore.completedTables} completed tables</div>
                <ResInput/>
                <button id="addRes" onClick={this.addRes}>Add Reservation</button>
                {/* Make the Add Reservation button work */}
                <div className = "reservations">
                {/* Map reservation data to Reservation components here */}
                {this.props.RestaurantStore.reservations.map((reservation,ind) => {
                    return(<Reservation key={`t${ind}`} res={reservation} />);
                })}
                </div>
            </div>
        )
    }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant))