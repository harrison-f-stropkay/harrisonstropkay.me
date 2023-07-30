import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from "@mui/material";
import { css, jsx } from "@emotion/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
`;

const titleStyles = css`
  font-size: 1.5rem;
`;

const iconButtonStyles = css`
  color: #000;
`;
const Header: React.FC = () => {
  const themeIcon = <Brightness7Icon />; // <Brightness4Icon />;

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6">My Portfolio</Typography>
        <Tooltip title="Toggle Dark theme">
          <IconButton onClick={() => console.log("clicked")} />
        </Tooltip>
        {themeIcon}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
