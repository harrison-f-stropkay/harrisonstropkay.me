import React from "react";
import { Paper, Typography, Chip } from "@mui/material";

const Skills: React.FC = () => {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Material-UI",
    "Emotion",
    "Redux",
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
  ];

  return (
    <Paper>
      <Typography variant="h5">Skills</Typography>
      <div>
        {skills.map((skill) => (
          <Chip key={skill} label={skill} />
        ))}
      </div>
    </Paper>
  );
};

export default Skills;
