'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);  
  const router = useRouter();

  const handleNavigation = () => {
    setIsLoading(true);  
    setTimeout(() => {
      router.push('components/login');  // Navigate to login after delay
    }, 1000);  // Delay for 1 second (1000ms)
  };

  return (
    <nav className="bg-darkBlue text-white px-6 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <span className="text-lg font-semibold">Stock Analyser</span>
      </div>

      <div className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-gray-300">
          Products
        </a>
        <a href="#" className="hover:text-gray-300">
          Community
        </a>
        <a href="#" className="hover:text-gray-300">
          Markets
        </a>
        <a href="#" className="hover:text-gray-300">
          News
        </a>
        <a href="#" className="hover:text-gray-300">
          Brokers
        </a>
        <a href="#" className="hover:text-gray-300">
          More
        </a>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <button className="hover:text-gray-300">
            🌐 IN
          </button>
        </div>
        <button
          className={`bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          type="button"
          onClick={handleNavigation}
          disabled={isLoading}
        >
          {isLoading ? 'Redirecting...' : 'Get Started'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
