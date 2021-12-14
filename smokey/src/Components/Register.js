import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const initalRegisterValues = {
  email: '',
  username: '',
  password: '',
  fav_cooker: '',
  city_and_state_location: '',
};

function Register(props) {
  const [register, setRegister] = useState(initalRegisterValues);
  const [disabled, setDiasabled] = useState(true);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    e.persist();
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
    console.log(register);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(register);
    axios
      .post('http://localhost:8001/api/auth/register', register)
      .then(function (res) {
        localStorage.setItem('token', res.data.token);
        navigate('/');
        console.log('Succesful login');
      })
      .catch((err) => console.log(err));
    setRegister(initalRegisterValues);
  };

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
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
        <Button onClick={submitHandler} variant='outlined'>
          Register
        </Button>
      </div>
    </Box>
  );
}

export default Register;
