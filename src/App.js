import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import "./Header.css"

/*********************************** */

import image1 from "./assets/image.jpg";
import im1 from './assets/im1.jpeg';
import im2 from './assets/im2.jpeg';
import im3 from './assets/im3.jpeg';
import im4 from './assets/im4.jpeg';

/*********************************** */

import tcsLogo from './assets/TCS.png';
import wiproLogo from './assets/wipro.jpg';
import infosysLogo from './assets/infosys.png';
import capgeminiLogo from './assets/capgemini.png';
import accentureLogo from './assets/Accenture.png';
import techmLogo from './assets/Tech.jpg';
import cognizantLogo from './assets/Cognizant.jpg';
import hclLogo from './assets/cisco.png';
import nvd from './assets/Nvidia.png';
import persi from './assets/persi.png';
import kpit from './assets/kpit.jpg';

/*********************************** */
const App = () => {
  const aboutRef = useRef(null);

  // Typewriter effect states
  const languages = ["C++", "C", "Python", "Java", "DBMS", "DSA", "Advanced Java", "Data Analytics", "Data Science"];
  const [displayedText, setDisplayedText] = useState("");
  const [langIndex, setLangIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter logic
  useEffect(() => {
    const currentLang = languages[langIndex];
    let timeout;

    if (charIndex <= currentLang.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentLang.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 150);
    } else {
      timeout = setTimeout(() => {
        setCharIndex(0);
        setLangIndex((prev) => (prev + 1) % languages.length);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, langIndex]);

  // Intersection observer
  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (aboutRef.current) {
        if (entry.isIntersecting) {
          aboutRef.current.classList.add("show");
        } else {
          aboutRef.current.classList.remove("show"); // Remove when not in view
        }
      }
    },
    { threshold: 0.3 }
  );

  if (aboutRef.current) {
    observer.observe(aboutRef.current);
  }

  return () => {
    if (aboutRef.current) {
      observer.unobserve(aboutRef.current);
    }
  };
}, []);



const featuresRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        featuresRef.current.classList.add("appear");
      } else {
        featuresRef.current.classList.remove("appear");
      }
    },
    { threshold: 0.3 }
  );

  const currentRef = featuresRef.current;
  if (currentRef) observer.observe(currentRef);

  return () => {
    if (currentRef) observer.unobserve(currentRef);
  };
}, []);


const testimonials = [
  { quote: "Ravi Sir is an exceptional coding mentor, and I consider myself fortunate to have had the opportunity to learn from him. His deep knowledge, dedication to teach for 14 hr every day, and personalized teaching approach make him a true gem in the realm of coding education. If you have the chance to learn from Ravi Sir, seize it without hesitation. I can confidently say that no one will teach you coding quite like him. He truly is a god of teaching, guiding aspiring programmers to achieve greatness.😊😊😊", author: "Vynktesh Mande" },
  { quote: "Here's my genuine appraisal of my experience with RAVI PROGRAMMING ACADEMY. My Overall Experience with Ravi Programming Academy is quite well and I learned alot . Ravi Sir is UNDENIABLY an EXTRAORDINARY coding mentor. Ravi Sir is a very good having a lot of KNOWLEDGE and EXCELLENT COMMAND on coding languages. This Academy helps me alot and I'm fully satisfied with the academy. An absolute method is used for teaching. I consider myself very lucky to have had the opportunity to learn from Ravi Sir. I really appreciate you work sir. No one will teach like a Ravi Sir. I highly recommend it for any student or learner . You are the best teacher I have ever seen in my life. Thank You So Much Sir😌😌😌......", author: "Dimpal Barhate" },
  { quote: "This the best place to if you want learn from basic to advance. Ravi sir is guy who is skilled and he knows how to deliver every lecture of respective coding language perfectly. He solves doubts on the same day and he craves for hard questions from students. If you are in Aurangabad and you want to become programmer; Ravi programming is the best place to achieve that.", author: "Prashant Sasane" },
  { quote: "My overall experience in this academy was very good and especially the teaching techniques of Ravi sir make each and every topic very easy.", author: "Arya Patil" },
  { quote: "Ravi Programming Academy is one of the best places to learn programming from scratch to advanced levels. Ravi Sir explains complex concepts in a very simple and practical way, making it easy for students to understand—even if you come from a non-technical background. His teaching style is clear, engaging, and full of real-life examples that help you build a strong foundation in programming. Whether you're learning C, C++, Python, or preparing for a software job or college exam, Ravi Sir’s guidance is extremely helpful.", author: "Abuzar Ansari" },
  { quote: "Sir teaches awesome if you come from your first language from C programming then coordination and learning ability in class is awesome with Sir awesome Thank you sir for good teaching best in aurangabad 🙏🙋👍👍", author: "krishna kakade" }
];

