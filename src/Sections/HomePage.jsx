import '../App.css'
import NavBar from '../Components/NavBar';
import FloatingParticles from '../Components/ParticulasFlotantes';

function HomePage() {
  return (
    <>
      <NavBar />
      <section id='Home'>
      <div className="glow-bottom-left"></div>
      <div className="homepage">
        <div className="hero-content">
          <h1><span className="green">Sebastian Sirrett</span><br />Front-End Developer</h1>
          <p>
            Desarrollador front-end especializado con sólida experiencia en frameworks modernos de JavaScript como React, Vue.js, Angular y Next.js
          </p>
          <div className="buttons">
            <a href="#"><button className="filled">View Projects</button></a>
            <a href="#"><button className="outlined">Contact Me</button></a>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default HomePage;