import React from 'react';
import { Filter, Car, Bike, X } from 'lucide-react';

const FilterPanel = ({ filters, setFilters, isOpen, setIsOpen }) => {
  const toggleFilter = (category, value) => {
    setFilters(prev => {
      const current = prev[category];
      if (current.includes(value)) {
        return { ...prev, [category]: current.filter(item => item !== value) };
      } else {
        return { ...prev, [category]: [...current, value] };
      }
    });
  };

  const isSelected = (category, value) => filters[category].includes(value);

  return (
    <div className={`
      absolute top-4 left-4 z-[1001] bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 transition-all duration-300
      ${isOpen ? 'w-72 opacity-100' : 'w-12 h-12 overflow-hidden cursor-pointer'}
    `}>
      {!isOpen ? (
        <div 
          className="w-full h-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl"
          onClick={() => setIsOpen(true)}
        >
          <Filter className="w-5 h-5" />
        </div>
      ) : (
        <div className="p-4">
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
              <Filter className="w-4 h-4" /> Filters
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Vehicle Type</p>
              <div className="flex flex-wrap gap-2">
                {['Car', 'Bike', 'Scooter'].map(type => (
                  <button
                    key={type}
                    onClick={() => toggleFilter('type', type)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      isSelected('type', type)
                        ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 border border-primary-200 dark:border-primary-800/50'
                        : 'bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border border-transparent hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Status</p>
              <div className="flex flex-col gap-2">
                {[
                  { id: 'Available', color: 'bg-emerald-500' },
                  { id: 'Booked', color: 'bg-red-500' },
                  { id: 'Charging', color: 'bg-amber-500' }
                ].map(status => (
                  <label key={status.id} className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      checked={isSelected('status', status.id)}
                      onChange={() => toggleFilter('status', status.id)}
                    />
                    <div className={`w-2 h-2 rounded-full ${status.color}`}></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{status.id}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;
