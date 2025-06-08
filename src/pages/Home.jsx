import React from 'react';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import Banner from '../components/Banner';

const sampleData = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    title: 'PG for Girls',
    location: 'Ballupur, Dehradun',
    price: '5000',
  },
  {
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a12',
    title: 'PG for Boys',
    location: 'Prem Nagar, Dehradun',
    price: '4500',
  },
  {
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    title: 'Hostel for Girls',
    location: 'ISBT, Dehradun',
    price: '5500',
  },
  {
    image: 'https://images.unsplash.com/photo-1560184897-c0b9e56cd0d5',
    title: 'Student Friendly PG',
    location: 'EC Road, Dehradun',
    price: '6000',
  },
];

export default function Home() {
  return (
    <>
      <SearchBar />

      <div className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Popular PG Listings</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sampleData.map((item, idx) => (
            <Card
              key={idx}
              image={item.image}
              title={item.title}
              location={item.location}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
