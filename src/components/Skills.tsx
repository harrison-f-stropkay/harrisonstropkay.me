// src/components/Skills.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';
import { css } from '@emotion/react';
import { Paper, Typography, Chip } from '@mui/material';
import { DARK, modeSelector } from '../store/redux/slices/modeSlice';

const Skills: React.FC = () => {
  const mode = useSelector(modeSelector);
  const backgroundColor = mode === DARK ? '#333' : '#f2f2f2';
  const textColor = mode === DARK ? '#f2f2f2' : '#333';

  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Material-UI',
    'Emotion',
    'Redux',
    'Node.js',
    'Express',
    'MongoDB',
    'Firebase',
  ];

  return (
    <Paper>
      <Typography variant="h5">Skills</Typography>
      <div>
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            color={mode === DARK ? 'primary' : 'default'}
          />
        ))}
      </div>
    </Paper>
  );
};

export default Skills;
