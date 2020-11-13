import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Payment = () => {
  return (
    <Formik
      initialValues={{
        Card_Number: "",
        CVV: "",
        Expire_Date: "",
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={Yup.object({
        Card_Number: Yup.number().required("Card Number is required"),
        CVV: Yup.number().required("CVV is required"),
        Expire_Date: Yup.date().required("Expire Date is required"),
      })}
    >
      {(formik) => (
        <Form>
          <div>
            <label htmlFor="Card_Number">First Name</label>
            <Field id="Card_Number" type="text" name="Card_Number" />
            <ErrorMessage name="Card_Number" />
          </div>
          <div>
            <label htmlFor="CVV">Last Name</label>
            <Field id="CVV" type="text" name="CVV" />
            <ErrorMessage name="CVV" />
          </div>
          <div>
            <label htmlFor="Expire_Date">Address</label>
            <Field id="Expire_Date" type="text" name="Expire_Date" />
            <ErrorMessage name="Expire_Date" />
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default Payment;
