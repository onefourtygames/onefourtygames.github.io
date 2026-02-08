import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import './i18n';

import OurGames from './pages/OurGames';
import Services from './pages/Services';
import BlockCrash from './pages/games/BlockCrash';
import BlogIndex from './pages/blog/BlogIndex';
import BlogPost from './pages/blog/BlogPost';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="games" element={<OurGames />} />
        <Route path="games/block-crash" element={<BlockCrash />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<BlogIndex />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
      </Route>
    </Routes>
  );
}

export default App;
