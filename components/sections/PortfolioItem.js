import Link from "next/link";

export default function PortfolioItem({ title, img, link, groups, hasPopup = true, onLoad }) {
  return (
    <div className="item" data-groups={JSON.stringify(groups)}>
      <div className="inner">
        <img alt={title} src={img} onLoad={onLoad} />
        <div className="caption">
          <div className="caption-inner">
            <h4>{title}</h4>
            <ul className="links">
              <li>
                <Link href={link}>
                  <i className="ion-ios-plus-empty"></i>
                </Link>
              </li>
              <li>
                <a href={img} className={hasPopup ? "image-link" : undefined}>
                  <i className="ion-ios-search"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
