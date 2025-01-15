import React from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo";
import { FaTimes } from "react-icons/fa";
import { menu } from "../../data";
import { Link } from "react-scroll";
import { FaArrowRightFromSquare, FaBarsStaggered } from "react-icons/fa6";    // Add this line


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
          {menu.map((list, index) => {
            <Link
              to={list.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}
              className="tab"
              activeClass="btn__shine"
            >
              {list.name}
            </Link>;
          })}
        </div>
      </aside>
      <div className="flex__container buttons__wrapper">
        <Link to="contact" className="btn flex__center hire__btn">
            Hire Me <div className="flex__center icon">
                <FaArrowRightFromSquare />
            </div>
        </Link>

        <FaBarsStaggered className="menu"/>
      </div>
    </nav>
  );
};

export default Navbar;
