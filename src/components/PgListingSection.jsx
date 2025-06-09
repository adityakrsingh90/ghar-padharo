import React from 'react';
import Card from './Card';
import ListingCard from './ListingCard';

import studentPgImg from '../assets/1.webp';
import girlsPgImg from '../assets/2.webp';
import boysPgImg from '../assets/3.webp'; 
import hostelGirlsImg from '../assets/4.webp'; 

import pg1 from '../assets/f1.jpg';
import pg2 from '../assets/f2.jpg';
import pg3 from '../assets/f3.jpg';
import pg4 from '../assets/f4.jpg';
import pg5 from '../assets/f5.jpg';
import pg6 from '../assets/f6.jpg';

const PgListingSection = () => {
  const pgCategories = [
    {
      id: 1,
      title: "Student Friendly PG's",
      image: studentPgImg,
      link: "#student-friendly-pgs"
    },
    {
      id: 2,
      title: "PG for Girls",
      image: girlsPgImg,
      link: "#pg-for-girls"
    },
    {
      id: 3,
      title: "PG for Boys",
      image: boysPgImg,
      link: "#pg-for-boys"
    },
    {
      id: 4,
      title: "Hostel for Girls",
      image: hostelGirlsImg,
      link: "#hostel-for-girls"
    }
  ];

  const dummyPgListings = [
    {
      id: 101,
      name: "The Grand Residency",
      location: "Dehradun",
      price: "8,500",
      image: pg1,
      features: ["Wi-Fi", "Food", "Laundry"],
      link: "#pg-listing-1"
    },
    {
      id: 102,
      name: "Sunrise Hostels",
      location: "Dehradun",
      price: "7,000",
      image: pg2,
      features: ["Attached Washroom", "AC", "Power Backup"],
      link: "#pg-listing-2"
    },
    {
      id: 103,
      name: "Girls Den PG",
      location: "Dehradun",
      price: "9,200",
      image: pg3,
      features: ["Food", "Security", "RO Water"],
      link: "#pg-listing-3"
    },
    {
      id: 104,
      name: "Boys Hub Hostel",
      location: "Dehradun",
      price: "6,800",
      image: pg4,
      features: ["Wi-Fi", "Laundry", "Mess"],
      link: "#pg-listing-4"
    },
    {
      id: 105,
      name: "City Living PG",
      location: "Dehradun",
      price: "7,500",
      image: pg5,
      features: ["Attached Bathroom", "Balcony"],
      link: "#pg-listing-5"
    },
    {
      id: 106,
      name: "Comfort Inn",
      location: "Dehradun",
      price: "10,000",
      image: pg6,
      features: ["Gym", "Parking", "24/7 Security"],
      link: "#pg-listing-6"
    },
  ];

  return (
    <section className="mt-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
        Find a PG & Hostel in Dehradun Away from Home
      </h2>

      {/* PG Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pgCategories.map(category => (
          <Card
            key={category.id}
            image={category.image}
            title={category.title}
            link={category.link}
          />
        ))}
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mt-12 mb-8">
        Popular PG Listings in Dehradun
      </h2>

      {/* PG Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyPgListings.map(pg => (
          <ListingCard
            key={pg.id}
            image={pg.image}
            name={pg.name}
            location={pg.location}
            price={pg.price}
            features={pg.features}
            link={pg.link}
          />
        ))}
      </div>
    </section>
  );
};

export default PgListingSection;
