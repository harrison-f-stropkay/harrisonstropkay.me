import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

const Projects: React.FC = () => {
  const projectsData = [
    { id: 1, title: "Project 1", description: "Description of Project 1" },
    { id: 2, title: "Project 2", description: "Description of Project 2" },
    { id: 3, title: "Project 3", description: "Description of Project 3" },
  ];

  return (
    <>
      <Typography variant="h5">Projects</Typography>
      <List>
        {projectsData.map((project) => (
          <ListItem key={project.id}>
            <ListItemText primary={project.title} secondary={project.description} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Projects;
