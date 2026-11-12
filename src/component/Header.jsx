import { Link, NavLink } from "react-router";
import "./Header.css";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useContext } from "react";
import Data from "../context/Data.jsx";
import "../theme.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Config";

export default function Header() {
  const [user, loading, error] = useAuthState(auth);
  const { theme, changeTheme } = useContext(Data);

  return (
    <div>
      {user && (
        <div className="user-info">
          <p>Welcome, {user.email}</p>
        </div>
      )}
      <header className="header comp">
        <h1>
          <Link to="/"> Web Dev Roadmap </Link>
        </h1>
        <button
          className="theme"
          onClick={() => {
            changeTheme(theme === "light" ? "dark" : "light");
          }}
        >
          <FaMoon /> <FaSun />
        </button>
        <ul className="flex">
          {!user && (
            <>
              <li className="main-list">
                <NavLink className="main-link" to="/SignIn">
                  Sign In
                </NavLink>
              </li>
              <li className="main-list">
                <NavLink className="main-link" to="/SignUp">
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
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
