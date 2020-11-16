import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Address = ({ submit, setFormValues }) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        address: "",
        zipCode: "",
        city: "",
      }}
      onSubmit={(values) => {
        submit(1);
        console.log(values);
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        address: Yup.string().required("Address is required"),
        zipCode: Yup.number().required("Zip Code is required"),
        city: Yup.string().required("City is required"),
      })}
    >
      {(formik) => (
        <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" type="text" name="firstName" />
            <ErrorMessage name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" type="text" name="lastName" />
            <ErrorMessage name="lastName" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <Field id="address" type="text" name="address" />
            <ErrorMessage name="address" />
          </div>
          <div>
            <label htmlFor="zipCode">Zip Code</label>
            <Field id="zipCode" type="text" name="zipCode" />
            <ErrorMessage name="zipCode" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <Field id="city" type="text" name="city" />
            <ErrorMessage name="city" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default Address;
