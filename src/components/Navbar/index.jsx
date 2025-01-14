import React from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo';

const Navbar = () => {
    return (
        <nav className="card flex__center navbar">
            <div className="flex__center logo">
                <Logo />
            </div>

            <aside className="flex__center sidebar">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
            </aside>
        </nav>
    );
};

export default Navbar;