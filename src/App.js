import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import { Provider } from "react-redux";
import Profile from './components/Profile/Form'
import SellerProductPage from './components/Seller/Carousel/Carousel'
import BuyerProductPage from './components/Buyer/Carousel/Carousel'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/seller/product/:id' element={<SellerProductPage />} />
          <Route path='/buyer/product/:id' element={<BuyerProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
