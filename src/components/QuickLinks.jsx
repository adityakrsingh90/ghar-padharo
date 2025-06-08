import React, { useState, useEffect } from 'react';

const QuickLinks = () => {
  const initialLinks = [
    { name: 'Buy', href: '#buy' },
    { name: 'Rent', href: '#rent' },
    { name: 'New Projects', href: '#new-projects' },
    { name: 'PG', href: '#pg' },
    { name: 'Plot', href: '#plot' },
    { name: 'Commercial', href: '#commercial' },
    { name: 'Post Free Property Ads', href: '#post-ad' },
  ];

  const textsToCycle = ['New Projects', 'GharPadharo'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayingText, setDisplayingText] = useState(textsToCycle[0]);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textsToCycle.length);
        setIsFadingOut(false);
      }, 250);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayingText(textsToCycle[currentIndex]);
  }, [currentIndex]);

  return (
    <section className="mt-8 mb-4 max-w-6xl mx-auto px-4">
      <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 relative">
        {initialLinks.map((link, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(0)}
          >
            <a
              href={link.href}
              className={`
                text-base font-medium transition-all duration-200 
                whitespace-nowrap inline-flex items-center justify-center pb-1
                ${activeIndex === index ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}
              `}
              style={{ minWidth: '100px', height: '24px' }}
            >
              {link.name === 'New Projects' ? (
                <span
                  key={displayingText}
                  className={`
                    absolute top-0 left-0 right-0 bottom-0
                    flex items-center justify-center
                    transition-opacity duration-300 ease-out
                    ${isFadingOut ? 'opacity-0' : 'opacity-100'}
                    animate-swipe-up
                    ${displayingText === 'GharPadharo' ? 'text-red-600 font-bold italic' : ''}
                  `}
                >
                  {displayingText}
                </span>
              ) : (
                link.name
              )}
            </a>

            {/* Bold underline */}
            <span
              className={`absolute bottom-0 left-0 h-[6px] w-full transition-all duration-500 ${
                activeIndex === index ? 'bg-red-600' : 'bg-transparent'
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
