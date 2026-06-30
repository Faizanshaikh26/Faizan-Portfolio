import Link from "next/link";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Symp - Personal Resume/CV HTML Template",
};

export default function PostPage() {
  return (
    <>
      <Link href="/" className="close-btn">
        <span></span>
        <span></span>
      </Link>

      <Preloader />

      <div id="wrapper">
        <section id="post" className="blog-page blog-section">
          <div className="posts-block section-block">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="post">
                    <div className="media">
                      <img src="/img/bg3.jpg" alt="symp" />
                    </div>
                    <div className="content">
                      <h4><a href="#">Simple Post With Image</a></h4>
                      <ul className="post-icons">
                        <li><i className="ion-ios-person"></i><span>Johny Doe</span></li>
                        <li><i className="ion-ios-clock"></i><span>14 June 2015</span></li>
                        <li><i className="ion-ios-chatbubble"></i><span>5</span></li>
                      </ul>
                      <p>
                        Cu illud lorem putent vel. Eum in movet nostrum referrentur. His ne tantas tractatos. Sit eu saperet antiopam scripserit. Ei albucius consequuntur sea, no nominavi fabellas phaedrum his.No dolorem blandit theophrastus eos, nam eu persecuti repudiandae, duo hinc vide aliquip et. Ex atqui voluptatibus eum, cu case intellegebat eum, mea ex regione patrioque signiferumque. Pri ei solet graecis. Ea appetere referrentur vituperatoribus cum, vix sanctus meliore cu. Nec in sale prima nostrud.
                        No dolorem blandit theophrastus eos, nam eu persecuti repudiandae, duo hinc vide aliquip et. Ex atqui voluptatibus eum, cu case intellegebat eum, mea ex regione patrioque signiferumque.
                      </p>
                      <p>
                        No dolorem blandit theophrastus eos, nam eu persecuti repudiandae, duo hinc vide aliquip et. Ex atqui voluptatibus eum, cu case intellegebat eum, mea ex regione patrioque signiferumque. Pri ei solet graecis. Ea appetere referrentur vituperatoribus cum, vix sanctus meliore cu. Nec in sale prima nostrud.
                      </p>
                    </div>
                  </div>

                  <div className="post-more">
                    <a href="#" className="more-link">Next Post</a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="sidebar">
                    <div className="sidebar-widget">
                      <div className="search-box">
                        <input type="text" placeholder="Search" className="search-input" />
                        <a className="search-btn" href="#"><i className="ion-ios-search"></i></a>
                      </div>
                    </div>

                    <div className="sidebar-widget">
                      <div className="categories-widget">
                        <div className="widget-header">
                          <h4><i className="ion-ios-folder"></i> Categories</h4>
                        </div>
                        <ul className="sidebar-list">
                          <li><a href="#">Web Design</a></li>
                          <li><a href="#">Travel</a></li>
                          <li><a href="#">Life Style</a></li>
                          <li><a href="#">Photography</a></li>
                          <li><a href="#">Technology</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="sidebar-widget">
                      <div className="widget-header">
                        <h4><i className="ion-ios-pricetag"></i> Tags</h4>
                      </div>
                      <ul className="sidebar-list list-inline">
                        <li><a href="#">Design</a></li>
                        <li><a href="#">Tech</a></li>
                        <li><a href="#">Web</a></li>
                        <li><a href="#">Modern</a></li>
                        <li><a href="#">Photography</a></li>
                        <li><a href="#">Life</a></li>
                        <li><a href="#">App</a></li>
                        <li><a href="#">Template</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer variant="post" name="Johny Doe" />
        </section>
      </div>
    </>
  );
}
