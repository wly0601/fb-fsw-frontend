import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Homepage from './pages';
import Register from './pages/Register';
import Login from './pages/Login';
import InfoProfile from './pages/InfoProfile';
import InfoProduct from './pages/InfoProduct';
import SellerProduct from './pages/SellerProduct';
import BuyerProduct from './pages/BuyerProduct';
import ListProduct from './pages/ListProduct';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<InfoProfile />} />
          <Route path="/seller/sell" element={<InfoProduct />} />
          <Route path="/seller/product/:id" element={<SellerProduct />} />
          <Route path="/buyer/product/:id" element={<BuyerProduct />} />
          <Route path="/side" element={<ListProduct />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
