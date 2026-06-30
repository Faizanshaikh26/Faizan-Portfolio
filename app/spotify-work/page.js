import Link from "next/link";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Spotify Work",
};

export default function SpotifyWorkPage() {
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
                <img src="https://images.pexels.com/photos/218686/pexels-photo-218686.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Spotify" />
              </div>

              <div className="col-md-4">
                <ul className="work-info">
                  <li>
                    <h4><i className="ion-ionic"></i>Client</h4>
                    <p>Personal</p>
                  </li>
                  <li>
                    <h4><i className="ion-ios-calendar-outline"></i>Date</h4>
                    <p>2023, January</p>
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
                <p>Faizan&apos;s Spotify clone is a web application built using HTML, CSS, and JavaScript, aiming to replicate the core features of the popular music streaming platform. The app allows users to browse and play songs with a visually appealing interface that mirrors the Spotify design. It includes features like a functional music player, album and artist sections, and a navigation bar for exploring different categories. The app focuses on delivering smooth interactions and responsive design, ensuring a user-friendly experience across all devices.</p>
              </div>

              <div className="block row">
                <div className="col-md-6">
                  <h4>The Challenge</h4>
                  <p>During the development of the Spotify clone, several challenges emerged. One major hurdle was replicating Spotify&apos;s complex and highly interactive UI with just HTML, CSS, and JavaScript, while maintaining performance and usability. Another challenge was creating a seamless music playback experience, including functionalities like play/pause, volume control, and song progress tracking. Ensuring the app was responsive and worked well on various screen sizes was also difficult, especially with a feature-rich interface. Additionally, managing multiple media files without the backend posed limitations in terms of scalability and data management.</p>
                </div>
                <div className="col-md-6">
                  <h4>The Solution</h4>
                  <p>To overcome these challenges, the UI was carefully structured using flexbox and grid in CSS, allowing for a clean and responsive design that mimics Spotify&apos;s layout. JavaScript was used extensively to handle media controls, creating a functional music player with play/pause buttons, volume adjustments, and a dynamic progress bar. For responsiveness, media queries were implemented to ensure the app maintained its visual integrity across devices. Though the app doesn&apos;t incorporate a backend, local storage was used to manage basic functionality, allowing for smooth interactions without server-side support. These solutions created a solid frontend foundation for the Spotify clone, offering a visually engaging and functional music streaming experience.</p>
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
