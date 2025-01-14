import React from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo';
import { FaTimes } from 'react-icons/fa';
import {menu} from '../../data';
import {Link} from 'react-scroll';


const Navbar = () => {
    return (
        <nav className="card flex__center navbar">
            <div className="flex__center logo">
                <Logo />
            </div>

            <aside className="flex__center sidebar">
                <div className="flex sidebar__top">
                    <span className="icon__container close__btn">
                        <FaTimes />
                    </span>
                </div>
                <div className="flex sidebar__middle">
                    {
                        menu.map((list, index) => {
                            <Link to={list.name.toLowerCase()}>{list.name}</Link>
                        })
                    }
                    
                </div>
            </aside>
        </nav>
    );
};

export default Navbar;