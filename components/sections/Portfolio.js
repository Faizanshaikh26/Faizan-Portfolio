"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import PortfolioItem from "./PortfolioItem";

const portfolioItems = [
  {
    title: "Cara E-comerce",
    img: "https://cdn.pixabay.com/photo/2021/08/23/14/50/online-shopping-6567977_1280.png",
    link: "/work",
    groups: ["all", "web-apps"],
    hasPopup: true,
  },
  {
    title: "InstaChat Application",
    img: "https://cdn.pixabay.com/photo/2023/07/26/08/48/chatgpt-8150683_960_720.jpg",
    link: "/chat-work",
    groups: ["all", "web-apps"],
    hasPopup: true,
  },
  {
    title: "Travel websites",
    img: "https://images.pexels.com/photos/28586319/pexels-photo-28586319/free-photo-of-air-malta-airbus-a320-at-malta-international-airport.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/travel-work",
    groups: ["all", "websites", "tech"],
    hasPopup: false,
  },
  {
    title: "Music-App",
    img: "https://images.pexels.com/photos/21022/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    link: "/music-work",
    groups: ["all", "websites"],
    hasPopup: true,
  },
  {
    title: "Spotify-Clone",
    img: "https://images.pexels.com/photos/218686/pexels-photo-218686.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/spotify-work",
    groups: ["all", "web-apps"],
    hasPopup: true,
  },
  {
    title: "Musify",
    img: "https://images.pexels.com/photos/16773548/pexels-photo-16773548/free-photo-of-youtube-music-stream-songs-and-music-videos-app-on-the-display-of-smartphone-or-tablet.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/musify-work",
    groups: ["all", "web-apps"],
    hasPopup: true,
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [loadedCount, setLoadedCount] = useState(0);

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  useEffect(() => {
    let interval;
    let observer;

    const init = () => {
      const $ = window.$;
      if ($ && $.fn.shuffle) {
        const grid = $('#portfolio-grid');
        if (grid.length > 0) {
          // Initialize shuffle
          grid.shuffle({
            itemSelector: '.item'
          });
          clearInterval(interval);

          // Monitor for overlay container becoming active
          const sectionEl = document.getElementById("portfolio");
          if (sectionEl) {
            observer = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                  const isVisible = sectionEl.classList.contains("active");
                  if (isVisible) {
                    // Update grid layout calculations after visible display properties take effect
                    setTimeout(() => {
                      if ($('#portfolio-grid').data('shuffle')) {
                        grid.shuffle('update');
                      }
                    }, 200);
                  }
                }
              });
            });
            observer.observe(sectionEl, { attributes: true });
          }
        }
      }
    };

    interval = setInterval(init, 100);

    // Safeguard: trigger update at 1s for any slow-loading resources
    const timeout = setTimeout(() => {
      const $ = window.$;
      if ($ && $('#portfolio-grid').data('shuffle')) {
        $('#portfolio-grid').shuffle('update');
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  // Update layout calculation whenever another image completes loading
  useEffect(() => {
    const $ = window.$;
    if ($ && $('#portfolio-grid').data('shuffle')) {
      $('#portfolio-grid').shuffle('update');
    }
  }, [loadedCount]);

  const handleFilterClick = (e, group) => {
    e.preventDefault();
    setActiveFilter(group);
    const $ = window.$;
    if ($ && $('#portfolio-grid').data('shuffle')) {
      $('#portfolio-grid').shuffle('shuffle', group);
    }
  };

  return (
    <section id="portfolio" className="portfolio-section section">
      <div className="portfolio-block section-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="section-header text-center">
                <h2 className="animate text-over-block">Portfolio</h2>
                <div className="divider-draft center"></div>
                <p> Discover the work I&apos;ve done, showcasing a range of skills and creativity. Each project reflects my dedication and passion for web development. </p>
              </div>
            </div>
          </div>

          <div id="portfolio-filters">
            <ul>
              <li>
                <a 
                  href="#" 
                  data-group="all" 
                  className={activeFilter === "all" ? "active" : ""}
                  onClick={(e) => handleFilterClick(e, "all")}
                >
                  All
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  data-group="websites" 
                  className={activeFilter === "websites" ? "active" : ""}
                  onClick={(e) => handleFilterClick(e, "websites")}
                >
                  Websites
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  data-group="web-apps" 
                  className={activeFilter === "web-apps" ? "active" : ""}
                  onClick={(e) => handleFilterClick(e, "web-apps")}
                >
                  Web-Apps
                </a>
              </li>
            </ul>
          </div>

          <div id="portfolio-grid" className="portfolio-items">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                title={item.title}
                img={item.img}
                link={item.link}
                groups={item.groups}
                hasPopup={item.hasPopup}
                onLoad={handleImageLoad}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer variant="index" />
    </section>
  );
}
