'use client';

import React, { useState } from 'react';

function Section3() {
  const [activeTab, setActiveTab] = useState('Office Space');

  const cards = [
    {
      title: "Private offices",
      details: [
        { text: "By month or year", icon: "⏳" },
        { text: "Teams of any size", icon: "👥" }
      ],
      description: "A range of ready-to-use, fully equipped offices with everything you need to get started.",
      price: "From $89 per person per month",
      buttonText: ["Learn more", "Get a quote"],
      link: ["#", "#"],
      imgSrc: "/section31.png"
    },
    {
      title: "Custom Offices",
      details: [
        { text: "By month or year - customized", icon: "⏳" },
        { text: "Teams of any size", icon: "👥" }
      ],
      description: "When off-the-shelf simply isn't enough. Customize all aspects of your space, including furniture and branding.",
      price: "From $89 per person per month",
      buttonText: ["Learn more", "Get a quote"],
      link: ["#", "#"],
      imgSrc: "/section32.png"
    },
    {
      title: "Day Offices",
      details: [{ text: "By the hour or day", icon: "⌛" }],
      description: "A professional on-demand office space. Perfect when you need to get your head down and do your best work.",
      price: "From $25 per day",
      buttonText: ["Learn more", "Book now"],
      link: ["#", "#"],
      imgSrc: "/section33.png"
    },
    {
      title: "Office Membership",
      details: [{ text: "5, 10, or unlimited days per month", icon: "📅" }],
      description: "Flexible access to Day Offices where and when you choose, at thousands of locations worldwide.",
      price: "From $225 per month",
      buttonText: ["Learn more", "Buy now"],
      link: ["#", "#"],
      imgSrc: "/section34.png"
    },
    {
      title: "Need a helping hand?",
      details: [
        { text: "Agents available worldwide", icon: "🌍" },
        { text: "Discuss different options", icon: "💬" },
        { text: "Receive a personalized quote", icon: "✍" },
        { text: "Sign Up and get started", icon: "✍" }
      ],
      description: "Arrange a 1:1 call with a professional advisor.",
      price: "",
      buttonText: ["Talk to an expert"],
      link: ["#"],
      imgSrc: "/section35.png"
    }
  ];

  const tabs = ["Office Space", "Coworking", "Virtual Offices", "Meeting rooms"];

  return (
    <div style={{ width: '100%', minHeight: '600 px', backgroundColor: '#F5F5F5' }} className="mx-auto p-6">
      <h2 className="text-2xl font-bold text-center my-4">Flexible workspace designed around your needs</h2>
      <div className="flex justify-center space-x-4 mb-4">
        {tabs.map(tab => (
          <button key={tab}
            className={`font-bold py-2 px-4 rounded ${activeTab === tab ? 'bg-green-500 text-white' : 'bg-white text-black border border-gray-300'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex overflow-x-auto space-x-4 py-4 px-2 ml-6">
        {cards.map(card => (
          <div key={card.title} style={{ width: '304px' }} className="flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src={card.imgSrc} alt={card.title} className="w-full h-64 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <div className="font-bold text-xl mb-2">{card.title}</div>
              <p className="text-gray-700 mb-0 mt-0 flex-grow h-20">{card.description}</p>
              <ul className="text-sm text-gray-500 mt-0 mb-0" style={{ minHeight: '60px' }}>
                {card.details.map(detail => (
                  <li key={detail.text} className="flex items-center mb-2">
                    {detail.icon} <span className="ml-2">{detail.text}</span>
                  </li>
                ))}
              </ul>
              {card.price && (
                <p className="text-green-500 text-lg mb-2">{card.price}</p>
              )}
              <div className="flex flex-col space-y-2 mt-auto">
                <div className="flex space-x-2">
                  {card.buttonText.map((text, index) => (
                    <button key={text}
                      className={`flex-1 px-4 py-2 rounded ${text.includes('Learn') ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                      onClick={() => window.location.href = card.link[index]}
                    >
                      {text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section3;
