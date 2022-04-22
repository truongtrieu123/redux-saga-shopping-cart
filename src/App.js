import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductsPage, CartPage } from 'pages';
import { Navbar } from 'layouts';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<ProductsPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}
