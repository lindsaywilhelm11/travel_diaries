import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Profile
          </NavLink>
        </li>
        <li>
        <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

