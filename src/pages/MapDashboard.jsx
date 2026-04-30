import React, { useState, useEffect } from 'react';
import EVMap from '../components/EVMap';
import FilterPanel from '../components/FilterPanel';
import VehicleDetailsPanel from '../components/VehicleDetailsPanel';
import Toast from '../components/Toast';
import { generateEVsAroundLocation } from '../services/mockEVData';
import useGeolocation from '../hooks/useGeolocation';

const MapDashboard = () => {
  const location = useGeolocation();
  const userLat = location.coordinates.lat;
  const userLng = location.coordinates.lng;

  const [evs, setEvs] = useState([]);
  const [selectedEV, setSelectedEV] = useState(null);
  const [navigationTarget, setNavigationTarget] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: ['Car', 'Bike', 'Scooter'],
    status: ['Available', 'Charging', 'Booked']
  });

  const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' });

  // Generate EVs once geolocation is loaded
  useEffect(() => {
    if (location.loaded && evs.length === 0) {
      setEvs(generateEVsAroundLocation(userLat, userLng, 25));
    }
  }, [location.loaded, userLat, userLng, evs.length]);

  // Simulation effect for EV movement and status changes
  useEffect(() => {
    const interval = setInterval(() => {
      setEvs(currentEvs => 
        currentEvs.map(ev => {
          if (Math.random() < 0.1) {
            return {
              ...ev,
              location: [
                ev.location[0] + (Math.random() - 0.5) * 0.002,
                ev.location[1] + (Math.random() - 0.5) * 0.002
              ],
              battery: Math.max(0, ev.battery - (Math.random() < 0.2 ? 1 : 0))
            };
          }
          return ev;
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleBook = (evToBook) => {
    setEvs(currentEvs => 
      currentEvs.map(ev => ev.id === evToBook.id ? { ...ev, status: 'Booked' } : ev)
    );
    setSelectedEV(prev => prev && prev.id === evToBook.id ? { ...prev, status: 'Booked' } : prev);
    setToast({ isVisible: true, message: `Successfully booked ${evToBook.model}!`, type: 'success' });
    setNavigationTarget(null); // Clear navigation if booking
  };

  const handleNavigate = (evToNav) => {
    setNavigationTarget(evToNav);
    setToast({ isVisible: true, message: `Navigating to ${evToNav.model}...`, type: 'info' });
    setSelectedEV(null); // Close panel to show map
  };

  const showToast = (message, type = 'success') => setToast({ isVisible: true, message, type });

  const filteredEVs = evs.filter(ev => {
    return filters.type.includes(ev.type) && filters.status.includes(ev.status);
  });

  return (
    <div className="h-[calc(100vh-4rem)] bg-background dark:bg-background-dark relative flex flex-col md:flex-row">
      <div className="flex-1 relative p-4">
        <FilterPanel 
          filters={filters} 
          setFilters={setFilters} 
          isOpen={isFilterOpen}
          setIsOpen={setIsFilterOpen}
        />
        
        <EVMap 
          evs={filteredEVs} 
          onSelectEV={(ev) => {
            setSelectedEV(ev);
            setNavigationTarget(null); // Clear navigation when selecting a new EV
          }} 
          center={[userLat, userLng]}
          navigationTarget={navigationTarget}
        />

        <VehicleDetailsPanel 
          vehicle={selectedEV} 
          onClose={() => setSelectedEV(null)} 
          onBook={handleBook}
          onNavigate={handleNavigate}
        />

        <Toast 
          message={toast.message} 
          type={toast.type} 
          isVisible={toast.isVisible} 
          onClose={() => setToast(prev => ({ ...prev, isVisible: false }))} 
        />
      </div>
    </div>
  );
};

export default MapDashboard;

