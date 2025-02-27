// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from './../constants/index';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className="w-full flex py-1 justify-between items-center navbar">
      <Link to="/">
        <img src={logo} alt="chainsync" className="w-[180px] h-[120px]" />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[18px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={nav.path}>{nav.title}</Link>
          </li>
        ))}
        <li className="font-poppins font-normal cursor-pointer text-[18px]">
          <Link to="/sign-in">SignIn</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;