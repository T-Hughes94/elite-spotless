import Image from "next/image";
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUsHome from './components/AboutUsHome';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <AboutUsHome/>
      <QuoteForm/>
      <Footer/>
    </>
  );
}
