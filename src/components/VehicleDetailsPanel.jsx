import React from 'react';
import { X, Battery, MapPin, Navigation, Car, Bike, Zap } from 'lucide-react';

const VehicleDetailsPanel = ({ vehicle, onClose, onNavigate, onBook }) => {
  if (!vehicle) return null;

  const getStatusColor = (status) => {
    switch(status) {
      case 'Available': return 'text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400';
      case 'Booked': return 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400';
      case 'Charging': return 'text-amber-600 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  const getIcon = (type) => {
    switch(type) {
      case 'Car': return <Car className="w-8 h-8 text-primary-500" />;
      case 'Bike': return <Bike className="w-8 h-8 text-primary-500" />;
      default: return <Zap className="w-8 h-8 text-primary-500" />;
    }
  };

  return (
    <div className="absolute top-4 right-4 z-[1001] w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-800/50 overflow-hidden flex flex-col animate-in slide-in-from-right-4 duration-300">
      {/* Header Image/Banner Area */}
      <div className="h-24 bg-gradient-to-r from-primary-500 to-blue-500 relative">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 bg-black/20 hover:bg-black/40 text-white rounded-full p-1 backdrop-blur-sm transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="absolute -bottom-6 left-4 bg-white dark:bg-gray-800 p-2 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
          {getIcon(vehicle.type)}
        </div>
      </div>

      <div className="pt-8 p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{vehicle.model}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{vehicle.type}</p>
          </div>
          <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getStatusColor(vehicle.status)}`}>
            {vehicle.status}
          </span>
        </div>

        <div className="space-y-4 mt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
              <Battery className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium">Battery</p>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">{vehicle.battery}%</span>
                <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${vehicle.battery > 50 ? 'bg-emerald-500' : vehicle.battery > 20 ? 'bg-amber-500' : 'bg-red-500'}`}
                    style={{ width: `${vehicle.battery}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium">Est. Range</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{vehicle.range} miles</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button 
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2.5 rounded-lg font-medium flex justify-center items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={vehicle.status !== 'Available'}
            onClick={() => onNavigate(vehicle)}
          >
            <Navigation className="w-4 h-4" /> Navigate
          </button>
          <button 
            className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={vehicle.status !== 'Available'}
            onClick={() => onBook(vehicle)}
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsPanel;

