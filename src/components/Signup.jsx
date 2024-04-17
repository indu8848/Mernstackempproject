
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
// import { Link as RouterLink} from 'react-router-dom';
import {   Link, useNavigate } from 'react-router-dom';

import { Link as RouterLink } from 'react-router-dom';

import axios from 'axios'; // Import axios for making HTTP requests


const Signup = () => {
    const navigate= useNavigate();
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to your backend API to save the form data
      const response = await axios.post('http://localhost:3006/api', formData);
      console.log('Form submitted:', response.data);
      alert(response.data.message)
     navigate("/emp")
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '400px',
        margin: '20px auto',
        padding: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="phoneNumber"
          label="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px', width: '100%' }}>
          Submit
        </Button>
      </form>
      <Typography variant="body1" style={{ marginTop: '16px' }}>
        Already have an account?{' '}
        <Link component={RouterLink} to="/login" underline="always">
          Login
        </Link>
      </Typography>
    </Box>
  );
};

export default Signup;


































