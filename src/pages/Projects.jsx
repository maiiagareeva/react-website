import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const items = [
    {
      title: "Map API",
      desc: "Integration of Google Map interface into the Gopher Eye App.",
      img: "public/projects_img/map.png",
      skills: ["Dart", "HTML", "Flutter", "Google Maps", "Figma"],
      duration: "March–April 2025",
      link: "https://github.com/AgRobotics-Lab-in-BBE-UMN/gopher-eye-app.git",
      longDesc: `
        Gopher Eye App - is a simple flutter-based application for leaves' diseases detection inside
        the Agriculture Robotics Lab Computer Science team.
        I built an interactive map tool for the Gopher Eye App which integrates a Google Map. The app
        shows pins of leaves' detection in the fields and lets users drill into each pin to view
        image evidence, confidence, and suggested actions. 

        This project was integrated inside the Gopher Eye App interface and also helped me develop my design skills.
        I utilized Figma to make sure the UI/UX and simplicity of using apps tools.`,
    },
    {
      title: "LLM",
      desc: "LLM integration to the application of detecting leaves diseases.",
      img: "public/projects_img/llm.png",
      skills: ["Python", "OpenAI API", "Flask", "MSI server", "LoRA Adapter run"],
      duration: "September-November 2025",
      link: "https://github.com/maiiagareeva/image-cli-bot.git",
      longDesc: `
      Chat bot`,
    },
    {
      title: "Portfolio",
      desc: "Creating Website - Portfolio using Figma, React, JS and HTML.",
      img: "public/projects_img/main.JPG",
      skills: ["React", "Figma", "CSS", "HTML"],
      duration: "November 2024",
      link: "https://github.com/maiiagareeva/React_website.git",
      longDesc: `
      The website you're using right now is my independent project. Throught it's creation 
      I tried milions of diffent designs, interfaces and inner components.\n
      Ultimately, I designed and built my personal portfolio website from scratch.
      This project started with creating the layout and visual style in Figma, 
      then bringing those ideas to life using React, JavaScript, and CSS. 
      I wanted the website being functional and easy to get valuable information quickly. 
      The website is meant to showcase my projects, photography, and a bit about 
      who I am as a data science student.\n 
      Along the way, I learned how to structure a React app.
      Overall, this project helped me improve my front-end skills, wrap everything I am, I have and 
      gave me a space I can continue to grow and update over time.`,
    },
    {
      title: "Pictured Rocks National Lakeshore",
      desc: "Co-organized a 3-day backpacking for a group of people.",
      img: "public/projects_img/PRNL.jpg",
      skills: ["Planning", "Leadership", "Navigation", "MySQL Workbench"],
      duration: "September 2025",
      // link: "#",
      longDesc: `
      Pictured Rocks National Park - is an organized backpacking-hiking trip in September 2025.
      I co-organized a 3-day backpacking trip by building a 
      SQL-driven system. 
      First and foremost, I designed and managed 
      relational tables to track participant information, experience levels, 
      emergency contacts, and equipment inventory. Despite that, I used SQL queries to 
      identify gear shortages, balance pack weight, and ensure all safety 
      requirements were met. Structured trail-segment data (distance, 
      possible elevation, water sources) and queried it to optimize daily routes and 
      campsite planning. Created cost-breakdown queries to manage the 
      trip budget and calculate per-person expenses. 
      
      To sum up, I created thorough instructions that improved 
      coordination across co-organizers and participants calmness.`,
    },
    {
      title: "GEE",
      desc: "Working with GEE API.",
      img: "public/projects_img/gee.png",
      skills: ["Python","JavaScript", "Google Earth Engine", "Google Cloud SQL Studio"],
      duration: "December 2025",
      link: "https://github.com/alexxxroz/total-forest.git",
      longDesc: `
      I was working on fixing and improving the system that 
      generates special alarms based on satellite images. 
      This system works with analysing received data and processing 
      appropriate images time to time. There is a new feature in
      generating a report that collect satelite images from a specific period
      and send all information to the user.\n
      Main interface here is generating such "alarms" for the specific Region Of Interest 
      and look after it during some time.
      `,
    },
    {
      title: "High School Photoset",
      desc: "Made a personal requested photoset for a girl.",
      img: "public/projects_img/photoset.jpg",
      skills: ["Photography", "Portraits", "Canon Rebel DSLR"],
      duration: "May 2025",
      longDesc: `
      I created a high school senior photoset in Saint Paul Park, 
      capturing a variety of portraits across different locations, 
      angles, and setups. The goal was to produce a personalized 
      graduation album with both styled and natural shots, 
      using props and simple compositions to highlight her personality. I used 
      Canon EF-S 18–55mm f/3.5–5.6.
      `,
    },
  ];
  return (
    <>
      <Navbar />
      <main className="container section">
        <h2 className="title">MY PROJECTS</h2>
        <div className="cards">
          {items.map((it, i) => (
            <article
              className="card"
              key={i}
              onClick={() => setSelectedProject(it)}
              style={{ cursor: "pointer" }}
            >
              <div
                className="card-thumb"
                style={{
                  backgroundImage: `url(${it.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="card-body">
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
                {/* Only show 'code →' if link exists */}
                {it.link && (
                  <a href={it.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    code →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />

      {/* Modal */}
      {selectedProject && (
  <div className="modal" onClick={() => setSelectedProject(null)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <span className="close" onClick={() => setSelectedProject(null)}>&times;</span>

      <h3>{selectedProject.title}</h3>

      <div className="modal-img-wrapper">
        <img
          src={selectedProject.img}
          alt={selectedProject.title}
          className="modal-img"
        />
      </div>

      {/* Thorough description */}
      <div className="modal-desc">
        <p>Description</p>
        {(selectedProject.longDesc || selectedProject.desc)
          .trim()
          .split(/\n\s*\n/) // split by blank lines
          .map((para, idx) => <p key={idx}>{para}</p>)}
      </div>

      {/* Metadata at the end */}
      <div className="modal-meta">
        {selectedProject.skills && (
          <p><strong>Skills:</strong> {selectedProject.skills.join(", ")}</p>
        )}
        {selectedProject.duration && (
          <p><strong>Duration:</strong> {selectedProject.duration}</p>
        )}
      </div>

      {selectedProject.link && (
        <a
          className="btn-link"
          href={selectedProject.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code →
        </a>
      )}
    </div>
  </div>
)}

    </>
  );
}
