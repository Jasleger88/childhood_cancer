import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Navbar from './components/Navbar.Jsx';
import Home from './components/Home.Jsx';
// import 'bulma/css/bulma.min.css'; // Importing Bulma CSS

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

      </Routes>


    </Router>
  );
}

export default App;



