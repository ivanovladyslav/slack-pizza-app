import React, { Component } from 'react';
import TogglePropertyButton from './toggle-property-button';

export default class Offer extends Component {
    render() {
        const { pizza_name, pizza_size, address, 
                confirmed, declined, delivered, 
                confirmOffer, declineOffer, deliverOffer} = this.props;

        let confirmButton = 
            <TogglePropertyButton 
            property={confirmed} 
            togglePropertyFunction={confirmOffer} 
            buttonText={"Confirm offer"}
            toggleMessage={"Confirmed"}
            />

        let declineButton = 
            <TogglePropertyButton 
                property={declined} 
                togglePropertyFunction={declineOffer} 
                buttonText={"Decline offer"}
                toggleMessage={"Declined"}
                />

        let deliverButton = 
            <TogglePropertyButton 
                property={delivered} 
                togglePropertyFunction={deliverOffer} 
                buttonText={"Deliver offer"}
                toggleMessage={"Delivered"}
                />

        if(delivered) {
            declineButton = null;
        } else if(declined) {
            deliverButton = null;
        }

        return(
            <tr>
                <th>{pizza_name}</th>
                <th>{pizza_size}</th>
                <th>{address}</th>
                <th style={{width: "15%"}}>{confirmButton}</th>
                <th style={{width: "15%"}}>{deliverButton}</th>
                <th style={{width: "15%"}}>{declineButton}</th>
            </tr>
        )
    }
}