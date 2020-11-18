import React from "react";

const Review = ({ values }) => {
  return (
    <div>
      <p>First Name: {values.firstName}</p>
      <p>Last Name: {values.lastName}</p>
      <p>Address: {values.address}</p>
      <p>Zip Code: {values.zipCode}</p>
      <p>City: {values.city}</p>
      <p>Card Number: {values.Card_Number}</p>
      <p>CVV: {values.CVV}</p>
      <p>Expire Date: {values.Expire_Date}</p>
    </div>
  );
};

export default Review;
