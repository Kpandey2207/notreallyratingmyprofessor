import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaUser, FaInfoCircle, FaNetworkWired } from 'react-icons/fa';

const HomePage = () => {
  // Dummy professor data
  const professor = {
    name: "Dr.V.Angyayarkanni",
    department: "School of Computing",
    expertise: "Advanced Programming and Practices",
    yearsOfExperience: 10,
    rating: 4.5,
    image: "https://via.placeholder.com/150" // Placeholder image
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-black via-blue-900 to-black text-white">
      {/* Sidebar */}
      <div className="w-64 bg-black bg-opacity-50 p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <Link to="/rate" className="flex items-center space-x-2 text-blue-300 hover:text-blue-100">
          <FaStar /> <span>Rate</span>
        </Link>
        <Link to="/know-more" className="flex items-center space-x-2 text-blue-300 hover:text-blue-100">
          <FaInfoCircle /> <span>Know More</span>
        </Link>
        <Link to="/connect" className="flex items-center space-x-2 text-blue-300 hover:text-blue-100">
          <FaNetworkWired /> <span>Connect</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <header className="mb-10">
          <h1 className="text-4xl font-bold">TotallynotRatingMyProfessor</h1>
        </header>

        <main>
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-filter backdrop-blur-lg">
            <div className="flex items-start space-x-6 mb-6">
              <img src={professor.image} alt={professor.name} className="w-32 h-32 rounded-full" />
              <div>
                <h2 className="text-3xl font-bold mb-2">{professor.name}</h2>
                <p className="text-blue-300 mb-1">Department: {professor.department}</p>
                <p className="text-blue-300 mb-1">Expertise: {professor.expertise}</p>
                <p className="text-blue-300">Years of Experience: {professor.yearsOfExperience}</p>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Rating</h3>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(professor.rating) ? "text-yellow-400" : "text-gray-400"} />
                  ))}
                </div>
                <span className="text-2xl font-bold">{professor.rating.toFixed(1)}</span>
              </div>
            </div>

            {/* Placeholder for additional details */}
            <p className="text-gray-300">More details about the professor will be displayed here...</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;