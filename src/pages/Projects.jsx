import React, { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const items = [
    {
      title: "Portfolio",
      desc: "Creating Website - Personal Portfolio with Figma, React, HTML and CSS.",
      img: "/projects_img/main.JPG",
      skills: ["React", "Figma", "CSS", "HTML"],
      duration: "October-December 2025",
      link: "https://github.com/maiiagareeva/React_website.git",
      longDesc: `
      The website you're using right now is my independent project. Throught it's creation 
      I tried milions of diffent designs, interfaces and inner components.\n
      Ultimately, I designed and built my personal portfolio website from scratch.
      This project started with creating the layout and visual style in Figma, 
      then bringing those ideas to life using React, Html, and CSS. 
      I wanted the website being functional and easy to get valuable information quickly. 
      The website is meant to showcase my projects, interests like photography/podcast, and a bit about 
      who I am as a data science student.\n 
      Along the way, I learned how to structure a React app. This is my first time deploying something in public. 
      This work could require more and more additions, modifications, updates or UI/UX revisions, 
      but I'm proudly say that I'm happy releasing it right now!\n
      Despite that, I'm going to create a user <-> deployer sort of interraction
       - like chat/chat bot - that will allow everybody give me valuable content-based 
      suggestions/advices about the website or even my career.\n
      Overall, this project helped me improve my front-end skills, wrap everything I am, I have and 
      gave me a space I can continue to grow and update over time.\n
      Thank you for your time here!`,
    },
    {
      title: "Map API",
      desc: "Integration of Google Map interface into the Gopher Eye App.",
      img: "/projects_img/map.png",
      skills: ["Dart", "HTML", "Flutter", "Google Maps", "Python"],
      duration: "March–April 2025",
      link: "https://github.com/AgRobotics-Lab-in-BBE-UMN/gopher-eye-app.git",
      longDesc: `
        Gopher Eye App - is a simple flutter-based application for leaves' diseases detection inside
        the Agriculture Robotics Lab Computer Science team.\n
        I built an interactive map tool for the Gopher Eye App which integrates a Google Map. The app
        shows pins of leaves' detection in the fields and lets users drill into each pin to view
        image evidence, confidence, and suggested actions.\n

        This project was integrated inside the Gopher Eye App interface and also helped me develop my design skills. 
        That was my first time working as a part of big research team, I gained an experience of collaborative meeting and brainstorms. 
        This application is going to be deployed in the App Store soon. Unfortunately, It's currently workable only for IOS user. 
        My appologies for the rest of the users, we'll work on that problem soon.\n
        University of Minnesota Twin Cities. Agriculure Robotics Lab Team CS, Ass. Prof. Ce Yang. Research Assistant Nicholas Padilla.`,
    },
    {
      title: "VLM",
      desc: "VLM integration to the application of detecting grape leaves diseases.",
      img: "/projects_img/llm.png",
      skills: ["Python", "OpenAI4o-mini", "Flask", "MSI server", "LoRA Adapter", "Metrics BLEU, ROUGE, BARTScore", "fine-tuning", "dataset preprocess"],
      duration: "September 2025 - May 2026",
      link: "https://github.com/maiiagareeva/image-cli-bot.git",
      longDesc: `
      Gopher Eye App is a Flutter-based mobile application designed for detecting and 
      analyzing leaves’ diseases, developed within the Agricultural Engineering Lab at the 
      University of Minnesota.\n
      This project aimed to integrate Large Language Model (LLM) 
      capabilities into the existing system to enhance user interaction and diagnostic insights.\n
      As part of this work, we're implementing a lightweight, locally hosted LLM (Qwen3-1.7B model) 
      integrated into the Gopher Eye app. Such integration goes through seaching best model, 
      LoRA fine-tuning process and finding/creating appropriate dataset of grape leaves diseases. 
      This setup enables natural prompt–image interaction for disease classification, improving interpretability and robustness 
      of the predictions. The model is further optimized using a LoRA adapter to fine-tune visual–text 
      embeddings through a CLIP framework, enabling efficient prompt–image transformations on limited hardware.\n
      It is the currect project on the stage of "Metrics BLEU, ROUGE, BARTScore research pursuing better and better descriptions guaranteeing results accuracy.\n 
      University of Minnesota Twin Cities. Agriculure Robotics Lab Team CS, Ass. Prof. Ce Yang. Research Assistant Nicholas Padilla. Undergraduate student, teammate Chang Shen.`,
    },
    {
      title: "Pictured Rocks National Lakeshore",
      desc: "Co-organized a 3-day backpacking for a group of people.",
      img: "/projects_img/PRNL.jpg",
      skills: ["Planning", "Leadership", "Navigation", "SQLight"],
      duration: "September 2025",
      // link: "#",
      longDesc: `
      Pictured Rocks National Lakeshore - is located in the Michigan, United States with a beautifull trails near by the Superior Lake.\n
      I co-organized a 3-day backpacking trip utilizing a SQL-driven system.\n
      It was my third co-orginized trip so I've already known basic steps which helped me in organizing information a lot.
      First and foremost, I designed and managed relational tables to track participant information, experience levels, 
      emergency contacts, and equipment inventory. Despite that, I used SQL queries to 
      identify gear shortages and its price, balance pack weight, and ensure all safety 
      requirements were met. Structured trail-segment data (distance, 
      possible elevation, water sources and campground with their prices as well) and queried it to optimize daily routes and 
      campsite planning. Created cost-breakdown queries to manage the 
      trip budget and calculate per-person expenses.\n
      To sum up, I created thorough instructions that improved 
      coordination across co-organizers and participants calmness. That was one of the best backpacking trips I had combining
      a great people, new experience and awesome views. We also had a couple of difficulties during that travel, 
      but I suggest they were minimized by our organization and dedication to the process.\n
      Some photos from that trip are (or will be) available in the Photography Section on that website. See photos available captions.`,
    },
    {
      title: "High School Photoset",
      desc: "Made a personal requested photoset for a girl.",
      img: "/projects_img/photoset.jpg",
      skills: ["Photography", "Portraits", "Canon Rebel DSLR", "Adobe Lightroom"],
      duration: "May 2025",
      longDesc: `
      I'm starting a path of passionate phorographer and always open to new practices.
      I've already created a high school senior photoset in Saint Paul Park, Minnesota, United States, 
      capturing a variety of portraits across different locations, 
      angles, and setups. The goal was to produce a personalized 
      graduation album with both styled and natural shots, 
      using props and simple compositions to highlight her personality. Such experience of working 
      with the model was new and interesting, showing up earlier hidden challenges and opportunities to grow.\n
      I used Canon EF-S 18–55mm f/3.5–5.6.
      `,
    },
  ];
  return (
    <>
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

      <div className="modal-desc">
        <p>Description</p>
        {(selectedProject.longDesc || selectedProject.desc)
          .trim()
          .split(/\n\s*\n/)
          .map((para, idx) => <p key={idx}>{para}</p>)}
      </div>

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
