import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import { Provider } from "react-redux";
import Profile from './pages/Profile'
import ProductInfo from './pages/ProductInfo'
import SellerProductPage from './pages/SellerProduct'
import BuyerProductPage from './pages/BuyerProduct'
import ListSell from './pages/ListSell';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/seller/sell' element={<ProductInfo />} />
          <Route path='/seller/product/:id' element={<SellerProductPage />} />
          <Route path='/buyer/product/:id' element={<BuyerProductPage />} />
          <Route path="/side" element={<ListSell />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
