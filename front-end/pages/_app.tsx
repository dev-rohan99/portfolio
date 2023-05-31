import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiSlice } from "../redux/api/apiSlice";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider api={apiSlice}>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose={5000}
        limit={3}
      />
      <Component {...pageProps} />
    </ApiProvider>
  )
}

export default MyApp;
