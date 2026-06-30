import Footer from "@/components/Footer";

export default function Services() {
  return (
    <section id="services" className="services-section section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="section-header main-title text-center">
              <h2 className="animate text-over-block">My Services</h2>
              <div className="divider-draft center"></div>
              <p>I provide <b>high quality</b> services. My services that I provide are listed below. Hope you will like them. Lorem ipsum dolor.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="services-block section-block">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="service"><div className="icon"><i className="ion-ios-camera"></i></div><div className="content"><h4>Web-Apps</h4><p>Capturing moments with precision and creativity, providing high-quality images that tell a story.</p></div></div>
            </div>
            <div className="col-md-3">
              <div className="service"><div className="icon"><i className="ion-code"></i></div><div className="content"><h4>Coding</h4><p>Writing clean, efficient code for websites applications, focusing on performance and user experience.</p></div></div>
            </div>
            <div className="col-md-3">
              <div className="service"><div className="icon"><i className="ion-ios-lightbulb"></i></div><div className="content"><h4>Creativity</h4><p>Bringing innovative ideas to life, whether through design, development, or content creation.</p></div></div>
            </div>
            <div className="col-md-3">
              <div className="service"><div className="icon"><i className="ion-ios-monitor"></i></div><div className="content"><h4>Websites Design</h4><p>Designing responsive, aesthetically pleasing websitessites that offer seamless user experiences.</p></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="pricing-block section-block">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="animate text-over-block">Pricing</h2>
            <div className="divider-draft center"></div>
            <p>How much I charge</p>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="pricing-table">
                <div className="header"><h4>Starter</h4><div className="price"><span className="currency">$</span><span className="amount">29</span><span className="period">/mo</span></div></div>
                <ul className="table-items"><li>Basic Websites Design</li><li>Responsive Layouts</li><li>Single Page Applications</li><li>Basic E-commerce Setup</li><li>Technical Support</li></ul>
                <a href="#" className="table-btn">Choose This</a>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="pricing-table">
                <div className="header"><h4>Pro</h4><div className="price"><span className="currency">$</span><span className="amount">39</span><span className="period">/mo</span></div></div>
                <ul className="table-items"><li>Advanced Websites Design</li><li>Full Stack Development</li><li>Complex E-commerce Platforms</li><li>Custom Websites Applications</li><li>Priority Support</li></ul>
                <a href="#" className="table-btn">Choose This</a>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="pricing-table">
                <div className="header"><h4>Enterprise</h4><div className="price"><span className="currency">$</span><span className="amount">49</span><span className="period">/mo</span></div></div>
                <ul className="table-items"><li>Custom Websites App Development</li><li>End-to-End Solutions</li><li>Enterprise-Level E-commerce</li><li>Dedicated Development Team</li><li>24/7 Support</li></ul>
                <a href="#" className="table-btn">Choose This</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work Process */}
      <div className="process-block bg-lightgray section-block">
        <div className="container">
          <div className="section-header text-center">
            <h2>Work Process</h2>
            <div className="divider-draft center"></div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="process"><div className="number"><span>01</span></div><div className="content"><h4>Conceptualize</h4><p>Brainstorm and outline the core features and functionality of the websites application, ensuring it aligns with user needs and business goals.</p></div></div>
            </div>
            <div className="col-md-3">
              <div className="process"><div className="number"><span>02</span></div><div className="content"><h4>Design</h4><p>Create intuitive and visually appealing UI/UX designs that provide seamless user experiences across all devices.</p></div></div>
            </div>
            <div className="col-md-3">
              <div className="process"><div className="number"><span>03</span></div><div className="content"><h4>Develop</h4><p>Build robust and scalable websites applications using the latest technologies, focusing on performance, security, and responsiveness.</p></div></div>
            </div>
            <div className="col-md-3">
              <div className="process last"><div className="number"><span>04</span></div><div className="content"><h4>Deploy &amp; Maintain</h4><p>Launch the websites application and provide ongoing support and updates to ensure it stays current with industry trends and user feedback.</p></div></div>
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
