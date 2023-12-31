import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
// import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle');
}, []);

  return <Component {...pageProps} />
}

export default MyApp
