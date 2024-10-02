import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            SRM Professor Ratings
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-semibold mb-4">Welcome to SRM Professor Ratings</h2>
            <p className="mb-4">Here you can rate and view ratings for professors at SRM Institute of Science and Technology.</p>
            <div className="space-y-4">
              <Link to="/search" className="block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Search Professors
              </Link>
              <Link to="/rate" className="block w-full text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Rate a Professor
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;