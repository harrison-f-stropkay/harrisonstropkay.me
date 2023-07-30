// Navbar.tsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppBar, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SocialMedias from "./SocialMedias";

const Navbar: React.FC = () => {
  return (
    <AppBar position="sticky">
      <IconButton onClick={() => console.log("click 2")}>
        {<LightModeIcon />} {/** : <DarkModeIcon /> */}
      </IconButton>
      <SocialMedias />
    </AppBar>
  );
};

export default Navbar;
