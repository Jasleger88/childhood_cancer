import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../App.css';

import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'));

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('token'));
    }, [location]);

    function logout() {
        toast.success(`Thank you for visiting!`);
        setIsLoggedIn(false);
        localStorage.removeItem('token');
        navigate('/')
    }

    return (
        <div className="navbar">
            {!isLoggedIn && <Link to="/login" className="button is-warning">Greetings, Login</Link>}
        </div>
    );
};

export default Navbar;
