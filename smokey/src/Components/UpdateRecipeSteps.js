import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function CreateRecipeIngredients(props) {
  const { updatedSteps, setUpdatedSteps } = props;

  const stepChangeHandler = (e, step) => {
    e.persist();
    step[e.target.name] = e.target.value;
  };

  const addStep = () => {
    setUpdatedSteps([
      ...updatedSteps,
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
      {updatedSteps &&
        updatedSteps.map((step, index) => {
          return (
            <div key={index}>
              <TextField
                required
                id='step_number'
                label='Step Number'
                defaultValue={step.step_number}
                name='step_number'
                onChange={(e) => stepChangeHandler(e, step)}
              />
              <TextField
                required
                id='step_temperature_in_fahrenheit'
                label='Step Temp'
                defaultValue={step.step_temperature_in_fahrenheit}
                name='step_temperature_in_fahrenheit'
                onChange={(e) => stepChangeHandler(e, step)}
              />
              <TextField
                required
                id='step_instruction'
                label='Step Instruction'
                defaultValue={step.step_instruction}
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

export default CreateRecipeIngredients;
