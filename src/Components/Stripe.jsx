import React,{useEffect, useState} from 'react';
import "../App.css"
import StripeCheckout from "react-stripe-checkout";
import CreditCard from "../Images/Credit card-bro.png"


function Stripe() {
    const publishableKey = "pk_test_51LfJUAEw3O5g6z40A1zVTfiRrfdFI8UQ17qFYNzd2q9UTO8ARzVCFXGSSKGcVXYAeGZQ3CQBIpPLJUzw6wwd1vQS00Q96rUppf";

    const onToken = token => {
      const body = {
        amount: 999,
        token: token
    };
    
    fetch(process.env.REACT_APP_BASE_URL + '/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(data => {
          console.log("stripe data", data)
        }
        );
    };

  return (
    <div >
      <StripeCheckout
      label="Show Payment" //Component button text
      name="Computer Hi-tech" //Modal Header
      description="Make your Payment"
      panelLabel="PAY" //Submit button in modal
      amount={999} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      image={CreditCard} //Pop-in header image
      billingAddress={false}
    />
    </div>
  );
}

export default Stripe;