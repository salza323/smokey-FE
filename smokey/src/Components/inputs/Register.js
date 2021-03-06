import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import UserApi from '../../api/UserApi';

const initalRegisterValues = {
  email: '',
  username: '',
  password: '',
  fav_cooker: '',
  city_and_state_location: '',
};

function Register() {
  const [register, setRegister] = useState(initalRegisterValues);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    e.persist();
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await UserApi.registerNewUser(register);
    console.log('Created User: ', data);
    navigate('/login');
  };

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '25ch',
          display: 'flex',
          flexFlow: 'column no-wrap',
          margin: 'auto',
          marginTop: '50px',
        },
        border: '2px solid black',
      }}
      noValidate
      autoComplete='off'
    >
      <h1>Register</h1>
      <div>
        <TextField
          required
          id='email'
          label='Email'
          placeholder='Enter Email'
          name='email'
          value={register.email}
          onChange={changeHandler}
        />
        <TextField
          required
          id='username'
          label='Username'
          placeholder='Enter Username'
          name='username'
          value={register.username}
          onChange={changeHandler}
        />
        <TextField
          required
          id='password'
          label='Password'
          placeholder='Password'
          name='password'
          value={register.password}
          onChange={changeHandler}
        />
        <TextField
          required
          id='favCoooker'
          label='Favorite Cooker'
          placeholder='Favorite Cooker'
          name='fav_cooker'
          value={register.fav_cooker}
          onChange={changeHandler}
        />
        <TextField
          required
          id='cityAndState'
          label='City And State Location'
          placeholder='City And State Location'
          name='city_and_state_location'
          value={register.city_and_state_location}
          onChange={changeHandler}
        />
        <Button
          onClick={submitHandler}
          variant='outlined'
          sx={{ marginTop: '50px' }}
        >
          Register
        </Button>
      </div>
    </Box>
  );
}

export default Register;
