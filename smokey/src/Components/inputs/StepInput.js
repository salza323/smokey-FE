import React from 'react';
import TextField from '@mui/material/TextField';

function StepInput(props) {
  const { step } = props;

  const stepChangeHandler = (e, step) => {
    e.persist();
    step[e.target.name] = e.target.value;
  };

  return (
    <div key={props.index}>
      <TextField
        required
        id='step_number'
        label='Step Number'
        placeholder='Enter A Sequence Number'
        name='step_number'
        defaultValue={step.step_number}
        onChange={(e) => stepChangeHandler(e, step)}
      />
      <TextField
        required
        id='step_temperature_in_fahrenheit'
        label='Step Temp'
        placeholder='Enter A Temp in Fahrenheit'
        name='step_temperature_in_fahrenheit'
        defaultValue={step.step_temperature_in_fahrenheit}
        onChange={(e) => stepChangeHandler(e, step)}
      />
      <TextField
        required
        id='step_instruction'
        label='Step Instruction'
        placeholder='Enter Instruction'
        name='step_instruction'
        defaultValue={step.step_instruction}
        onChange={(e) => stepChangeHandler(e, step)}
      />
    </div>
  );
}

export default StepInput;
