import { Home } from './pages/home/home.jsx';
import { Header } from './components/header/Header.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { Collections } from './pages/collections/collections.jsx';
import { Men } from './pages/collections/men/men.jsx';
import { Women } from './pages/collections/women/women.jsx';
import { Unisex } from './pages/collections/unisex/unisex.jsx';
import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path='collections' >
          <Route index element={<Collections />} />
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='unisex' element={<Unisex />} />
        </Route>
        {/* <Route path='news' element={<News />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
