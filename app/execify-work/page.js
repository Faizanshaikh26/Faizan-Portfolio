import Link from "next/link";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Execify Work",
};

export default function ExecifyWorkPage() {
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
                <img src="/img/execify-placeholder.jpg" alt="Execify" />
              </div>

              <div className="col-md-4">
                <ul className="work-info">
                  <li>
                    <h4><i className="ion-ionic"></i>Client</h4>
                    <p>Personal</p>
                  </li>
                  <li>
                    <h4><i className="ion-ios-calendar-outline"></i>Date</h4>
                    <p>2024, November</p>
                  </li>
                  <li>
                    <h4><i className="ion-ios-clock-outline"></i>Time Taken</h4>
                    <p>2 Months</p>
                  </li>
                  <li>
                    <h4><i className="ion-link"></i>Link</h4>
                    <a href="https://execify.onrender.com/" target="_blank" rel="noopener noreferrer" className="symp-btn" style={{ display: "inline-block", color: "#fff", padding: "6px 12px", fontSize: "13px" }}>Visit Live Site</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="work-content">
              <div className="block">
                <h4>Info</h4>
                <p>
                  Execify is a modern SaaS productivity platform built to help individuals and teams transform ideas into actionable workflows. It provides an intuitive workspace for organizing tasks, tracking progress, and collaborating efficiently, enabling users to focus on execution instead of managing complexity.
                </p>
              </div>

              <div className="block row">
                <div className="col-md-6">
                  <h4>The Challenge</h4>
                  <p>
                    Most productivity tools either overwhelm users with unnecessary features or lack the flexibility required for real-world project execution. Users often struggle with scattered tasks, poor collaboration, and inefficient workflow management, resulting in lower productivity.
                  </p>
                </div>
                <div className="col-md-6">
                  <h4>The Solution</h4>
                  <p>
                    Execify delivers a clean, scalable, and user-friendly platform that centralizes task management and collaboration into a single workspace. With an intuitive interface and streamlined workflows, it helps users plan, organize, and execute projects efficiently while reducing unnecessary complexity.
                  </p>
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
