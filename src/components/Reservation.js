import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import "./style/Reservation.css";


class Reservation extends Component {
    constructor(){
        super();
        this.state={id:""};
        this.completeRes = this.completeRes.bind(this);
        this.seatRes = this.seatRes.bind(this);
    }

    seatRes(){
        this.props.RestaurantStore.seatRes(this.props.res.id)
        this.setState({id:this.props.res.id})
    }

    completeRes(){
        this.props.RestaurantStore.completeRes(this.props.res.id)
        this.setState({id:this.props.res.id})
    }
    render() {
        let reservation = this.props.res
        return (
            <div className="conatainer">
                <div>{reservation.name} recive for {reservation.numPeople} people</div>
                <div>
                    <span className={reservation.completed?"conditional":null}>
                        {reservation.completed?"completed":"notCompleted"} </span> 

                    <span className={reservation.seated?"conditional":null}>
                        {reservation.seated?"seated":"not seated"}</span>
                </div>
                {reservation.completed?null:<button onClick={this.completeRes}>
                    Complete reservation</button>}
                {reservation.seated?null:<button onClick={this.seatRes}>
                    set reservation</button>}
            </div>
            //render the reservation data here
            //make sure you store the ID somewhere so you can find the reservation
            //use the class "conditional" to conditionally render completed reservations
            //You should hav ea complete reservation button to complete the reservation
        )
    }
}

//inject your store here
export default inject("RestaurantStore")(observer(Reservation))