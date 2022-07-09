import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Booking from './pages/Booking';
import Services from './pages/Services';
import AboutUs from './pages/About';
import Login from './pages/Login';
import CustomerLanding from './pages/cust_landing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cust_land" element={<CustomerLanding />} />
      </Routes>
    </div>
  );
}

export default App;
