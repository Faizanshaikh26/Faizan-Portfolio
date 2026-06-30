import Link from "next/link";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Music Work",
};

export default function MusicWorkPage() {
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
                <img src="https://images.pexels.com/photos/21022/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="music" />
              </div>

              <div className="col-md-4">
                <ul className="work-info">
                  <li>
                    <h4><i className="ion-ionic"></i>Client</h4>
                    <p>Personal</p>
                  </li>
                  <li>
                    <h4><i className="ion-ios-calendar-outline"></i>Date</h4>
                    <p>2024, June</p>
                  </li>
                  <li>
                    <h4><i className="ion-ios-clock-outline"></i>Time Taken</h4>
                    <p>1 Months </p>
                  </li>
                  <li>
                    <h4><i className="ion-link"></i>Link</h4>
                    <p>Error occured</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="work-content">
              <div className="block">
                <h4>Info</h4>
                <p>The music app Faizan developed using the MERN stack is a full-stack application that integrates a custom-built REST API to serve songs from the backend. The app allows users to browse and play music while ensuring a seamless interaction between the front-end and back-end. Built with MongoDB, Express.js, React, and Node.js, it provides a fluid and responsive user experience, featuring song lists and dynamic content fetched directly from the server. The API handles requests efficiently, ensuring users can stream music with minimal latency.</p>
              </div>

              <div className="block row">
                <div className="col-md-6">
                  <h4>The Challenge</h4>
                  <p>One of the primary challenges was designing an efficient API for song data management, including fetching, streaming, and handling various media formats. Ensuring fast loading times for song data without overloading the server was another major hurdle. Additionally, integrating real-time data fetching from the backend while maintaining a smooth UI required careful attention to performance optimization. Another challenge was managing the database, ensuring proper storage and retrieval of song data in MongoDB, especially with large datasets. Creating a user-friendly front-end that could easily handle song interactions while maintaining responsive design across devices posed difficulties as well.</p>
                </div>
                <div className="col-md-6">
                  <h4>The Solution</h4>
                  <p>The challenge of handling large datasets and media files was solved by optimizing the API to deliver song data in chunks, reducing server load and improving streaming performance. Efficient caching techniques were implemented to enhance data retrieval speed, and database queries were optimized to handle multiple song requests smoothly. On the front-end, React&apos;s state management was used to streamline song fetching and playback, ensuring the UI remained responsive while interacting with the backend. Finally, careful UI design with Material-UI and CSS ensured a consistent experience across all devices.</p>
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
