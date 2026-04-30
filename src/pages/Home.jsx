import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, BatteryCharging, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            >
              <span className="block">Find Electric Vehicles</span>
              <span className="block text-primary-600 dark:text-primary-500">Near You in Real-Time</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              Discover available EVs around you instantly. Stop wasting time and easily navigate to the nearest Bike, Scooter, or Car.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
            >
              <div className="rounded-md shadow">
                <Link
                  to="/map"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg transition-all transform hover:scale-105"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Find EV Near Me
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-surface dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary-600 dark:text-primary-500 tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              A smarter way to commute
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-background dark:bg-background-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-gray-800 dark:text-primary-500 mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Live Tracking</h3>
                <p className="text-gray-500 dark:text-gray-400">See real-time EV availability and track movements accurately on the map.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-background dark:bg-background-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-gray-800 dark:text-blue-500 mb-4">
                  <BatteryCharging className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Battery Insights</h3>
                <p className="text-gray-500 dark:text-gray-400">View live battery levels and estimated range before choosing your ride.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-background dark:bg-background-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-gray-800 dark:text-purple-500 mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Save Time</h3>
                <p className="text-gray-500 dark:text-gray-400">Instantly locate nearby rides. Stop walking blocks hoping to find an available EV.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
