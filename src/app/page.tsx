import Head from 'next/head'; // Import Head for SEO metadata
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUsHome from './components/AboutUsHome';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      {/* Metadata for SEO */}
      <Head>
        <title>Elite Spotless Cleaning - Home</title>
        <meta name="description" content="Elite Spotless Cleaning offers top-notch residential, post-construction, and move-out cleaning services in New York City." />
        <meta name="keywords" content="cleaning services, residential cleaning, post-construction cleaning, move-out cleaning, cleaning NYC, professional cleaning services" />
        <meta name="author" content="Elite Spotless Cleaning" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Elite Spotless Cleaning - Home" />
        <meta property="og:description" content="Top-notch residential, post-construction, and move-out cleaning services in New York City." />
        <meta property="og:image" content="/path-to-image.jpg" /> {/* Update with the correct image path */}
        <meta property="og:url" content="https://www.elitespotlesscleaning.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elite Spotless Cleaning - Home" />
        <meta name="twitter:description" content="Top-notch residential, post-construction, and move-out cleaning services in New York City." />
        <meta name="twitter:image" content="/path-to-image.jpg" /> {/* Update with the correct image path */}

        {/* Favicons */}
        <link rel="icon" href="/favicon.png" type="image/png" />

      </Head>

      <Header />
      <Hero />
      <Services />
      <AboutUsHome />
      <QuoteForm />
      <Footer />
    </>
  );
}

