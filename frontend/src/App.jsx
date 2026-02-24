// Best practice version (2025 style)
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../src/component/Loging';
import SignUp from '../src/component/Sign';
import './App.css';
import LandingPage from '../src/pages/LandingPage';
import ProductsPage from '../src/pages/ProductListPage';
import Cart from '../src/component/Cart';
import ProductDetai from './component/ProductDetail';
import CheckoutPage from './component/Checkouts';
import OrderConfirmationPage from './component/OrderConfirmation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />   {/* usually good to have both */}
        <Route path="/signup" element={<SignUp />} />
        <Route path='/producList' element={<ProductsPage/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/productDetails' element={<ProductDetai/>}/>
        <Route path='/checkOut' element={<CheckoutPage/>}/>
        <Route path='/OrderConfirmation' element={<OrderConfirmationPage/>}/>

        


        {/* Add more routes here later */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;