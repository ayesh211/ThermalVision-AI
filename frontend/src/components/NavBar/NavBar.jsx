import { NavLink } from "react-router-dom";

import "./Navbar.css";

import Logo from "../Logo/Logo";
import StatusIndicator from "../StatusIndicator/StatusIndicator";
import LiveClock from "../Clock/LiveClock";

const Navbar = () => {
  return (
    <nav className="navbar">

      <Logo />

      <ul className="nav-links">

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/upload-image">Image</NavLink>
        </li>

        <li>
          <NavLink to="/upload-video">Video</NavLink>
        </li>

        <li>
          <NavLink to="/live-camera">Camera</NavLink>
        </li>

        <li>
          <NavLink to="/history">History</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

      </ul>

      <div className="navbar-right">
        <StatusIndicator />
        <LiveClock />
      </div>

    </nav>
  );
};

export default Navbar;