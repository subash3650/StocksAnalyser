'use client'
import { useState } from 'react';
import Head from 'next/head';

const sections = [
  {
    title: "Where the Market is going",
    description: "Grab the Opportunity",
    video: "public/video1.mp4",
  },
  
  {
    title: "Trade Smarter",
    description: "Unlock powerful tools to analyze and execute trades.",
    video: "/video2.mp4",
  },
  {
    title: "Screen Opportunities",
    description: "Find the best stocks and investments effortlessly.",
    video: "/video3.mp4",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Head>
        <title>Market Navigation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white">

        <video
          key={sections[activeIndex].video}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src={sections[activeIndex].video} type="video/mp4" />
        </video>

        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {sections[activeIndex].title}
          </h1>
          <p className="text-lg md:text-xl mb-8">
            {sections[activeIndex].description}
          </p>
        </div>

        <div className="flex space-x-4">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-white' : 'bg-gray-500'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}
