import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(){
  const { pathname } = useLocation();
  const isActive = (p) => pathname === p ? "active" : "";

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="brand">
          <img src="/images/logo.jpg" alt="BeeInBoots logo" />
          <span>BeeInBoots</span>
        </Link>
        <div className="menu-wrapper">
          <div className="podcast-links">
            <a 
              className="podcast-item"
              href="https://apple.co/4avk7hb"
              target="_blank"
              rel="noreferrer">
              <img src="images/appod.svg" alt="Apple Podcast" />
            </a>
            <a
              className="podcast-item"
              href="https://soundcloud.com/beeinboots"
              target="_blank"
              rel="noreferrer">
              <img src="images/SCicon.svg" alt="SoundCloud" />
            </a>
          </div>
          <nav className="top-menu">
            <Link className={isActive('/photography')} to="/photography">photography</Link>
            <Link className={isActive('/aboutme')} to="/aboutme">about me</Link>
            <Link className={isActive('/projects')} to="/projects">projects</Link>
            {/* <Link className={isActive('/contacts')} to="/contacts">contacts</Link> */}
            <Link className={isActive('/')} to="/">home</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
