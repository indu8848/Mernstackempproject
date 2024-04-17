

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid, Box } from '@mui/material';
import axios from 'axios';

const EmployeeCard = ({ employee, handleUpdate, handleDelete }) => {
  const { name, jobTitle, email, phoneNumber, address } = employee;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 250 }}>
        <img src="/images/img2.png" alt="Employee" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Job Title: {jobTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Email: {email}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Phone Number: {phoneNumber}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Address: {address}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => handleUpdate(employee)}>
            Update
          </Button>
          <Button size="small" color="secondary" onClick={() => handleDelete(employee)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const EmployeeList = ({ employees, handleUpdate, handleDelete }) => {
  return (
    <Grid container spacing={3}>
      {employees.map((employee, index) => (
        <EmployeeCard key={index} employee={employee} handleUpdate={handleUpdate} handleDelete={handleDelete} />
      ))}
    </Grid>
  );
};

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3006/api/view');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (employeeToDelete) => {
    try {
      await axios.delete(`http://localhost:3006/api/delete/${employeeToDelete.name}`);
      setEmployees(prevEmployees => prevEmployees.filter(employee => employee.name !== employeeToDelete.name));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleUpdate = (employee) => {
    // Navigate to AddEmployee component with the employee data
    // You can perform navigation here using window.location or any other navigation method you prefer
    console.log('Navigate to AddEmployee with employee data:', employee);
  };

  return (
    <Box mt={4} mx={2}>
      <EmployeeList employees={employees} handleUpdate={handleUpdate} handleDelete={handleDelete} />
    </Box>
  );
};

export default Employees;









