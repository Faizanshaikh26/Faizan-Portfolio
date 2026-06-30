export default function Footer({ name = "Faizan Shaikh", variant = "index", socialLinks }) {
  const defaultIndexLinks = [
    { href: "https://www.facebook.com/search/top/?q=Faizan%20Sheikh", icon: "ion-social-facebook" },
    { href: "https://www.linkedin.com/in/faizanshaikh0326/", icon: "ion-social-linkedin" },
    { href: "https://www.instagram.com/faizan_0326?igsh=MXh3dmpybmtja2drbQ==", icon: "ion-social-instagram" },
    { href: "#", icon: "ion-social-pinterest" },
  ];

  const defaultWorkLinks = [
    { href: "#", icon: "ion-social-facebook" },
    { href: "#", icon: "ion-social-twitter" },
    { href: "#", icon: "ion-social-pinterest" },
    { href: "#", icon: "ion-social-dribbble" },
  ];

  const links = socialLinks || (variant === "work" || variant === "post" ? defaultWorkLinks : defaultIndexLinks);
  const colClass = variant === "work" || variant === "post" ? "col-md-6" : "col-xs-6";

  return (
    <div className="footer bg-lightgray section-block">
      <div className="container">
        <div className="row">
          <div className={`${colClass} text-left`}>
            <h4>{name}</h4>
          </div>
          <div className={`${colClass} text-right`}>
            <ul className="footer-social">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>
                    <i className={link.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
