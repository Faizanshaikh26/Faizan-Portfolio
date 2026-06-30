import Link from "next/link";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <section id="blog" className="blog-section section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="section-header text-center">
              <h2>My Blog</h2>
              <div className="divider-draft center"></div>
              <p>This is my blog where my thoughts live. Check it out to know more about me. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="posts-block section-block">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {[1, 2, 3].map((i) => (
                <div className="post" key={i}>
                  <div className="media"><img alt="media-bg" src="/img/bg2.jpg" /></div>
                  <div className="content">
                    <h4><Link href="/post">Simple Post With Image</Link></h4>
                    <ul className="post-icons">
                      <li><i className="ion-ios-person"></i><span>Johny Doe</span></li>
                      <li><i className="ion-ios-clock"></i><span>14 June 2015</span></li>
                      <li><i className="ion-ios-chatbubble"></i><span>5</span></li>
                    </ul>
                    <p>Cu illud lorem putent vel. Eum in movet nostrum referrentur. His ne tantas tractatos. Sit eu saperet antiopam scripserit. Ei albucius consequuntur sea, no nominavi fabellas phaedrum his....</p>
                    <Link href="/post" className="read-more">Read More <i className="ion-ios-arrow-thin-right"></i></Link>
                  </div>
                </div>
              ))}
              <div className="post-more"><a href="#" className="more-link">Load More</a></div>
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
                    <div className="widget-header"><h4><i className="ion-ios-folder"></i> Categories</h4></div>
                    <ul className="sidebar-list">
                      <li><a href="#">Websites Design</a></li>
                      <li><a href="#">Travel</a></li>
                      <li><a href="#">Life Style</a></li>
                      <li><a href="#">Web-Apps</a></li>
                      <li><a href="#">Technology</a></li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget">
                  <div className="widget-header"><h4><i className="ion-document"></i> Recent Posts</h4></div>
                  <ul className="sidebar-list">
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i}><a href="#">Your Recent Post&apos;s Title. Lorem ipsum dolor sit amet is simply a dummy text.</a></li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar-widget">
                  <div className="widget-header"><h4><i className="ion-archive"></i> Archives</h4></div>
                  <ul className="sidebar-list">
                    <li><a href="#">June (14)</a></li>
                    <li><a href="#">July (10)</a></li>
                    <li><a href="#">August(6)</a></li>
                    <li><a href="#">September(7)</a></li>
                  </ul>
                </div>
                <div className="sidebar-widget">
                  <div className="widget-header"><h4><i className="ion-ios-pricetag"></i> Tags</h4></div>
                  <ul className="sidebar-list list-inline">
                    {["Design", "Tech", "Websites", "Modern", "Web-Apps", "Life", "App", "Template"].map((tag) => (
                      <li key={tag}><a href="#">{tag}</a></li>
                    ))}
                  </ul>
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
