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

  const animatedTexts = ['New Projects', 'GharPadharo'];
  const [textIndex, setTextIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % animatedTexts.length);
        setFade(false);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0); // Default Buy active

  return (
    <section className="mt-8 mb-4 max-w-6xl mx-auto px-4">
      <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 relative">
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
                text-base font-medium inline-block transition-all duration-300
                ${activeIndex === index ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}
              `}
            >
              {link.name === 'New Projects' ? (
                <span
                  className={`
                    inline-block transition-opacity duration-300 ease-in-out
                    ${fade ? 'opacity-0' : 'opacity-100'}
                    ${animatedTexts[textIndex] === 'GharPadharo' ? 'text-red-600 italic font-bold' : ''}
                  `}
                >
                  {animatedTexts[textIndex]}
                </span>
              ) : (
                link.name
              )}
            </a>

            {/* Red underline only on active or hover */}
            <span
              className={`absolute bottom-[-2px] left-0 h-[3px] w-full transition-all duration-300 ${
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
