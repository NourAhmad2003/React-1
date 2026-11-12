import { Link, NavLink } from "react-router";
import "./Header.css";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useContext, useState, useEffect } from "react";
import Data from "../context/Data.jsx";
import "../theme.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Config";
import { signOut } from "firebase/auth";

export default function Header() {
  const [user, loading, error] = useAuthState(auth);
  const { theme, changeTheme } = useContext(Data);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (user) {
      const hasSeenWelcome = sessionStorage.getItem("welcomeShown");
      if (!hasSeenWelcome) {
        setShowWelcome(true);
      }
    } else {
      setShowWelcome(false);
      sessionStorage.removeItem("welcomeShown");
    }
  }, [user]);

  const handleCloseWelcome = () => {
    setShowWelcome(false);
    sessionStorage.setItem("welcomeShown", "true");
  };

  return (
    <div>
      {user && showWelcome && (
        <div className="welcome-overlay">
          <div className="welcome-modal">
            <p>Welcome, {user.email}</p>
            <button className="welcome-ok-btn" onClick={handleCloseWelcome}>
              OK
            </button>
          </div>
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
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/">
                Home
              </NavLink>
            </li>
          )}
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/Basic">
                Basic
              </NavLink>
            </li>
          )}
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/Framework">
                Framework
              </NavLink>
            </li>
          )}
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/Tips">
                Tip
              </NavLink>
            </li>
          )}
          {user && (
            <li
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    // Sign-out successful.
                    console.log("Sign-out successful.");
                  })
                  .catch((error) => {
                    // An error happened.
                    console.log("failed to sign out", error);
                  });
              }}
              className="main-list"
            >
              <NavLink className="main-link " to="/signin">
                Signout
              </NavLink>
            </li>
          )}
        </ul>
      </header>
    </div>
  );
}
