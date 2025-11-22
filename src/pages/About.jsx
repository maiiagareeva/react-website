import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About(){
  return (
    <>
      <Navbar />
      <main className="container section">
        <h2 className="title">ABOUT ME</h2>
        <div className="about-grid">
          <div>
            <p><strong>Hello!</strong> I'm a passionate developer and photographer who loves to create beautiful and functional experiences.</p>
            <p>I combine technical expertise with creative vision to build projects that are not only functional but also aesthetically pleasing.</p>
            <p>I'm also a founder of my podcast <i>BeeInBoots Broadcasts</i> available on {' '}
            <a 
              href="https://apple.co/4awk7hb" 
              target="_blank" 
              rel="noreferrer"
              className="about-link"
            >
              Apple Podcasts
            </a>{' '}
            and{' '}
            <a 
              href="https://soundcloud.com/beeinboots" 
              target="_blank" 
              rel="noreferrer"
              className="about-link"
            >
              SoundCloud
            </a>{' '}
            platforms.
            </p>
            <h3>What I Do</h3>
            <ul className="skills">
              <li><strong>Web Development</strong><span>HTML, CSS, JavaScript, React, Django</span></li>
              <li><strong>Data Science</strong><span>Python, SQL, Java, Machine Learning, LLM</span></li>
              <li><strong>Photography</strong><span>Landscape, Portrait, Nature</span></li>
              <li><strong>UI/UX Design</strong><span>Figma, prototyping, user interface</span></li>
            </ul>
            <h3>Get In Touch</h3>
            <p>I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work together!</p>
            <ul>
              <li><a href="mailto:mailiagareeva@gmail.com">mailiagareeva@gmail.com</a></li>
              <li>Minneapolis, MN, United States</li>
            </ul>
          </div>
          <div className="hero-right">
            <img src="/images/backgrey.jpg" alt="My portrait" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
