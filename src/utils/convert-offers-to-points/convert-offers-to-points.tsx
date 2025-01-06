import { TPoint, TPlaceCard, TPlaceCardFull } from '../types/types';


const convertOffersToPoints = (
  allPlaces: TPlaceCard[] | TPlaceCardFull[]
): TPoint[] => {
  const points: TPoint[] = [];
  allPlaces.map((offer) =>
    points.push({
      title: offer.title,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    })
  );
  return points;
};

export default convertOffersToPoints;
