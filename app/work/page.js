import Link from "next/link";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CaraEcomerce Work",
};

export default function WorkPage() {
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
                <img src="https://cdn.pixabay.com/photo/2021/08/23/14/50/online-shopping-6567977_1280.png" alt="CaraEcomerce" />
              </div>

              <div className="col-md-4">
                <ul className="work-info">
                  <li>
                    <h4><i className="ion-ionic"></i>Client</h4>
                    <p>Personal</p>
                  </li>
                  <li>
                    <h4><i className="ion-ios-calendar-outline"></i>Date</h4>
                    <p>2024,February</p>
                  </li>
                  <li>
                    <h4><i className="ion-ios-clock-outline"></i>Time Taken</h4>
                    <p>2.8+ Months </p>
                  </li>
                  <li>
                    <h4><i className="ion-link"></i>Link</h4>
                    <a href="https://cara-ecomerce-amber.vercel.app/ " target="_blank" rel="noopener noreferrer"><p>CaraEcomerce</p></a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="work-content">
              <div className="block">
                <h4>Info</h4>
                <p>
                  Developed a responsive MERN stack ecommerce application with a modern and
                  user-friendly UI.
                  Features include user account creation, login, and password recovery. The app
                  allows users to manage their shopping cart with add and remove options and
                  includes various sections such as About, Contact, Shop, and Blog.
                  Integrated Stripe for secure payments, providing a seamless checkout
                  experience.
                  Upon successful payment, users are redirected to a page displaying detailed
                  order information.
                </p>
              </div>

              <div className="block row">
                <div className="col-md-6">
                  <h4>The Challenge</h4>
                  <p>
                    The challenge was to develop a fully responsive MERN stack ecommerce application with a modern and user-friendly interface. Key requirements included implementing secure user account creation, login, and password recovery features. Additionally, the app needed to manage a dynamic shopping cart with add and remove options and organize content across sections like About, Contact, Shop, and Blog.
                    Integrating Stripe for secure payments posed another challenge, requiring a seamless checkout experience and accurate order information display upon successful transactions.
                  </p>
                </div>
                <div className="col-md-6">
                  <h4>The Solution</h4>
                  <p>
                    To address the challenges, I developed a responsive MERN stack ecommerce application with a clean, modern UI that ensures a seamless user experience. I implemented secure user authentication, including account creation, login, and password recovery features, making user management straightforward.
                    For the shopping cart, I provided dynamic add and remove functionality, ensuring users can easily manage their purchases. The app also organizes content across various sections such as About, Contact, Shop, and Blog for better navigation.
                    Integrating Stripe allowed for secure and smooth transactions, with a redirect to a detailed order information page post-payment, ensuring users have a transparent and reliable checkout experience.
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
