import { NavLink } from "react-router-dom";
import "./NavBar.css";

/**
 * Navigation bar.
 *
 * props:
 *  -none
 *
 * state:
 *  -none
 *
 *
 * App -> NavBar
 */
function NavBar() {

  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Pix.ly
        </NavLink>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/upload">
                Upload a photo
              </NavLink>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default NavBar;
