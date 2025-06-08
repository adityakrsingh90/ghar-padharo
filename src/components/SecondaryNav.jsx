import React from 'react';
import { FaCaretDown } from 'react-icons/fa';

const SecondaryNav = () => {
  const navItems = [
    {
      title: "Buy",
      link: "#buy",
      dropdownContent: [
        {
          title: "Residential",
          items: ["Flats for Sale", "Houses for Sale", "Villas for Sale", "Plots for Sale", "New Projects"]
        },
        {
          title: "Commercial",
          items: ["Office Space for Sale", "Shop for Sale", "Warehouse for Sale", "Commercial Land", "New Commercial Projects"]
        },
        {
          title: "PG & Co-Living",
          items: ["PG in Delhi", "PG in Bangalore", "PG in Pune", "Co-Living Spaces", "Hostels"]
        },
        {
          title: "Explore More",
          items: ["Builder Floors", "Farm Houses", "Service Apartments", "Resale Properties", "Property Trends"]
        }
      ]
    },
    {
      title: "Rent",
      link: "#rent",
      dropdownContent: [
        {
          title: "Residential",
          items: ["Flats for Rent", "Houses for Rent", "Villas for Rent", "Rooms for Rent", "Furnished Homes"]
        },
        {
          title: "Commercial",
          items: ["Office Space for Rent", "Shop for Rent", "Warehouse for Rent", "Commercial Building", "Shared Offices"]
        },
        {
          title: "PG & Co-Living",
          items: ["PG for Boys", "PG for Girls", "Luxury PGs", "Co-Living for Students", "Short Term Stays"]
        },
        {
          title: "Explore More",
          items: ["Apartments for Rent", "Individual Rooms", "Sublets", "Student Housing", "Corporate Rentals"]
        }
      ]
    },
    {
      title: "Sell",
      link: "#sell",
      dropdownContent: [
        {
          title: "Property Type",
          items: ["Residential Property", "Commercial Property", "Land / Plot", "Industrial Property", "Agricultural Land"]
        },
        {
          title: "Seller Services",
          items: ["Post Property Ad", "Property Valuation", "Legal Assistance", "Tax Consultation", "Agent Connect"]
        },
        {
          title: "Selling Guides",
          items: ["How to Sell", "Market Trends", "Documentation", "Pricing Strategy", "Selling Tips"]
        },
        {
          title: "Quick Sell",
          items: ["Instant Sell", "Sell to Investor", "Sell My Land", "Sell My Flat", "Sell My Office"]
        }
      ]
    },
    {
      title: "Home Loans",
      link: "#homeloans",
      dropdownContent: [
        {
          title: "Loan Types",
          items: ["Home Purchase Loan", "Plot Loan", "Construction Loan", "Home Extension Loan", "Loan Against Property"]
        },
        {
          title: "Banks & NBFCs",
          items: ["SBI Home Loan", "HDFC Home Loan", "ICICI Home Loan", "Axis Bank Home Loan", "LIC Housing Finance"]
        },
        {
          title: "Eligibility",
          items: ["Check Eligibility", "Required Documents", "CIBIL Score Impact", "Interest Rates", "EMI Calculator"]
        },
        {
          title: "Loan Process",
          items: ["Apply Online", "Loan Sanction", "Disbursement Process", "FAQs", "Contact Advisor"]
        }
      ]
    },
    {
      title: "Home Interiors",
      link: "#homeinteriors",
      dropdownContent: [
        {
          title: "Design Styles",
          items: ["Modern", "Traditional", "Minimalist", "Bohemian", "Industrial"]
        },
        {
          title: "Rooms",
          items: ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Dining Area"]
        },
        {
          title: "Services",
          items: ["Full Home Design", "Modular Kitchen", "Wardrobes", "Renovation", "Furniture & Decor"]
        },
        {
          title: "Inspiration",
          items: ["Design Gallery", "Color Palette", "Material Guide", "Budget Ideas", "Expert Tips"]
        }
      ]
    },
    {
      title: "GP Advice",
      link: "#gpadvice",
      dropdownContent: [
        {
          title: "Property News",
          items: ["Market Updates", "Policy Changes", "Investment News", "City Guides", "Rental Trends"]
        },
        {
          title: "Legal & Tax",
          items: ["Property Laws", "Tax Benefits", "Registration", "Stamp Duty", "RERA"]
        },
        {
          title: "Buying Guides",
          items: ["First Time Buyer", "Home Inspection", "Negotiation Tips", "Checklist", "Vastu Shastra"]
        },
        {
          title: "Selling Guides",
          items: ["Selling Process", "Documentation", "Pricing Tips", "Online Selling", "Property Photos"]
        }
      ]
    },
    {
      title: "Help",
      link: "#help",
      dropdownContent: [
        {
          title: "Support",
          items: ["Help Centre", "Sales Enquiry"]
        }
      ]
    }
  ];


  return (
    <nav className="bg-white shadow-sm py-3 px-4 z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center text-[15px] font-medium text-gray-700 gap-6">

        {navItems.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === navItems.length - 1;
          let dropdownAlignment = "left-1/2 -translate-x-1/2";
          if (isFirst) dropdownAlignment = "left-0 origin-top-left";
          else if (isLast) dropdownAlignment = "right-0 origin-top-right";

          const dropdownWidth =
            item.dropdownContent && item.dropdownContent.length <= 2
              ? "max-w-md"
              : "max-w-5xl";

          return (
            <div key={index} className="relative group">
              <a
                href={item.link}
                className={`flex items-center gap-1 px-3 py-2 hover:text-red-600 ${item.dropdownContent ? 'cursor-pointer' : ''}`}
              >
                {item.title}
                {item.dropdownContent && <FaCaretDown className="text-xs mt-[1px]" />}
              </a>

              {item.dropdownContent && (
                <div
                  className={`absolute hidden group-hover:block top-full mt-1 bg-white shadow-lg p-6 rounded-b-lg w-screen ${dropdownWidth} z-20 ${dropdownAlignment}`}
                >
                  <div className={`grid gap-6 ${item.dropdownContent.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}`}>
                    {item.dropdownContent.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h4 className="font-bold text-gray-900 mb-3 border-b pb-1 border-gray-200 text-base">
                          {section.title}
                        </h4>
                        <ul>
                          {section.items.map((subItem, subItemIndex) => (
                            <li key={subItemIndex} className="py-1">
                              <a href="#" className="hover:text-red-600 text-gray-700 whitespace-nowrap text-[14px]">
                                {subItem}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default SecondaryNav;
