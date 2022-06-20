import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
// import { Provider } from "react-redux";
import ProductInfo from './pages/ProductInfo'
import Profile from './pages/Profile'
import SellerProductPage from './pages/SellerProduct'
import BuyerProductPage from './pages/BuyerProduct'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/seller/sell' element={<ProductInfo />} />
          <Route path='/seller/product/:id' element={<SellerProductPage />} />
          <Route path='/buyer/product/:id' element={<BuyerProductPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
