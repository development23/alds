import React from "react";
import "./globals.css";
import Router from "next/router";
import LinearProgress from "@material-ui/core/LinearProgress";
import Layout from "./../../layouts/global/index";

export default function App({ Component, pageProps, router }) {
  const [isReady, setIsReady] = React.useState(true);

  Router.events.on("routeChangeStart", (url) => {
    setIsReady(false);
  });
  Router.events.on("routeChangeComplete", (url) => {
    // console.log("Routing Done..");
    setIsReady(true);
  });

  return (
    <Layout>
      {!isReady && (
        <div>
          <div className="fixed w-full bottom-0 z-50">
            <LinearProgress color="secondary" />
          </div>
          <div className="fixed w-full top-0 z-50">
            <LinearProgress color="secondary" />
          </div>
        </div>
      )}
      <Component {...pageProps} />
    </Layout>
  );
}
