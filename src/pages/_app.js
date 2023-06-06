// react imports
import { useState, useEffect } from "react";

//  global css file
import "@/styles/globals.css";

// toaster library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// material ui

import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";

// redux
import { Provider } from "react-redux";
import { store } from "@/store/store";

// next imports
import Router from "next/router";

// route change progress bar
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// layout
import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  const theme = createTheme({
    typography: {
      fontFamily: "Open Sans, sans-serif",
    },
  });
  return (
    <>
      <StyledEngineProvider injectFirst>
        {!loading && (
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
            <ToastContainer
              autoClose={2000}
              hideProgressBar={true}
              closeOnClick
              pauseOnHover
              draggable={true}
              position="top-right"
              toastClassName=""
              bodyClassName=""
              progressClassName=""
              pauseOnFocusLoss={true}
              newestOnTop={true}
              theme="colored"
            />
          </Provider>
        )}
      </StyledEngineProvider>
    </>
  );
}
