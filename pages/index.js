import Head from 'next/head';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import MainPage from '../Components/Common/MainPage/MainPage';
import ScrollToTop from '../Utils/ScrollToTop/ScrollToTop';



export default function Home() {

  return (
    <>
      <Head>
        <title>Clan Crop</title>
      </Head>
      <ScrollToTop />
      <Header />
      <MainPage />
      <Footer />
    </>
  )
}
