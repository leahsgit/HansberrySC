import { Link } from "react-router-dom"
import { User, Mail } from "lucide-react"
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div>Leah Hansberry</div>
       <div className="navbar-subtitle">NDIS Support Coordinator</div>
       </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link-with-icon">
            <User size={20} />
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/form" className="nav-link-with-icon">
            <Mail size={20} />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
