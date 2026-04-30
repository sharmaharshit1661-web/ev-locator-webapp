import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-center space-x-2 md:justify-start">
            <Zap className="h-6 w-6 text-primary-500" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">VoltLocator</span>
          </div>
          <p className="mt-4 md:mt-0 text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} VoltLocator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
