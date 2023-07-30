import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

const internshipsData = [
  { id: 1, company: "Company A" },
  { id: 2, company: "Company B" },
  { id: 3, company: "Company C" },
];

const Experience: React.FC = () => {
  return (
    <div>
      <h2>Internships</h2>
      <List>
        {internshipsData.map((internship) => (
          <ListItem key={internship.id}>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={`Internship ${internship.id} - ${internship.company}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Experience;
