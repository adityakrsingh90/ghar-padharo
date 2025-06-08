// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import SecondaryNav from './components/SecondaryNav';
import SearchBar from './components/SearchBar';
import QuickLinks from './components/QuickLinks';
import AdBanner from './components/AdBanner';
import PgListingSection from './components/PgListingSection';
import Footer from './components/Footer'; // Naya component import kiya

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col"> {/* Added flex flex-col */}
      <Navbar />
      <SecondaryNav />
      <main className="p-4 flex-grow"> {/* Added flex-grow */}
        <h1 className="
            text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
            font-black text-gray-900 text-center
            mt-12 mb-8
            leading-tight tracking-tighter lg:tracking-normal
            max-w-5xl mx-auto
            "
        >
          Find a home you'll{' '}
          <span className="
            italic
            font-serif
            text-red-600
            font-custom-love
          ">
            love
          </span>
        </h1>
        <QuickLinks />

        {/* SearchBar aur AdBanner section */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-stretch gap-4 mt-6">
          <div className="w-full lg:w-3/4">
            <SearchBar />
          </div>
          <div className="w-full lg:w-1/4">
            <AdBanner />
          </div>
        </div>

        {/* PgListingSection ab categories aur listings dono ko display karega */}
        <PgListingSection />

        {/* Agli sections yahan aayengi */}
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;