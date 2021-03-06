import '../styles/global.css'
import Head from 'next/head'
import Layout from '../components/layout';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <script 
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js" 
            crossorigin="anonymous"
            />
        <script 
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" 
            crossorigin="anonymous"
            />
        <script 
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" 
            crossorigin="anonymous"
            />
        <link 
            rel="stylesheet" 
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
            crossorigin="anonymous"
            />
    </Head>
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  </>
);
}