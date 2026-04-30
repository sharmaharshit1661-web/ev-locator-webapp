import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet's default icon path issues with Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom markers based on status
const createCustomIcon = (status) => {
  const colorMap = {
    'Available': '#10b981', // green
    'Booked': '#ef4444',    // red
    'Charging': '#f59e0b'   // yellow
  };
  const color = colorMap[status] || '#3b82f6';
  
  return L.divIcon({
    className: 'custom-ev-marker',
    html: `
      <div style="
        background-color: ${color};
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(-12px, -12px);
      "></div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12]
  });
};

const MapController = ({ center, navigationTarget }) => {
  const map = useMap();
  useEffect(() => {
    if (navigationTarget) {
      const bounds = L.latLngBounds([center, navigationTarget.location]);
      map.fitBounds(bounds, { padding: [50, 50] });
    } else {
      map.setView(center, map.getZoom());
    }
  }, [center, navigationTarget, map]);
  return null;
};

const EVMap = ({ evs, onSelectEV, center = [37.7749, -122.4194], navigationTarget }) => {
  return (
    <div className="h-full w-full relative z-0 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800">
      <MapContainer 
        center={center} 
        zoom={14} 
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <MapController center={center} navigationTarget={navigationTarget} />
        
        {/* User Location Marker */}
        <Marker position={center} icon={L.divIcon({
          className: 'user-marker',
          html: '<div class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg relative"><div class="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div></div>',
          iconSize: [16, 16]
        })}>
          <Popup>You are here</Popup>
        </Marker>

        {/* Navigation Polyline */}
        {navigationTarget && (
          <Polyline 
            positions={[center, navigationTarget.location]} 
            color="#3b82f6" 
            weight={4} 
            opacity={0.7} 
            dashArray="10, 10" 
          />
        )}

        {/* EV Markers */}
        {evs.map(ev => (
          <Marker 
            key={ev.id} 
            position={ev.location}
            icon={createCustomIcon(ev.status)}
            eventHandlers={{
              click: () => onSelectEV(ev)
            }}
          >
          </Marker>
        ))}
      </MapContainer>
      
      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300 z-[1000]">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-3 h-3 rounded-full bg-emerald-500 border border-white"></div> Available
        </div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-3 h-3 rounded-full bg-red-500 border border-white"></div> Booked
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-500 border border-white"></div> Charging
        </div>
      </div>
    </div>
  );
};

export default EVMap;

