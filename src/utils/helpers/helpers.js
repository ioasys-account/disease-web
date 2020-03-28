export const formatDataClusters = (data) => {
  const crimes = data ? data.slice(0, 2000) : [];
  const points = crimes.map((crime) => ({
    type: 'Feature',
    properties: { cluster: false, crimeId: crime.id, category: crime.category },
    geometry: {
      type: 'Point',
      coordinates: [
        parseFloat(crime.location.longitude),
        parseFloat(crime.location.latitude),
      ],
    },
  }));
  return points;
};
