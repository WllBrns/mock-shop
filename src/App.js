import { Home } from './pages/home/home.jsx';
import { Header } from './components/header/Header.jsx';
import { ProductPage } from './pages/collections/productPage/productPage.jsx';
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
    </BrowserRouter>
  );
}

export default App;
