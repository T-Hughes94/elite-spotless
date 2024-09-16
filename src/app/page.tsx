import Image from "next/image";
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUsHome from './components/AboutUsHome';

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <AboutUsHome/>
    </>
  );
}
