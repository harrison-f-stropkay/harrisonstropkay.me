// src/components/Experience.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';
import { css } from '@emotion/react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { DARK, modeSelector } from '../store/redux/slices/modeSlice';

const internshipsData = [
  { id: 1, company: 'Company A' },
  { id: 2, company: 'Company B' },
  { id: 3, company: 'Company C' },
  // Add more internship objects as needed
];

const Experience: React.FC = () => {
  const mode = useSelector(modeSelector);
  const backgroundColor = mode === DARK ? '#333' : '#f2f2f2';
  const textColor = mode === DARK ? '#f2f2f2' : '#333';

  return (
    <div>
      <h2>Internships</h2>
      <List>
        {internshipsData.map((internship) => (
          <ListItem key={internship.id}>
            <ListItemIcon>
              <WorkIcon/>
            </ListItemIcon>
            <ListItemText primary={`Internship ${internship.id} - ${internship.company}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Experience;
