import React from 'react';
import Navbar from './components/NavbarWithSecondaryNav';
import SearchBar from './components/SearchBar';
import QuickLinks from './components/QuickLinks';
import AdBanner from './components/AdBanner';
import PgListingSection from './components/PgListingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />
      

      {/* Main Content */}
      <main className="p-4 flex-grow">
        {/* Hero Heading */}
        <h1
          className="
            text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
            font-black text-gray-900 text-center
            mt-12 mb-8
            leading-tight tracking-tighter lg:tracking-normal
            max-w-5xl mx-auto
          "
        >
          Find a home you'll{' '}
          <span
            className="
              italic
              font-serif
              text-red-600
              font-custom-love
            "
          >
            love
          </span>
        </h1>

        {/* Quick Links */}
        <QuickLinks />

        {/* Search and Advertisement Section */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-stretch gap-4 mt-6">
          <div className="w-full lg:w-3/4">
            <SearchBar />
          </div>
          <div className="w-full lg:w-1/4">
            <AdBanner />
          </div>
        </div>

        {/* PG Listings */}
        <PgListingSection />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
