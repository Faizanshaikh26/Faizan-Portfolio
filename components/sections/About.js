import Footer from "@/components/Footer";

export default function About() {
  return (
    <section id="about" className="about-section section">
      <div className="basic-info section-block">
        <div className="container">
          <div className="section-header text-center">
            <h2>Basic Info About Me</h2>
            <div className="divider-draft center"></div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="about-person-img">
                <img src="/img/linkdin_processed.jpg" alt="profile" />
              </div>
            </div>

            <div className="col-md-8 about-info">


              <p>

                Hello! I&apos;m Faizan Shaikh, a Full-Stack Web Developer from Ahmednagar, Maharashtra. I specialize in the MERN stack and enjoy building modern, responsive, and scalable web applications with clean code and great user experiences.

                I'm passionate about learning new technologies, solving real-world problems, and continuously improving my skills by building projects. I'm currently seeking opportunities to grow as a developer, contribute to meaningful projects, and create impactful digital solutions.

              </p>

              <div className="clearfix"></div>

              <ul className="info-list">
                <li>
                  <div className="inner">
                    <h4>Name</h4>
                    <p>Faizan Shaikh</p>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <h4>Age</h4>
                    <p>22 Years</p>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <h4>Hometown</h4>
                    <p>Ahmednagar</p>
                  </div>
                </li>
              </ul>

              <a href="#" className="symp-btn" data-section="contact">Hire Me For Work</a>
              <a href="/img/Faizan-Resume.pdf" className="symp-btn link-btn" download="Faizan-Resume.pdf">
                <i className="ion-ios-download"></i> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Icons */}
      <div className="about-icons section-block">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="service">
                <div className="icon"><i className="ion-ios-lightbulb"></i></div>
                <div className="content">
                  <h4>Creative Thinker</h4>
                  <p>I create innovative websites solutions that blend functionality and visual appeal.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service">
                <div className="icon"><i className="ion-ios-glasses"></i></div>
                <div className="content">
                  <h4>Problem Solver</h4>
                  <p>I tackle challenges with a strong analytical mindset and effective solutions.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service">
                <div className="icon"><i className="ion-ios-bolt"></i></div>
                <div className="content">
                  <h4>Fast Learner</h4>
                  <p>I quickly adapt to new technologies, staying ahead in the tech industry.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service">
                <div className="icon"><i className="ion-help-buoy"></i></div>
                <div className="content">
                  <h4>Enthusiastic Learner</h4>
                  <p>My passion for tech keeps me exploring new horizons in websites development.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="service">
                <div className="icon"><i className="ion-ios-game-controller-b"></i></div>
                <div className="content">
                  <h4>Gamer</h4>
                  <p>I enjoy gaming, which sharpens my strategic thinking and reflexes.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service">
                <div className="icon"><i className="ion-happy"></i></div>
                <div className="content">
                  <h4>Health Conscious</h4>
                  <p>I prioritize staying active and healthy for peak performance.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service">
                <div className="icon"><i className="ion-help-buoy"></i></div>
                <div className="content">
                  <h4>Team Player</h4>
                  <p>I support and uplift my peers to achieve shared goals through collaboration.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service">
                <div className="icon"><i className="ion-trophy"></i></div>
                <div className="content">
                  <h4>Dedicated Developer</h4>
                  <p>I deliver top-notch websites applications with a seamless user experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Funfacts */}
      <div className="funfacts-block section-block" data-stellar-background-ratio=".2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 funfact">
              <div className="content"><h4>3+</h4><p>Years  of Experience</p></div>
            </div>
            <div className="col-md-3 col-sm-6 funfact">
              <div className="content"><h4>24+</h4><p>Websites Apps Created</p></div>
            </div>
            <div className="col-md-3 col-sm-6 funfact">
              <div className="content"><h4>10+</h4><p>Responsive Websitessites Developed</p></div>
            </div>
            <div className="col-md-3 col-sm-6 funfact">
              <div className="content"><h4>100%</h4><p>Passion for Coding</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-block section-block">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="animate text-over-block">Testimonials</h2>
            <div className="divider-draft center"></div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="testimonials-slider">
                <div className="testimonial">
                  <p>&quot;Faizan&apos;s expertise in websites development is outstanding. He transformed our vision into a responsive, user-friendly application with impressive efficiency.&quot;</p>
                  <div className="author"><h4>Rahul Verma</h4><p>Freelancer</p></div>
                </div>
                <div className="testimonial">
                  <p>&quot;Working with Faizan was a pleasure. His innovative approach and attention to detail resulted in a seamless product that exceeded our expectations.&quot;</p>
                  <div className="author"><h4>Ayesha Khan</h4><p>Intern at Tech Innovations</p></div>
                </div>
                <div className="testimonial">
                  <p>&quot;Faizan is not only highly skilled but also a great communicator. He ensured that the project was completed on time and to a high standard.&quot;</p>
                  <div className="author"><h4>Vikram Patel</h4><p>Junior dev at Creative Solutions</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer variant="index" />
    </section>
  );
}
