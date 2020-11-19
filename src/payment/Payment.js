import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField } from "@material-ui/core";

const Payment = ({ submit, setFormValues, prevValues }) => {
  return (
    <Formik
      initialValues={{
        Card_Number: "",
        CVV: "",
        Expire_Date: "",
      }}
      onSubmit={(values) => {
        submit(2);
        setFormValues({ ...values, ...prevValues });
      }}
      validationSchema={Yup.object({
        Card_Number: Yup.number().required("Card Number is required"),
        CVV: Yup.number().required("CVV is required"),
        Expire_Date: Yup.date().required("Expire Date is required"),
      })}
    >
      <Form>
        <div>
          <label htmlFor="Card_Number">Card Number</label>
          <Field
            as={TextField}
            variant="outlined"
            label="Card Number"
            id="Card_Number"
            type="number"
            name="Card_Number"
          />
          <br />
          <ErrorMessage name="Card_Number" />
        </div>
        <br />
        <div>
          <label htmlFor="CVV">CVV</label>
          <Field
            as={TextField}
            variant="outlined"
            label="CVV"
            id="CVV"
            type="number"
            name="CVV"
          />
          <br />
          <ErrorMessage name="CVV" />
        </div>
        <br />
        <div>
          <label htmlFor="Expire_Date">Expire Date</label>
          <Field
            as={TextField}
            variant="outlined"
            // label="Expire Date"
            id="Expire_Date"
            type="date"
            name="Expire_Date"
          />
          <br />
          <ErrorMessage name="Expire_Date" />
        </div>
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default Payment;
