// src/components/About.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';
import { Box, Typography } from '@mui/material';
import { css, jsx } from '@emotion/react';
import { modeSelector } from '../store/redux/slices/modeSlice';

const About: React.FC = () => {
  const mode = useSelector(modeSelector);
  const backgroundColor = mode === 'dark' ? '#333' : '#f0f0f0';

  return (
    <Box>
      <Typography variant="h4">About Me</Typography>
      <Typography variant="body1">
        Hi, I'm John Doe! I'm a software engineer with a passion for building web applications. I
        enjoy using technologies like React, TypeScript, and Node.js to create scalable and
        user-friendly software. When I'm not coding, you can find me exploring the great outdoors or
        reading a good book.
      </Typography>
    </Box>
  );
};

export default About;
