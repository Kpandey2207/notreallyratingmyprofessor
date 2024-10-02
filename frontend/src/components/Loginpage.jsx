import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import { FaInstagram, FaTwitter, FaFacebook, FaBook, FaPencilAlt, FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';

const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', email, password);
    navigate('/home');
  };

  // Animations
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  const float = useSpring({
    from: { transform: 'translateY(0px)' },
    to: { transform: 'translateY(-10px)' },
    config: { duration: 1000, loop: true, yoyo: true }
  });

  const write = useSpring({
    from: { width: '0%' },
    to: { width: '100%' },
    config: { duration: 2000 }
  });

  const bounce = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.1)' },
    config: { duration: 1000, loop: true, yoyo: true }
  });

  return (
    <animated.div style={fadeIn} className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-blue-900 to-black py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <animated.div
            key={i}
            style={{
              ...useSpring({
                from: { transform: 'translateY(0px) rotate(0deg)' },
                to: { transform: 'translateY(-1000px) rotate(360deg)' },
                config: { duration: 20000 + Math.random() * 10000 },
                loop: true,
                delay: Math.random() * 5000,
              }),
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            className="text-blue-300 text-opacity-50"
          >
            {Math.random() > 0.5 ? <FaGraduationCap size={20} /> : <FaChalkboardTeacher size={20} />}
          </animated.div>
        ))}
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 w-full h-20 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md">
        <div className="flex justify-between items-center h-full px-4">
          <img src="./src/assets/images/loginbck.png" alt="SRM Logo" className="h-16 rounded-full shadow-lg" />
          <div className="flex space-x-4">
            <animated.div style={bounce}>
              <FaInstagram className="text-white text-2xl cursor-pointer hover:text-blue-400 transition-colors duration-300" />
            </animated.div>
            <animated.div style={bounce}>
              <FaTwitter className="text-white text-2xl cursor-pointer hover:text-blue-400 transition-colors duration-300" />
            </animated.div>
            <animated.div style={bounce}>
              <FaFacebook className="text-white text-2xl cursor-pointer hover:text-blue-400 transition-colors duration-300" />
            </animated.div>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md space-y-8 bg-white bg-opacity-10 p-10 rounded-xl shadow-2xl mt-20 z-10 backdrop-filter backdrop-blur-lg">
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
      </div>

      {/* Floating Icons */}
      <animated.div style={{...float, position: 'absolute', top: '30%', left: '10%'}} className="z-10">
        <FaBook className="text-5xl text-blue-300" />
      </animated.div>

      <animated.div style={{...float, position: 'absolute', bottom: '20%', right: '10%'}} className="z-10">
        <FaPencilAlt className="text-5xl text-blue-300" />
      </animated.div>

      <animated.div style={{...float, position: 'absolute', top: '60%', left: '5%'}} className="z-10">
        <FaGraduationCap className="text-5xl text-blue-300" />
      </animated.div>

      <animated.div style={{...float, position: 'absolute', bottom: '40%', right: '5%'}} className="z-10">
        <FaChalkboardTeacher className="text-5xl text-blue-300" />
      </animated.div>
    </animated.div>
  );
};

export default Loginpage;