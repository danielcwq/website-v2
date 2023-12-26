import "@/styles/globals.css";
import Router from "next/router";
import Script from "next/script";
import { Open_Sans } from "next/font/google";
import { useState, useEffect } from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

import Navigation from "../components/Navigation";

const font = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", "G-QZJT2NSHP5", {
        page_path: url,
      });
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    Router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe from the event with the `off` method
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <main className={font.className}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Daniel Ching" />
        <title>Daniel Ching</title>
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <div className="container">
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-QZJT2NSHP5"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-QZJT2NSHP5');
        `}
        </Script>
      </div>
    </main>
  );
}
