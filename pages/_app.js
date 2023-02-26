import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import '../public/assets/css/icofont.min.css';
import '../styles/globals.css'

import Header from '../components/Header'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Head>
      <title>PokeMMO Marketplace</title>
      <meta name="description" content="PokeMMO Marketplace is where you can buy and sell your PokeMMO assets." />
      <link rel="icon" type="image/png" href="assets/images/favicon.png" />
    </Head>
    <Header></Header>
    <Component {...pageProps} />
    <Footer></Footer>
  </div>
  
  )
}

export default MyApp
