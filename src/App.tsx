import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
import { LIGHT, modeSelector } from './store/redux/slices/modeSlice';
import { darkTheme, lightTheme } from './theme';

const App: React.FC = () => {
  const mode = useSelector(modeSelector);
  return (
    <ThemeProvider theme={mode === LIGHT ? lightTheme : darkTheme}>
      <CssBaseline />
      <Navbar />
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
