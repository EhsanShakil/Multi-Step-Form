import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField } from "@material-ui/core";

const Address = ({ submit, setFormValues, prevValues }) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        address: "",
        zipCode: "",
        city: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        address: Yup.string().required("Address is required"),
        zipCode: Yup.number().required("Zip Code is required"),
        city: Yup.string().required("City is required"),
      })}
      onSubmit={(values) => {
        submit(1);
        setFormValues({ ...values, ...prevValues });
      }}
    >
      <Form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field
            as={TextField}
            variant="outlined"
            label="First Name"
            id="firstName"
            type="text"
            name="firstName"
          />
          <br />
          <ErrorMessage name="firstName" />
        </div>
        <br />
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field
            as={TextField}
            variant="outlined"
            label="Last Name"
            id="lastName"
            type="text"
            name="lastName"
          />
          <br />
          <ErrorMessage name="lastName" />
        </div>
        <br />
        <div>
          <label htmlFor="address">Address</label>
          <Field
            as={TextField}
            variant="outlined"
            label="Address"
            id="address"
            type="text"
            name="address"
          />
          <br />
          <ErrorMessage name="address" />
        </div>
        <br />
        <div>
          <label htmlFor="zipCode">Zip Code</label>
          <Field
            as={TextField}
            variant="outlined"
            label="Zip Code"
            id="zipCode"
            type="text"
            name="zipCode"
          />
          <br />
          <ErrorMessage name="zipCode" />
        </div>
        <br />
        <div>
          <label htmlFor="city">City</label>
          <Field
            as={TextField}
            variant="outlined"
            label="City"
            id="city"
            type="text"
            name="city"
          />
          <br />
          <ErrorMessage name="city" />
        </div>
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default Address;
