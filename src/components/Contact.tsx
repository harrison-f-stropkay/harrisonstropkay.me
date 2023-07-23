// src/components/Contact.tsx

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';
import { css } from '@emotion/react';
import { Paper, Typography, TextField, Button } from '@mui/material';
import { LIGHT, DARK, modeSelector } from '../store/redux/slices/modeSlice';

const Contact: React.FC = () => {
  const mode = useSelector(modeSelector);
  const backgroundColor = mode === DARK ? '#333' : '#f2f2f2';
  const textColor = mode === DARK ? '#f2f2f2' : '#333';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Paper>
      <Typography variant="h5">Contact Me</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Contact;
