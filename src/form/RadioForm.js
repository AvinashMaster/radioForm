import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
  Button,
  Grid,
  Typography,
  Card,
  Paper,
} from '@mui/material';

function RadioForm() {
  const [formData, setFormData] = useState({
    username: '',
    contact: '',
    email: '',
    phone: '',
    password: '',
  });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if required fields are not empty
    if (
      formData.username.trim() === '' ||
      formData.contact === '' ||
      (formData.contact === 'email' && formData.email.trim() === '') ||
      (formData.contact === 'phone' && formData.phone.trim() === '')
    ) {
      alert('Please fill out all required fields.');
      return;
    }

    setData([...data, { ...formData, password: 'its hidden' }]);
    setFormData({
      username: '',
      contact: '',
      email: '',
      phone: '',
      password: '',
    });
  };

  return (
    <Paper
      elevation={3}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 'auto',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Box
        className="form-box"
        style={{
          border: '1px solid #ccc',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          borderRadius: '8px',
          width: '80%',
          maxWidth: '600px',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          style={{ textAlign: 'center', animation: 'fadeIn 3s' }}
          className="slide-in"
        >
          Registration Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth component="fieldset" margin="normal" required>
                <RadioGroup
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  row
                >
                  <FormControlLabel
                    value="email"
                    control={<Radio />}
                    label="Email"
                  />
                  <FormControlLabel
                    value="phone"
                    control={<Radio />}
                    label="Phone"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            {formData.contact === 'email' && (
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
            )}
            {formData.contact === 'phone' && (
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
            )}
          </Grid>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '1rem',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                '&:hover': {
                  backgroundColor: '#1976d2',
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
        {data.length > 0 && (
          <div style={{ marginTop: '2rem' }}>
            <Typography variant="h5" style={{ marginLeft: '35px' }}>
              Registered Users
            </Typography>

            <ul style={{ listStyleType: 'none', padding: '2rem', marginBottom: '2rem' }}>
              {data.map((item, index) => (
                <Card key={index} style={{ marginBottom: '10px', padding: '10px' }}>
                  <li key={index}>
                    <Typography>Username: {item.username}</Typography>
                    {item.contact === 'email' && (
                      <Typography>Email: {item.email}</Typography>
                    )}
                    {item.contact === 'phone' && (
                      <Typography>Phone: {item.phone}</Typography>
                    )}
                    <Typography>Password: {item.password}</Typography>
                  </li>
                </Card>
              ))}
            </ul>
          </div>
        )}
      </Box>
    </Paper>
  );
}

export default RadioForm;
