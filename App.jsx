import React, { useState } from 'react';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import LoginPopup from './components/LoginPopup/LoginPopup';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Verify  from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';
import SpinWheel from './components/Random/SpinWheel';
import { Coordinates } from './Context/StoreContext';
import RestaurantMenu from './components/TopRestaurants/RestaurantMenu';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [coord, setCoord] = useState({ lat: 19.0473, lng: 73.0699 });

  return (
    <>
      <Coordinates.Provider value={{ coord, setCoord }}>
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
        <div className="app">
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurantMenu/:id" element={<RestaurantMenu />} />
            <Route path="/spin-wheel" element={<SpinWheel />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/myorder" element={<MyOrders />} />
            <Route path="/verify" element={<Verify />} />
          </Routes>
        </div>
        <Footer />
      </Coordinates.Provider>
    </>
  );
};

export default App;
export const baseURL= "http://localhost:4000";
