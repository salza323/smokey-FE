import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function CreateRecipeSteps(props) {
  const { steps, setSteps } = props;
  console.log('steps in comp', steps);

  const stepChangeHandler = (e, step) => {
    e.persist();
    step[e.target.name] = e.target.value;
    console.log({ step });
  };

  const addStep = () => {
    setSteps([
      ...steps,
      {
        step_number: 0,
        step_temperature_in_fahrenheit: 0,
        step_instruction: '',
      },
    ]);
  };

  return (
    <div>
      <h2> Steps </h2>
      {steps &&
        steps.map((step, index) => {
          return (
            <div key={index}>
              <TextField
                required
                id='step_number'
                label='Step Number'
                placeholder='Enter A Sequence Number'
                name='step_number'
                onChange={(e) => stepChangeHandler(e, step)}
              />
              <TextField
                required
                id='step_temperature_in_fahrenheit'
                label='Step Temp'
                placeholder='Enter A Temp in Fahrenheit'
                name='step_temperature_in_fahrenheit'
                onChange={(e) => stepChangeHandler(e, step)}
              />
              <TextField
                required
                id='step_instruction'
                label='Step Instruction'
                placeholder='Enter Instruction'
                name='step_instruction'
                onChange={(e) => stepChangeHandler(e, step)}
              />
            </div>
          );
        })}
      <Button onClick={addStep}>+ Add Step</Button>
    </div>
  );
}

export default CreateRecipeSteps;
