import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './css/App.css';
import img2 from "../src/img/animi.png";
import { useEffect } from 'react';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
function Home() {
  useEffect(() => {
    const emoji = document.getElementById('flying-emoji');
    if (emoji) {
      emoji.classList.add('fly');
      setTimeout(() => {
        emoji.classList.remove('fly');
        emoji.classList.add('pop');
      }, 3000); 
    }
  }, []); 
  return (
    <>
      <div className="home-container">
        <div className="text-section">
          <h1>Welcome to My Website</h1>
          <p>
            Our Alumni Association platform is designed to connect former students, faculty, and professionals, offering a space where you can network, collaborate, and grow. Whether you're seeking guidance, looking for new opportunities, or simply reconnecting with old friends, our platform has you covered.
          </p>
        </div>
        <div className="image-section">
          <img src={img2} alt="Example" className="home-image" />
        </div>
     
        <div id="flying-emoji" className="emoji">💖</div>
          </div>
    </>
  );
}

function Contact() {
  return <h1>Contact us</h1>;
}

function Login() {
  return <h1>Login</h1>;
}

function Register() {
  return <h1>Register</h1>;
}

export default App;
