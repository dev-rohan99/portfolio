import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';  
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {store} from '../app/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose={5000}
        limit={3}
      />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;
