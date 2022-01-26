import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import UserApi from '../../api/UserApi';

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

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await UserApi.loginUser(login);
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('username', login.username);
    navigate('/');
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
      <div>
        <h1>Login</h1>
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
        <Button
          onClick={submitHandler}
          variant='outlined'
          sx={{ marginTop: '50px' }}
        >
          Login
        </Button>
      </div>
    </Box>
  );
}

export default Login;
