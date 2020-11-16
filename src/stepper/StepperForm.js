import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Address from "../address/Address";
import Payment from "../payment/Payment";
import Review from "../review/Review";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Address Details", "Payment Details", "Review"];
}

function getStepContent(stepIndex, setStep, formValues, setFormValues) {
  switch (stepIndex) {
    case 0:
      return (
        <Address
          submit={setStep}
          previousValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 1:
      return (
        <Payment
          submit={setStep}
          previousValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 2:
      return <Review values={formValues} />;
    default:
      return "Unknown stepIndex";
  }
}

const StepperForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formValues, setFormValues] = React.useState({});
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {getStepContent(activeStep, setActiveStep, setFormValues, formValues)}
    </div>
  );
};
export default StepperForm;
