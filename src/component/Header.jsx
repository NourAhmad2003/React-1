import { Link, NavLink } from "react-router";
import "./Header.css"

export default function Header() {
  return (
    <div>
      <header className="header comp">
        <h1><Link to="/"> Web Dev Roadmap </Link> </h1>
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
