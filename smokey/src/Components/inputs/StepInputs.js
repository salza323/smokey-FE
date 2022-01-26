import React from 'react';
import StepInput from './StepInput';
import Button from '@mui/material/Button';

function StepInputs(props) {
  return (
    <React.Fragment>
      <h2>Steps</h2>
      {props.steps?.map?.((step, index) => {
        return <StepInput step={step} key={index} />;
      })}
      <Button onClick={props.addStep}>+ Add Step</Button>
    </React.Fragment>
  );
}

export default StepInputs;
