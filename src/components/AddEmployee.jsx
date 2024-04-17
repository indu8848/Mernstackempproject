

import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddEmployee = () => {
  const [post, setPost] = useState({
    name: '',
    jobTitle: '',
    email: '',
    phoneNumber: '',
    address: ''
  });
    
  const inputHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

  const addData = () => {
    console.log(post);
    axios.post("http://localhost:3006/api/add", post)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (



    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '400px',
        margin: '20px auto', // Adjusted margin to prevent touching the nav bar
        padding: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Add Employee Details
      </Typography>
      
      <TextField
        name="name"
        label="Name"
        value={post.name}
        onChange={inputHandler}
        fullWidth
        margin="normal" // Added margin between text fields
      />
      

      <TextField
        name="jobTitle"
        label="Job Title"
        
        onChange={inputHandler}
        fullWidth
        margin="normal" // Added margin between text fields
      />
      <TextField
        name="email"
        label="Email"
        
        onChange={inputHandler}
        fullWidth
        margin="normal" // Added margin between text fields
      />
      <TextField
        name="phoneNumber"
        label="Phone Number"
       
        onChange={inputHandler}
        fullWidth
        margin="normal" // Added margin between text fields
      />
      <TextField
        name="address"
        label="Address"
        onChange={inputHandler}
        fullWidth
        margin="normal" // Added margin between text fields
      />
      <Button type="submit" variant="contained" color="primary" onClick={addData} style={{ marginTop: '16px', width: '100%' }}>
        Add Employee
      </Button>
      <Button component={Link} to="/emp" variant="contained" color="success" style={{ marginTop: '8px', width: '100%' }}>
        Back to Home 
      </Button>

    </Box>
  );
};

export default AddEmployee;

