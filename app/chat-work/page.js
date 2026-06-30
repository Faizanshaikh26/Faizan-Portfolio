import Link from "next/link";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "InstaChat Work",
};

export default function ChatWorkPage() {
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
                <img src="https://cdn.pixabay.com/photo/2023/07/26/08/48/chatgpt-8150683_960_720.jpg" alt="InstaChat" />
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
                    <p>1.5 Months </p>
                  </li>
                  <li>
                    <h4><i className="ion-link"></i>Link</h4>
                    <a href="https://instachat-v1-chat.vercel.app/" target="_blank" rel="noopener noreferrer"><p>InstaChat</p></a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="work-content">
              <div className="block">
                <h4>Info</h4>
                <p>InstaChat is a full-stack, real-time chat application built with the MERN stack, featuring user authentication, real-time messaging, profile management, and a responsive UI. The app uses Socket.IO for instant communication, and MUI and Tailwind CSS for design.</p>
              </div>

              <div className="block row">
                <div className="col-md-6">
                  <h4>The Challenge</h4>
                  <p>InstaChat encountered several challenges during development. One significant issue involved Socket.IO, where real-time messaging worked locally but failed after deployment, causing communication problems. As the user base grew, performance lag became noticeable, particularly with user searches, affecting responsiveness. Handling large profile image uploads efficiently without overloading the server was another hurdle. Additionally, profile updates were not immediately reflected in the UI, causing delays in displaying changes. Ensuring full responsiveness and a consistent user experience across various devices also presented a design challenge.</p>
                </div>
                <div className="col-md-6">
                  <h4>The Solution</h4>
                  <p>InstaChat is a dynamic full-stack chat application built with the MERN stack, including MongoDB, Express.js, React, and Node.js. It facilitates real-time communication, allowing users to send and receive messages instantly for both casual and professional interactions. The app features secure user authentication with JSON Web Tokens (JWT) for data protection. Real-time messaging is powered by Socket.IO, enabling seamless interactions. Users can manage their profiles easily, updating personal details and profile pictures. The modern, responsive UI is crafted with Material-UI (MUI) and Tailwind CSS, ensuring compatibility across devices.</p>
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
