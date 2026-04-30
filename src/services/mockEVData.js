// Helper to generate a random coordinate near a center
const generateNear = (center, offset = 0.05) => {
  return [
    center[0] + (Math.random() - 0.5) * offset,
    center[1] + (Math.random() - 0.5) * offset,
  ];
};

export const generateEVsAroundLocation = (lat, lng, count = 20) => {
  const types = ['Car', 'Bike', 'Scooter'];
  const statuses = ['Available', 'Booked', 'Charging'];
  const models = ['Tesla Model 3', 'Niu KQi3', 'Lime Gen 4', 'Rad Power Bike', 'Chevy Bolt'];

  return Array.from({ length: count }, (_, i) => {
    const type = types[Math.floor(Math.random() * types.length)];
    return {
      id: `ev-${i + 1}`,
      type,
      model: type === 'Car' ? (Math.random() > 0.5 ? 'Tesla Model 3' : 'Chevy Bolt') : type === 'Bike' ? 'Rad Power Bike' : 'Lime Gen 4',
      status: statuses[Math.floor(Math.random() * statuses.length)],
      battery: Math.floor(Math.random() * 80) + 20, // 20% to 100%
      location: generateNear([lat, lng], 0.04), // tighter offset for realistic display
      range: Math.floor(Math.random() * 200) + 10, // 10 to 210 miles
      lastUpdated: new Date().toISOString()
    };
  });
};

