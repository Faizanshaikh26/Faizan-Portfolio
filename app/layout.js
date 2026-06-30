import Script from "next/script";

import BodyClassReset from "@/components/BodyClassReset";

export const metadata = {
  title: "Faizan's Portfolio",
  description: "Faizan Shaikh - Web Developer Portfolio",
  charset: "utf-8",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html className="no-js">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="stylesheet" type="text/css" href="/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/ionicons.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/owl.carousel.css" />
        <link rel="stylesheet" type="text/css" href="/css/owl.theme.css" />
        <link rel="stylesheet" type="text/css" href="/css/owl.transitions.css" />
        <link rel="stylesheet" type="text/css" href="/css/magnific-popup.css" />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        <link rel="stylesheet" type="text/css" href="/css/color-default.css" />
      </head>
      <body>
        <BodyClassReset />
        {children}

        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.stellar.min.js" strategy="afterInteractive" />
        <Script src="/js/modernizr.js" strategy="afterInteractive" />
        <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.shuffle.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/validator.min.js" strategy="afterInteractive" />
        <Script src="/js/smoothscroll.js" strategy="afterInteractive" />
        <Script src="/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
