import Box from '@mui/material/Box';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </Box>
  );
}

export default App;
