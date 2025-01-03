import { TPlaceCard, TPoint } from '../types/types';

const offersToPoints = (allPlaces: TPlaceCard[]): TPoint[] => {
  const points: TPoint[] = [];
  allPlaces.map((offer) =>
    points.push({
      latitude: offer.location.latitude,
      longitude: offer.location.longitude,
    })
  );
  return points;
};
export default offersToPoints;
