
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

import { Link as RouterLink } from 'react-router-dom';


const Login = () => {
    const navigate= useNavigate();
    const[user,setUser] = useState();

    const inputHandler = (e) =>{
        setUser({...user, [e.target.name]:e.target.value})
        console.log(user);
    };

    const addHandler =() =>{
        console.log(user)
        axios.post("http://localhost:3006/api/login",user)
        .then((res) =>{
            alert(res.data.message)
           
            navigate("/emp")
        })
        .catch((err) =>{
            console.log(err)
        })
    };




  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { width: '30ch' },
        }}
        noValidate
        autoComplete="off"
        style={{
          padding: '40px', // increased padding
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
          textAlign: 'center', // aligned to the center
        }}
      >
        <Typography variant='h3' style={{ color: 'brown', marginBottom: '20px' }}>Employee Dashboard</Typography>
        <div style={{ marginBottom: '10px' }}> {/* centering text fields */}
          <TextField
            id="outlined-required"
            label="Email"
            variant="outlined"
            name="email"
            onChange={inputHandler}
            
          />
        </div>
        <div style={{ marginBottom: '10px' }}> {/* centering text fields */}
          <TextField
            id="outlined-disabled"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            onChange={inputHandler}
          />
        </div>
        <div> {/* centering button */}


        <Link to="/emp">
            <Button variant='contained' color='success'>Login</Button>
          </Link>

            {/* <Button variant='contained' color='success' onClick={addHandler}>Login</Button> */}
        <br />
         <Link component={RouterLink} to="/sign" underline="always">
          <h5>Don't have an Account?</h5> Sign Up
        </Link>

        </div>
      </Box>
    </div>
  );
};

export default Login;








