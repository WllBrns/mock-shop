import { Home } from './pages/home/Home.jsx';
import { Header } from './components/header/Header.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { ProductPage } from './pages/collections/productPage/ProductPage.jsx';
import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path='collections' element={<ProductPage />}>
          <Route path=':collectionName' element={<ProductPage />} />
        </Route>
        {/* <Route path='news' element={<News />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
