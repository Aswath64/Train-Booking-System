import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Checkbox, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './sign.css';

function Box2() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    navigate('/');
  };

  return (
    <div id="ba">
      <Box
        height={500}
        width={344}
        ml={75}
        mx={70}
        sx={{
          border: '1px solid darkblue',
          boxShadow: '5px 5px 2px rgba(50, 50, 50, 0.9)', 
          p: 2,
          backgroundColor: 'lightgrey',
          borderRadius: '20px',
          opacity: '0.8',
        }}
      >
        <Typography align="center">
          <Box>
            <h2>Sign Up</h2>
          </Box>
          <TextField
            label="UserName"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            margin="normal"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Box my={1} display="flex" justifyContent="space-between" alignItems="center" flexDirection={"column"}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    '&.Mui-checked': {
                      color: 'darkblue', 
                    },
                  }}
                />
              }
              label="Remember me"
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'darkblue',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'gray',
                },
              }}
              onClick={handleSignup}
            >
              Submit
            </Button>
          </Box>
        </Typography>
      </Box>
    </div>
  );
}

export default Box2;
