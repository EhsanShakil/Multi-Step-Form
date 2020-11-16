import React from "react";

const Review = ({ values }) => {
  return (
    <div>
      <p>First Name: {values.firstName}</p>
      <p>Last Name: {values.lastName}</p>
      <p>Address: {values.address}</p>
      <p>Zip Code: {values.zipCode}</p>
      <p>City: {values.city}</p>
    </div>
  );
};

export default Review;
