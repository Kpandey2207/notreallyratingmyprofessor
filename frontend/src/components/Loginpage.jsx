import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import { FaInstagram, FaTwitter, FaFacebook, FaBook, FaPencilAlt, FaGraduationCap, FaChalkboardTeacher, FaEdit, FaUserSecret, FaThumbsUp } from 'react-icons/fa';

const FeatureCard = ({ icon: Icon, title, color }) => (
  <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-filter backdrop-blur-lg">
    <Icon className={`text-4xl ${color} mb-4`} />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
  </div>
);

const CrazyBackground = () => {
  const [icons, setIcons] = useState([]);
  const backgroundIcons = [FaGraduationCap, FaChalkboardTeacher, FaBook, FaPencilAlt];

  useEffect(() => {
    const newIcons = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      Icon: backgroundIcons[Math.floor(Math.random() * backgroundIcons.length)],
      size: Math.random() * 30 + 10,
      speed: Math.random() * 5 + 1,
      angle: Math.random() * 360,
      radius: Math.random() * 40 + 10,
      centerX: Math.random() * 100,
      centerY: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setIcons(newIcons);
  }, []);

  useEffect(() => {
    const animateIcons = () => {
      setIcons(prevIcons =>
        prevIcons.map(icon => ({
          ...icon,
          angle: (icon.angle + icon.speed) % 360,
        }))
      );
    };

    const intervalId = setInterval(animateIcons, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {icons.map(icon => (
        <animated.div
          key={icon.id}
          style={{
            position: 'absolute',
            left: `calc(${icon.centerX}% + ${Math.cos(icon.angle * Math.PI / 180) * icon.radius}%)`,
            top: `calc(${icon.centerY}% + ${Math.sin(icon.angle * Math.PI / 180) * icon.radius}%)`,
            opacity: icon.opacity,
            transform: `rotate(${icon.angle}deg)`,
          }}
          className="text-blue-300"
        >
          <icon.Icon size={icon.size} />
        </animated.div>
      ))}
    </>
  );
};

const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', email, password);
    navigate('/home');
  };

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  const float = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (1) {
        await next({ transform: 'translateY(-10px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
    config: { duration: 2000 }
  });

  const write = useSpring({
    from: { width: '0%' },
    to: { width: '100%' },
    config: { duration: 2000 }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black text-white">
      <animated.div style={fadeIn} className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
        <CrazyBackground />

        {/* Header */}
        <div className="absolute top-0 left-0 w-full h-20 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md">
          <div className="flex justify-between items-center h-full px-4">
            <img src="./src/assets/images/loginbck.png" alt="SRM Logo" className="h-16 rounded-full shadow-lg" />
            <div className="flex space-x-4">
              {[FaInstagram, FaTwitter, FaFacebook].map((Icon, index) => (
                <Icon key={index} className="text-white text-2xl cursor-pointer hover:text-blue-400 transition-colors duration-300" />
              ))}
            </div>
          </div>
        </div>

        {/* Login Form */}
        <animated.div style={float} className="w-full max-w-md space-y-8 bg-white bg-opacity-10 p-10 rounded-xl shadow-2xl mt-20 z-10 backdrop-filter backdrop-blur-lg">
          <div>
            <animated.h2 style={write} className="mt-2 text-center text-2xl font-extrabold text-white overflow-hidden whitespace-nowrap">
              TotallynotRatingMyProfessor
            </animated.h2>
            <p className="mt-2 text-center text-sm text-gray-300">
              Sign in to rate and view professor ratings
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Sign in
              </button>
            </div>
          </form>
        </animated.div>

        {/* New Features Section */}
        <div className="w-full max-w-4xl mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={FaEdit} 
            title="Manage and edit your ratings" 
            color="text-yellow-300"
          />
          <FeatureCard 
            icon={FaUserSecret} 
            title="Your ratings are always anonymous" 
            color="text-pink-300"
          />
          <FeatureCard 
            icon={FaThumbsUp} 
            title="Like or dislike ratings" 
            color="text-blue-300"
          />
        </div>

        {/* Sign Up Button */}
        <button className="mt-12 px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-300">
          Sign up now!
        </button>
      </animated.div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h3 className="text-lg font-bold">TotallynotRatingMyProfessor</h3>
              <p className="mt-2 text-sm">© 2024 All rights reserved</p>
            </div>
            <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
              <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Terms of Service</a>
              <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Privacy Policy</a>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
              <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Contact Us</a>
              <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Loginpage;