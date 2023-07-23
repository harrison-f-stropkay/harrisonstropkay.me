// src/components/Projects.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';
import { css } from '@emotion/react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { modeSelector } from '../store/redux/slices/modeSlice';

const Projects: React.FC = () => {
  const mode = useSelector(modeSelector);
  const textColor = mode === 'dark' ? '#f2f2f2' : '#333';

  // Sample project data (replace with your own project data)
  const projectsData = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3' },
  ];

  return (
    <div>
      <Typography variant="h5">
        Projects
      </Typography>
      <List>
        {projectsData.map((project) => (
          <ListItem key={project.id}>
            <ListItemText
              primary={project.title}
              secondary={project.description}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Projects;
