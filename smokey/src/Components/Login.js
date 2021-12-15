import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const initialLoginValues = {
  username: '',
  password: '',
};

function Login() {
  const [login, setLogin] = useState(initialLoginValues);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    e.persist();
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8001/api/auth/login', login)
      .then(function (res) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.userId);
        localStorage.setItem('username', login.username);
        navigate('/');
        console.log('Succesful login');
      });
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
          id='username'
          label='Username'
          placeholder='Enter Username'
          name='username'
          value={login.username}
          onChange={changeHandler}
        />
        <TextField
          required
          id='password'
          label='Password'
          placeholder='Password'
          name='password'
          value={login.password}
          onChange={changeHandler}
        />
        <Button onClick={submitHandler} variant='outlined'>
          Login
        </Button>
      </div>
    </Box>
  );
}

export default Login;
