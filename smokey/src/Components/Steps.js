import React from 'react';

function Steps(singleStep) {
  return (
    <div>
      <p>Step Number {singleStep.singleStep.step_number}</p>
      <p>
        Temp in Fahrenheit{' '}
        {singleStep.singleStep.step_temperature_in_fahrenheit}
      </p>
      <p>Instruction: {singleStep.singleStep.step_instruction}</p>
    </div>
  );
}

export default Steps;
