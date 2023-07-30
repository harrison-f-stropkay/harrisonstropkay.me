import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box>
      <Typography variant="body2">
        Designed and built by{" "}
        <Link href="https://harrisonstropkay.me/" target="_blank" rel="noopener noreferrer">
          Harrison Stropkay
        </Link>
      </Typography>
      <Box sx={{ ml: 2, display: "flex", alignItems: "center" }}>
        <Link href="https://github.com/hstropkay" target="_blank" rel="noopener noreferrer">
          <GitHub sx={{ fontSize: 28 }} aria-label="GitHub" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/harrison-stropkay/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ ml: 2 }}
        >
          <LinkedIn sx={{ fontSize: 28 }} aria-label="LinkedIn" />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
