import Link from "next/link";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Travel Work",
};

export default function TravelWorkPage() {
  return (
    <>
      <Link href="/" className="close-btn">
        <span></span>
        <span></span>
      </Link>

      <Preloader />

      <div id="wrapper">
        <section className="single-work">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <img src="https://images.pexels.com/photos/28586319/pexels-photo-28586319/free-photo-of-air-malta-airbus-a320-at-malta-international-airport.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Travel" />
              </div>

              <div className="col-md-4">
                <ul className="work-info">
                  <li>
                    <h4><i className="ion-ionic"></i>Client</h4>
                    <p>Personal</p>
                  </li>
                  <li>
                    <h4><i className="ion-ios-calendar-outline"></i>Date</h4>
                    <p>2024, July</p>
                  </li>
                  <li>
                    <h4><i className="ion-ios-clock-outline"></i>Time Taken</h4>
                    <p>1 Months </p>
                  </li>
                  <li>
                    <h4><i className="ion-link"></i>Link</h4>
                    <a href="https://toursand-travels.vercel.app/" target="_blank" rel="noopener noreferrer"><p>Travel</p></a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="work-content">
              <div className="block">
                <h4>Info</h4>
                <p>The travel website is a comprehensive platform designed to facilitate tour bookings, provide detailed travel information, and enhance the user experience. Built with a modern tech stack, the site allows users to explore various destinations, view available tours, and manage their bookings efficiently. The website features user account management, feedback submission, and a responsive design to ensure accessibility across devices. Engaging scroll animations and interactive content improve user experience, making it easy for travelers to find and book their desired tours.</p>
              </div>

              <div className="block row">
                <div className="col-md-6">
                  <h4>The Challenge</h4>
                  <p>During development, several challenges were encountered. One significant issue was ensuring that the website could handle a large volume of users simultaneously, especially during peak booking seasons. Another challenge was optimizing the loading speed of images and content to provide a seamless browsing experience. Additionally, implementing a secure payment processing system posed hurdles in ensuring user data protection. Maintaining a responsive design that worked well on various devices while incorporating visually appealing elements was also challenging.</p>
                </div>
                <div className="col-md-6">
                  <h4>The Solution</h4>
                  <p>To address the challenges, the website was optimized for performance by implementing lazy loading for images and utilizing a Content Delivery Network (CDN) to improve loading times. Scalability was enhanced by using cloud-based infrastructure, ensuring that the site could handle increased traffic during peak times. For secure payment processing, integration with reputable payment gateways was established, employing SSL encryption to protect user data during transactions. Responsive design principles were applied using CSS frameworks, ensuring that the site maintained its aesthetic appeal and functionality across different devices and screen sizes. Overall, these solutions created a robust, user-friendly travel website that meets the needs of modern travelers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer variant="work" />
      </div>
    </>
  );
}
