export default function Hero() {
  return (
    <section className="front-section">
      <div className="container">
        <div className="transition-mask"></div>

        <div className="front-person-img">
          <img src="/img/Topnew1.png" alt="Person-bg" />
        </div>

        {/* Person's titles */}
        <div className="front-person-titles">
          <span className="t1">Coder</span>
          <span className="t2">Gamer</span>
          <span className="t3">Freelancer</span>
        </div>

        <nav className="front-person-links">
          <ul>
            <li><a href="#" data-section="about">About Me</a></li>
            <li><a href="#" data-section="resume">Resume</a></li>
            <li><a href="#" data-section="services">Services</a></li>
            <li><a href="#" data-section="portfolio">Portfolio</a></li>
            <li><a href="#" data-section="contact">Contact</a></li>
            <li><a href="#">Hire Me!</a></li>
          </ul>
        </nav>

        <div className="front-heading text-center">
          <h2>Faizan Shaikh</h2>
        </div>
      </div>
    </section>
  );
}
