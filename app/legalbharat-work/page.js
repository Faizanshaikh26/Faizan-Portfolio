import Link from "next/link";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "LegalBharat Work",
};

export default function LegalBharatWorkPage() {
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
                <img src="/img/legalbharat-placeholder.jpg" alt="LegalBharat" />
              </div>

              <div className="col-md-4">
                <ul className="work-info">
                  <li>
                    <h4><i className="ion-ionic"></i>Client</h4>
                    <p>Personal</p>
                  </li>
                  <li>
                    <h4><i className="ion-ios-calendar-outline"></i>Date</h4>
                    <p>2024, December</p>
                  </li>
                  <li>
                    <h4><i className="ion-ios-clock-outline"></i>Time Taken</h4>
                    <p>3 Months</p>
                  </li>
                  <li>
                    <h4><i className="ion-link"></i>Link</h4>
                    <a href="https://legalbharat.org/" target="_blank" rel="noopener noreferrer" className="symp-btn" style={{ display: "inline-block", color: "#fff", padding: "6px 12px", fontSize: "13px" }}>Visit Live Site</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="work-content">
              <div className="block">
                <h4>Info</h4>
                <p>
                  LegalBharat is a legal technology platform designed for the Indian legal ecosystem. It combines a complete practice management system for advocates with a public legal insights portal, offering AI-assisted drafting, case management, hearing schedules, GST billing, and simplified legal knowledge in one unified platform.
                </p>
              </div>

              <div className="block row">
                <div className="col-md-6">
                  <h4>The Challenge</h4>
                  <p>
                    Legal professionals often rely on multiple disconnected tools to manage cases, client information, billing, hearings, and legal documentation. At the same time, legal information is difficult for students and the general public to understand due to complex legal language and scattered resources.
                  </p>
                </div>
                <div className="col-md-6">
                  <h4>The Solution</h4>
                  <p>
                    LegalBharat unifies legal practice management and legal education into a single platform. Advocates can efficiently manage their daily workflow with AI-powered tools, while students, researchers, and citizens gain access to simplified legal insights and judgment summaries, making legal services more organized, accessible, and technology-driven.
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
