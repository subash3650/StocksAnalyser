import { useRouter } from 'next/navigation';
import React from 'react';

const page2: React.FC = () => {
    const router = useRouter();
  return (
    <div className="relative bg-darkBlue text-white h-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 opacity-40 z-10 bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dbmacylv1/image/upload/v1734071787/s08klhnsswsodeahhxkk.jpg')" }}></div>
      <div className="absolute inset-0 z-10 bg-black opacity-40"></div>

      <div className="relative z-20 text-center space-y-6">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
          Look  First <br />
          <span className="text-gradient bg-clip-text text-white">Then leap.</span>
        </h1>
        <p className="text-xl md:text-2xl text-white opacity-80">
          The best trades require research, then commitment.
        </p>

        <div className="relative mt-6">
          <input
            type="text"
            placeholder="Search markets here"
            className="px-6 py-3 rounded-full text-black w-80 md:w-96"
          />
        </div>

        <div className="flex justify-center space-x-6 mt-6">
          <div className="bg-gray-700 px-4 py-2 rounded-lg text-white">
            <span className="font-bold">BTCUSD</span>
            <div className="text-sm text-green-400">+0.09%</div>
          </div>
          <div className="bg-gray-700 px-4 py-2 rounded-lg text-white">
            <span className="font-bold">NIFTY</span>
            <div className="text-sm text-red-400">-1.24%</div>
          </div>
          <div className="bg-gray-700 px-4 py-2 rounded-lg text-white">
            <span className="font-bold">BANKNIFTY</span>
            <div className="text-sm text-red-400">-1.52%</div>
          </div>
        </div>

        <div className="mt-8">
          <button
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-6 rounded-full hover:opacity-80"
            onClick={() => router.push("components/login")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default page2;
