import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <>
      <Navbar />
      <main className="container">
        <section className="hero">
          <div className="hero-left">
            <h1>MAIIA<br/>GAREEVA</h1>
            <p>
              A <u>data science</u> student curious about the world through
              the glance of code and photography lens.
            </p>
            <div className="buttons">
              <Link className="btn" to="/projects">View projects →</Link>
              <a className="btn download-btn" href="static/MG_CV_current.pdf" target="_blank" rel="noopener noreferrer">View CV →</a>
            </div>
            <div className="links">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>

          </div>
          <div className="hero-right">
            <img src="/images/portray.jpg" alt="BeeInBoots logo" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
