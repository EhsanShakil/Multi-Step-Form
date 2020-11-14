import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Payment = ({ submit }) => {
  return (
    <Formik
      initialValues={{
        Card_Number: "",
        CVV: "",
        Expire_Date: "",
      }}
      onSubmit={(values) => submit(2)}
      validationSchema={Yup.object({
        Card_Number: Yup.number().required("Card Number is required"),
        CVV: Yup.number().required("CVV is required"),
        Expire_Date: Yup.date().required("Expire Date is required"),
      })}
    >
      {(formik) => (
        <Form>
          <div>
            <label htmlFor="Card_Number">Card Number</label>
            <Field id="Card_Number" type="number" name="Card_Number" />
            <ErrorMessage name="Card_Number" />
          </div>
          <div>
            <label htmlFor="CVV">CVV</label>
            <Field id="CVV" type="number" name="CVV" />
            <ErrorMessage name="CVV" />
          </div>
          <div>
            <label htmlFor="Expire_Date">Expire Date</label>
            <Field id="Expire_Date" type="date" name="Expire_Date" />
            <ErrorMessage name="Expire_Date" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default Payment;
