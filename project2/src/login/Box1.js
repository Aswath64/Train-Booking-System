import React, { useContext, useState } from 'react';
import './Login.css';
import { Box, TextField, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../LoginContext'; // Import context

function Box1() {
  const navigate = useNavigate();
  const { login } = useContext(LoginContext); // Access the login function from context
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleLogin = () => {
    if (inputUsername && inputPassword) {
      login(inputUsername); // Call login function with the entered username
      navigate('/Home'); // Navigate to the home page after login
    } else {
      alert('Please enter both username and password');
    }
  };

  const gotosignup = () => navigate('/Sign');

  return (
    <div id='pa'>
      <Box
        height={400}
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
            label='UserName' 
            variant='outlined' 
            margin='normal' 
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)} // Update inputUsername state
          />
          <TextField 
            label='Password' 
            variant='filled' 
            margin='normal' 
            type='password'
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)} // Update inputPassword state
          />
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
              onClick={handleLogin} // Call handleLogin function on click
            >
              Submit
            </Button>
            <p>Don't have an account?</p>
            <div id='si'>
              <p onClick={gotosignup} id='ss'>Sign up here</p>
            </div>
          </Box>
        </Typography>
      </Box>
    </div>
  );
}

export default Box1;
