import React from 'react';
import { Leaf, Globe, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Driving the Future of Mobility
          </h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Making sustainable transportation accessible, seamless, and reliable for everyone.
          </p>
        </div>

        <div className="bg-surface dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Problem We Solve</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Current mapping platforms focus primarily on navigation and charging stations, but fail to provide real-time availability of shared electric vehicles. This leads to user frustration, wasted time searching for rides, and ultimately, lower adoption of eco-friendly transport options.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Solution</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            VoltLocator bridges this gap by aggregating live EV data across multiple mobility providers. We display exactly where available vehicles are right now, their current battery level, and allow you to instantly navigate to or book them—all from a single, unified interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -5 }} className="text-center p-6 bg-surface dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800">
            <div className="mx-auto w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Eco-Friendly</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Reducing carbon emissions by making EVs the easiest choice for daily commutes.</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="text-center p-6 bg-surface dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800">
            <div className="mx-auto w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Accessible</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Available in major cities worldwide, connecting you to rides wherever you go.</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="text-center p-6 bg-surface dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800">
            <div className="mx-auto w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Real-Time</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Lightning-fast updates ensure the vehicle you see is the vehicle you get.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
