// SocialMedias.tsx
import React from "react";
import { Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialMedias: React.FC = () => {
  return (
    <Box className="social-medias">
      <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
        <IconButton color="inherit" aria-label="GitHub">
          <GitHubIcon />
        </IconButton>
      </a>
      <a href="https://www.linkedin.com/in/johndoe/" target="_blank" rel="noopener noreferrer">
        <IconButton color="inherit" aria-label="LinkedIn">
          <LinkedInIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </a>
      <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
        <IconButton color="inherit" aria-label="Twitter">
          <TwitterIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </a>
    </Box>
  );
};

export default SocialMedias;
