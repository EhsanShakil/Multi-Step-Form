import React from "react";

const Review = ({ values }) => {
  console.log(values.firstName);
  return (
    <div>
      <p>First Name: {values.firstName}</p>
      <p>Last Name: {values.lastName}</p>
      <p>Address: {values.address}</p>
      <p>Zip Code: {values.zipCode}</p>
      <p>City: {values.city}</p>
      <p>{values.Card_Number}</p>
      <p>{values.CVV}</p>
      <p>{values.Expire_Date}</p>
    </div>
  );
};

export default Review;
