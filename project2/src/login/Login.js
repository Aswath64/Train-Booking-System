import React, { useState } from 'react';
import './Login.css';
import { Box, TextField, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Box1() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const gotosignup = () => navigate('/Sign');
  const gotohome = () => {
    const storedUser = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUser && password === storedPassword) {
      navigate('/Home');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div id="pa">
      <Box
        height={440}
        width={300}
        my={35}
        ml={3}
        mx={70}
        sx={{
          border: '1px solid blue',
          boxShadow: '2px 2px 7px rgba(50, 50, 50, 0.7)',
          p: 2,
          backgroundColor: 'lightgray',
          borderRadius: '20px',
          opacity: '0.8',
        }}
      >
        <Typography align="center">
          <Box sx={{ borderRadius: '20px' }}>
            <h3>Login</h3>
          </Box>
          <TextField
            label="UserName"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="filled"
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Box my={2}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'darkblue',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'gray',
                },
              }}
              onClick={gotohome}
            >
              Submit
            </Button>
            <p
              sx={{
                backgroundColor: 'red',
                color: 'red',
                '&:hover': {
                  backgroundColor: 'yellow',
                },
              }}
            >
              Don't have an account?
            </p>
            <div id="si">
              <p onClick={gotosignup} id="ss">
                Sign up here
              </p>
            </div>
          </Box>
        </Typography>
      </Box>
    </div>
  );
}

export default Box1;
