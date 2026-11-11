import { Link, NavLink } from "react-router";
import "./Header.css"
import { FaMoon, FaSun } from "react-icons/fa6";
import {useContext } from "react";
import Data from "../context/Data.jsx";
import '../theme.css';

export default function Header() {
  const {theme, changeTheme} = useContext(Data);
  return (
    <div>
      <header className="header comp">
        <h1><Link to="/"> Web Dev Roadmap </Link> </h1>
        <button className="theme"
        onClick={ () => {
          changeTheme(theme ==="light" ? "dark" : "light")
        }}
        > <FaMoon/> <FaSun/> </button>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/Basic">
              Basic
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/Framework">
              Framework
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/Tips">
              Tip
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}
