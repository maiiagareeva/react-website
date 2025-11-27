import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const [hovered, setHovered] = useState(false);
  const isActive = (p) => (pathname === p ? "active" : "");

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        {/* ---- Desktop view ---- */}
        <div className="desktop-navbar">
          <Link to="/" className="brand">
            <img src="/images/logo.jpg" alt="BeeInBoots logo" />
            <span>BeeInBoots</span>
          </Link>
          <nav className="top-menu">
            <Link className={isActive("/photography")} to="/photography">
              photography
            </Link>
            <Link className={isActive("/aboutme")} to="/aboutme">
              about me
            </Link>
            <Link className={isActive("/projects")} to="/projects">
              projects
            </Link>
            <Link className={isActive("/")} to="/">
              home
            </Link>
          </nav>
        </div>

        {/* ---- Tablet - burger ---- */}
        <div
          className="burger-area"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img src="/images/logo.jpg" alt="BeeInBoots logo" />

          <nav className={`burger-menu ${hovered ? "visible" : ""}`}>
            <Link className={isActive("/photography")} to="/photography">
              photography
            </Link>
            <Link className={isActive("/aboutme")} to="/aboutme">
              about me
            </Link>
            <Link className={isActive("/projects")} to="/projects">
              projects
            </Link>
            <Link className={isActive("/")} to="/">
              home
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