const [current, setCurrent] = useState(0);
const [showModal, setShowModal] = useState(false);

// For image carousel
const images = [im1, im2, im3];

const handleNext = () => {
  setCurrent((prev) => (prev + 1) % testimonials.length);
};

const handlePrev = () => {
  setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
};

// Auto-scroll testimonials on mobile only
useEffect(() => {
  const isMobile = window.innerWidth <= 768;

  if (!isMobile) return;

  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, 4000);

  return () => clearInterval(interval);
}, []); 


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <>
   

 <div className="header">
      <div className="container">
        <h1>{'{R.}'} Ravi Programming Academy</h1>

        {/* Desktop Menu */}
        <nav className="menu-bar desktop-menu">
          <ul>
            <li><a href="#services">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact" onClick={() => setShowModal(true)}>Links</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
         
        <div
  className="mobile-menu-icon"
  onClick={() => {
    console.log("Menu toggled");
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }}
>
         <i className="fas fa-bars"></i>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
          <div className="mobile-dropdown">
          <ul>
            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Courses</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => { setIsMobileMenuOpen(false); setShowModal(true); }}>Links</a></li>
          </ul>
        </div>
      )}

      {/* Social Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="glass-modal">
            <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            <h2>Connect With Us</h2>
            <div className="social-links">
              <a href="https://wa.me/919970627776?text=Hi%20I%20would%20like%20to%20enquire%20about%20the%20courses." target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/ravi_programming_academy/profilecard/?igsh=MWlyMTdlYW4zam1yaQ==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://g.co/kgs/LN8RcXX" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>
        </div>
      )}
</div>


      <div className="landing" style={{ backgroundImage: `url(${image1})` }}>
        <div className="intro-text">
          <h1>Power Up with Programming</h1>
          <p>"Compile Dreams. Execute Success."</p>
          <p>
            Learn to Program <span className="typewriter">{displayedText}</span>
          </p>
        </div>
      </div>

      <div className="features" ref={featuresRef}>
        <div className="container">
          <div className="feat">
            <i className="fas fa-magic fa-3x"></i>
          <h3>Build from the Basics</h3>
<p>Start your journey with core languages like C, C++, and Java—crafted for absolute beginners to develop strong foundations.</p>

          </div>
          <div className="feat">
            <i className="far fa-gem fa-3x"></i>
           <h3>Real-World Skills</h3>
<p>Dive into Data Structures, DBMS, and Python projects that mirror actual industry scenarios and solve real problems.</p>
</div>
          <div className="feat">
            <i className="fas fa-globe-asia fa-3x"></i>
           <h3>Level Up with Advanced Tech</h3>
<p>Get hands-on with Advanced Java, Data Analytics, and AI tools to prepare for top-tier tech careers and internships.</p>
</div>
        </div>
      </div>

      <div className="services" id="services">
        <div className="container">
          <h2 className="special-heading">Programs Offered</h2>
        <div className="services-content">
  {[
    { title: "C++", desc: "Master object-oriented programming with real-world projects." },
    { title: "C", desc: "Understand memory and logic with foundational C programming." },
    { title: "Python", desc: "Build scripts, apps, and automations using Python." },
    { title: "DBMS", desc: "Learn to design and manage efficient databases." },
    { title: "DSA", desc: "Crack coding interviews with structured DSA training." },
    { title: "Java", desc: "Develop scalable apps with Java fundamentals." },
    { title: "Advanced Java", desc: "Explore Servlets, JSP, and enterprise-grade Java." },
    { title: "Data Analytics", desc: "Analyze and interpret data insights effectively." },
    { title: "Data Science", desc: "Build ML models and work with real-world datasets." }
  ].map((lang, index) => (
    <div className="srv" key={index}>
      <i className={lang.icon}></i>
      <div className="text">
        <h3>{lang.title}</h3>
        <p>{lang.desc}</p>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>

 

<div className="portfolio" id="portfolio">
  <div className="container">
    <h2 className="special-heading">Program Overview</h2>
    <div className="portfolio-content">
      {[1, 2, 3].map((item, index) => (
        <div className="card" key={index}>
          <img src={images[index]} alt={`Program Slide ${index + 1}`} />
          <div className="info">
            <h3>{[
              "Hands-On Projects – Learn by Building",
              "Career-Focused Curriculum – Skills That Matter",
              "Code Analytics – Personalized Growth Insights"
            ][index]}</h3>
            <p>{[
              "Work on real-world coding projects from day one—build apps, solve problems, and apply what you learn immediately with guided mentorship.",
              "Our syllabus is designed with input from industry experts. Learn in-demand topics like DSA, DBMS, and Data Science that recruiters actually look for.",
              "Track your coding progress, get feedback, and identify strengths and weak areas through data-driven performance dashboards and mentor reviews."
            ][index]}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      <div className="about" id="about" ref={aboutRef}>
        <div className="container">
          <h2 className="special-heading">About</h2>
          <div className="about-content">
            <div className="image">
              <img src={im4} alt="About Finance Manager" />
            </div>
            <div className="text">
              <p>Ravi Majithia is a passionate educator, programmer, and tech enthusiast with a strong commitment to nurturing the next generation of coders. With years of experience in teaching core programming languages like C, C++, Java, Python, Data Structures, and PL/SQL, he has established a reputation for simplifying complex concepts and inspiring students to build strong foundations in software development.


             Driven by a vision to make programming accessible and engaging, Ravi founded Ravi Programming Academy, where hundreds of students have gained practical, hands-on experience in coding and software design. His student-centric approach, real-world examples, and continuous updates to teaching methods reflect his dedication to excellence and lifelong learning in the tech space.

<br></br>
              In addition to teaching, Ravi Majithia has authored dozens of books covering a wide range of programming languages and technologies. These books are known for their clarity, structured content, and practical focus, making them valuable resources for students, professionals, and institutions across the country.</p>
              <hr />
            </div>
          </div>
        </div>
      </div>

<div className="testimonials" id="testimonials">
  <div className="containerr">
    <h2 className="special-heading">Testimonials</h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
   
    <div className="carousel">
      <button className="arrow left" onClick={handlePrev}>&#10094;</button>

      <div className="carousel-track">
        {testimonials.map((testimonial, index) => {
          const isActive = index === current;
          const isPrev = index === (current - 1 + testimonials.length) % testimonials.length;
          const isNext = index === (current + 1) % testimonials.length;

          return (
            <div
              key={index}
              className={`testimonial-card ${
                isActive ? "active" : isPrev ? "prev" : isNext ? "next" : "hidden"
              }`}
            >
              <p className="quote">“{testimonial.quote}”</p>
              <h4 className="author">— {testimonial.author}</h4>
            </div>
          );
        })}
      </div>

      <button className="arrow right" onClick={handleNext}>&#10095;</button>
    </div>
  </div>
</div>

<div className="placements" id="placements">
  <div className="container">
    <h2 className="special-heading">Our Students Are Placed At</h2>
    <br></br>
    <br></br>
    <br></br>
    <div className="placements-content">
      {[
        { name: "TCS", logo: tcsLogo },
        { name: "Wipro", logo: wiproLogo },
        { name: "Infosys", logo: infosysLogo },
        { name: "Capgemini", logo: capgeminiLogo },
        { name: "Accenture", logo: accentureLogo },
        { name: "Tech Mahindra", logo: techmLogo },
        { name: "Cognizant", logo: cognizantLogo },
        { name: "Nvidia", logo: nvd },
        { name: "Persistent", logo: persi },
        { name: "Kpit", logo: kpit },
      ].map((company, index) => (
        <div className="placement-card" key={index}>
          <img src={company.logo} alt={company.name} className="company-logo" />
          <p>{company.name}</p>
        </div>
      ))}
      <div className="placement-card">
          <p>And Many More...</p>
        </div>
    </div>
  </div>
</div>


      <div className="footer">
        &copy; 2025 Ravi Programming Academy All Right Reserved <br></br>
        Contact Us Through  <br></br>
        Address | <a href="https://maps.app.goo.gl/dvbanxx1Ex28jezB9" target="_blank">CIDCO, N6 </a> | Mob. 9970627776 <a href="https://wa.me/919970627776?text=Hi%20I%20would%20like%20to%20enquire%20about%20the%20courses." target="_blank">Enquire Now</a><br></br>
        Address | <a href="https://maps.app.goo.gl/JPEWBrqbNvaCcJjm8" target="_blank">Osmanpura </a> | Mob. 7875042442 <a href="https://wa.me/917875042442?text=Hi%20I%20would%20like%20to%20enquire%20about%20the%20courses." target="_blank">Enquire Now</a>
       
      </div>
    
    
    
    </>
  );
};

export default App;
