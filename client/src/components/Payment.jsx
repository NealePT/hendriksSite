import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeBtn = () => {
  const publishableKey = "pk_test_51KbCZxE3MhtOXdAWTWUh8NMx6O4rdukMaR92sYrwae7fGsLOvxtOsudGdBT5NuhAZsbpcZMHgsSwQTrHR88E1SWy009QGPNDfA";

  const onToken = token => {
    const body = {
      amount: 10000,
      token: token
  };
  axios
      .post("http://localhost:8080/payment", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };
  return (
    <StripeCheckout
      label="Checkout"
      name="~Name when decided on~"
      description="Complete your payment now."
      panelLabel=""
      amount={10000}
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    />
  );
};
export default StripeBtn;