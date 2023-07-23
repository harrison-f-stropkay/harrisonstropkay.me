// src/components/Banner.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';
import { css } from '@emotion/react';
import { LIGHT, DARK, modeSelector } from '../store/redux/slices/modeSlice';

const Banner: React.FC = () => {
  const mode = useSelector(modeSelector);

  return (
    <div>
      <h1>Welcome to My Website!</h1>
    </div>
  );
};

export default Banner;
