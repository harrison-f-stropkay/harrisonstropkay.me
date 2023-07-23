// src/components/Header.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/redux/store';
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import { css, jsx } from '@emotion/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { lightTheme, darkTheme } from '../theme';
import { changeMode, Mode, LIGHT, DARK, modeSelector } from '../store/redux/slices/modeSlice';

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
  const mode = useSelector(modeSelector);
  const themeIcon = mode === DARK ? <Brightness7Icon /> : <Brightness4Icon />;
  const dispatch = useDispatch();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6">
          My Portfolio
        </Typography>
        <Tooltip title="Toggle Dark Mode">
          <IconButton onClick={() => dispatch(changeMode())}>
            {themeIcon}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
