// Navbar.tsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LIGHT, changeMode, modeSelector } from "../store/redux/slices/modeSlice";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Navbar: React.FC = () => {
  const mode = useSelector(modeSelector)
  const dispatch = useDispatch();

  const themeIcon = mode === LIGHT ? <Brightness4Icon /> : <Brightness7Icon />;

  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Typography variant="h6">My App</Typography>
        <div style={{ flex: 1 }} />
        <IconButton color="inherit" onClick={() => dispatch(changeMode())}>
          {themeIcon}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
