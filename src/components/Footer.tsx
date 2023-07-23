import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';
import { Box, Typography, Link } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { LIGHT, modeSelector } from '../store/redux/slices/modeSlice';

const Footer: React.FC = () => {
  const mode = useSelector(modeSelector);

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mode === LIGHT ? '#f0f0f0' : '#333333',
      }}
    >
      <Typography variant="body2" color={mode === LIGHT ? 'textSecondary' : 'textPrimary'}>
        Designed and built by{' '}
        <Link
          href="https://harrisonstropkay.me/"
          target="_blank"
          rel="noopener noreferrer"
          color={mode === LIGHT ? 'primary' : 'secondary'}
        >
          Harrison Stropkay
        </Link>
      </Typography>
      <Box sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
        <Link href="https://github.com/hstropkay" target="_blank" rel="noopener noreferrer">
          <GitHub
            sx={{ fontSize: 28, color: mode === LIGHT ? 'primary' : 'secondary' }}
            aria-label="GitHub"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/harrison-stropkay/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ ml: 2 }}
        >
          <LinkedIn
            sx={{ fontSize: 28, color: mode === LIGHT ? 'primary' : 'secondary' }}
            aria-label="LinkedIn"
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
