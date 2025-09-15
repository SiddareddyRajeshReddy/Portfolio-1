import { React, useState } from "react";
import "./App.css";

import {
  FaJava,
  FaPython,
  FaJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiExpress,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

// PERSONAL INFO
const personalInfo = {
  name: "SIDDAREDDY RAJESH REDDY",
  title: "Full-Stack Developer",
  description:
    "A passionate and committed full-stack developer with expertise in the MERN stack. Skilled in building secure, scalable, and efficient web applications from the ground up.",
  email: "b230065@nitsikkim.ac.in",
  phone: "+91-8522840158",
  linkedin: "https://www.linkedin.com/in/siddareddy-rajesh-reddy/",
  github: "https://github.com/Rajeshreddy-s",
};

// NAVIGATION
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

// ABOUT SKILLS
const aboutSkills = [
  "C, Java, Python",
  "JavaScript (ES6+)",
  "React.js & Tailwind CSS",
  "Node.js & Express.js",
  "MongoDB & MySQL",
];

// PROJECT DATA
const projectData = [
  {
    id: 1,
    title: "Dual-Role Cab Booking Platform",
    category: "MERN Stack",
    description:
      "Architected a full-stack MERN application with a focus on Object-Oriented Design (OOD) to support scalable, dual-role (driver/customer) functionality. Secured the application with JWT authentication.",
    image:
      "./project1.png",
  },
  {
    id: 2,
    title: "Traffic Violation & Fine Management",
    category: "PHP",
    description:
      "Developed a secure, full-stack web application using PHP and MySQL for traffic law enforcement, featuring automated email notifications and PDF report generation.",
    image:
      "./picture3.png",
  },
  {
    id: 3,
    title: "Retro Snake Evolution",
    category: "Python",
    description:
      "Developed a classic Snake Game in Python using the Turtle Graphics library, applying Object-Oriented Programming (OOP) concepts to create modular and reusable components.",
    image: "./project3.png",
  },
];

// SKILL ICONS
const skillIcons = [
  { name: "C", icon: <span className="font-bold text-3xl">C</span> },
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Vercel", icon: <SiVercel /> },
];

// --- COMPONENTS ---

const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-pink-500/70 via-orange-400/70 to-yellow-400/70 backdrop-blur-md z-50 border-b border-white/20">
    <div className="container mx-auto px-4 h-20 flex justify-between items-center">
      <a
        href="#home"
        className="text-2xl font-bold uppercase text-white bg-clip-text"
      >
        {personalInfo.name}
      </a>
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-white hover:text-yellow-300 font-medium transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="px-6 py-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white font-semibold rounded-md shadow-lg hover:scale-105 transition-transform"
      >
        Contact
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section
    id="home"
    className="pt-32 pb-16 bg-gradient-to-r from-cyan-200 via-pink-100 to-yellow-200"
  >
    <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800">
          {personalInfo.title}
        </h1>
        <p className="text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
          {personalInfo.description}
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white font-semibold rounded-md hover:opacity-90 transition-opacity shadow-lg"
        >
          View My Work
        </a>
        <div className="flex justify-center md:justify-start gap-6 mt-8 text-2xl text-purple-600">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600"
          >
            <FaGitAlt />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-pink-400 overflow-hidden flex items-center justify-center bg-white shadow-lg">
          <img
            src="/MyImageC.png"
            alt={personalInfo.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section
    id="about"
    className="py-16 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100"
  >
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2 flex justify-center">
        <div className="w-80 h-80 rounded-full bg-white flex items-center justify-center text-center p-8 border-4 border-yellow-400 shadow-lg">
          <p className="text-gray-700 italic">
            Currently pursuing a B.Tech in Computer Science at the{" "}
            <span className="text-pink-600 font-semibold">
              National Institute of Technology, Sikkim
            </span>{" "}
            with a CGPA of 8.88.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
        <p className="text-gray-700 mb-8">
          I am a detail-oriented and adaptable problem-solver, currently in my
          second year of Computer Science and Engineering. My coursework in Data
          Structures, Algorithms, and Software Engineering has provided me with
          a strong theoretical foundation, which I apply to practical projects.
        </p>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {aboutSkills.map((skill, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-pink-200 via-yellow-200 to-orange-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-pink-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-lg overflow-hidden border border-gray-200 text-left flex flex-col transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-pink-300/50">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-52 object-cover"
    />
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold mb-2 text-pink-600">{project.title}</h3>
      <p className="text-gray-700 text-sm flex-grow mb-4">
        {project.description}
      </p>
    </div>
  </div>
);

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filteredProjects = projectData.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">My Projects</h2>
        <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
          {["All", "MERN Stack", "PHP", "Python"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold border transition-all duration-300
                ${
                  filter === cat
                    ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-md"
                    : "bg-white text-gray-700 hover:border-pink-400 hover:text-pink-500"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillIconCard = ({ skill }) => (
  <div className="group flex flex-col items-center gap-2 p-4 w-28 h-28 justify-center bg-white rounded-lg border border-gray-200 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-pink-400">
    <div className="text-5xl text-pink-500 group-hover:text-orange-500 transition-colors">
      {skill.icon}
    </div>
    <span className="font-semibold text-gray-700 group-hover:text-gray-900">
      {skill.name}
    </span>
  </div>
);

const Skills = () => (
  <section
    id="skills"
    className="py-16 bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100"
  >
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">
        Technologies I Use
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
        {skillIcons.map((skill) => (
          <SkillIconCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section
    id="contact"
    className="py-16 bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100"
  >
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Get In Touch</h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-12">
        I'm currently available for freelance work and open to discussing new
        projects. Feel free to reach out via email or connect on LinkedIn.
      </p>
      <a
        href={`mailto:${personalInfo.email}`}
        className="inline-block px-10 py-4 mx-10 bg-gradient-to-r from-pink-500 via-orange-400 to-red-500 text-white font-semibold rounded-md shadow-lg hover:opacity-90 transition-opacity"
      >
        {personalInfo.email}
      </a>
       <a
        href={`mailto:sidddareddyrajeshreddy@gmail.com`}
        className="inline-block px-10 py-4 mx-10 bg-gradient-to-r from-pink-500 via-orange-400 to-red-500 text-white font-semibold rounded-md shadow-lg hover:opacity-90 transition-opacity"
      >
        sidddareddyrajeshreddy@gmail.com
      </a>
      <div className="flex justify-center gap-6 mt-8 text-2xl text-pink-600">
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500"
        >
          <FaLinkedinIn />
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500"
        >
          <FaGitAlt />
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gradient-to-r from-pink-200 via-orange-200 to-yellow-200 py-12 border-t border-white/20">
    <div className="container mx-auto px-4 text-center">
      <a
        href="#home"
        className="text-3xl font-bold mb-6 inline-block uppercase bg-gradient-to-r from-pink-500 via-orange-500 to-red-500 text-transparent bg-clip-text"
      >
        {personalInfo.name.split(" ")[1]}
      </a>
      <div className="flex justify-center gap-8 text-2xl mb-8 text-pink-600">
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500"
        >
          <FaLinkedinIn />
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500"
        >
          <FaGitAlt />
        </a>
      </div>
      <p className="text-gray-700 font-medium">
        &copy; {new Date().getFullYear()} {personalInfo.name}. All Rights
        Reserved.
      </p>
    </div>
  </footer>
);

// MAIN APP
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
