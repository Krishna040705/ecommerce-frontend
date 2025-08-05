import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Computers from './components/Computers';
import Mobiles from './components/Mobiles';
import Laptops from './components/Laptops';
import Pendrives from './components/Pendrives';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Orders from './components/Orders';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>E-Commerce</h1>
          <div className="auth-buttons">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Sign Up</button></Link>
          </div>
        </header>

        <div className="main-layout">
          <nav className="sidebar">
            <Link to="/about">About Us</Link>
            <Link to="/computers">Computers</Link>
            <Link to="/mobiles">Mobiles</Link>
            <Link to="/laptops">Laptops</Link>
            <Link to="/pendrives">Pendrives</Link>
          </nav>

          <main className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/computers" element={<Computers />} />
              <Route path="/mobiles" element={<Mobiles />} />
              <Route path="/laptops" element={<Laptops />} />
              <Route path="/pendrives" element={<Pendrives />} />
              <Route path="/home" element={<Home />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </main>
        </div>

        <footer className="footer">
          © copyright E-Commerce
        </footer>
      </div>
    </Router>
  );
}

export default App;
