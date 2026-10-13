import Box from '@mui/material/Box';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

// The portfolio is a single page. Any other path is a mistyped or outdated link.
const isHomePath = (path: string) => path === '/' || path === '/index.html';

function App() {
  if (!isHomePath(window.location.pathname)) return <NotFound />;

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
