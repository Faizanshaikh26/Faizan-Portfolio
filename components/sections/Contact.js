import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <section id="contact" className="contact-section section">
      <div className="contact-block section-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="section-header text-center">
                <h2 className="animate text-over-block">Contact Me</h2>
                <div className="divider-draft center"></div>
                <p>I&apos;m available for freelancing. If you want something to be built or just to say hi, feel free to shoot me a message.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <form id="contact-form" className="contact-form" action="/api/contact" method="post" data-toggle="validator">
                <div id="contact-form-result"></div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" name="name" className="form-control" placeholder="Name" required />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" name="email" className="form-control" placeholder="Email" required />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" name="phone" className="form-control" placeholder="Phone" required />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" name="city" className="form-control" placeholder="City" required />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea rows="5" name="message" className="form-control" placeholder="Message" required></textarea>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="symp-btn">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer variant="index" />
    </section>
  );
}
