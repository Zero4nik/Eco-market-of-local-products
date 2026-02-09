import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { CartPage } from './pages/CartPage';
import { OrderPage } from './pages/OrderPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />

        <Route path="/Home" element={<Layout><HomePage /></Layout>} />
        <Route path="/CatalogPage" element={<Layout><CatalogPage /></Layout>} />
        <Route path="/About" element={<Layout><CartPage /></Layout>} />
        <Route path="/contacts" element={<Layout><OrderPage /></Layout>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App
