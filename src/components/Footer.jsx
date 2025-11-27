import React from "react";
export default function Footer(){
  return <footer className="footer">
    <div className="menu-wrapper">
      <div className="podcast-links">
        <a 
            className="podcast-item"
            href="https://apple.co/4avk7hb"
            target="_blank"
            rel="noreferrer">
            <img src="images/appod.svg" alt="Apple Podcast" />
        </a>
      </div>
      <small>© {new Date().getFullYear()} BeeInBoots — Maiia Gareeva</small>
      <div className="podcast-links">
        <a
          className="podcast-item"
          href="https://soundcloud.com/beeinboots"
          target="_blank"
          rel="noreferrer">
          <img src="images/SCicon.svg" alt="SoundCloud" />
        </a>
      </div>
    </div>
    </footer>;
}
