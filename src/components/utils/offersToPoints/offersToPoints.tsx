import { Point } from "../../../types/types";
import { TPlaceCardEntity } from "../../placeCard.typings/placeCard.typings";

const offersToPoints = (allPlaces: TPlaceCardEntity[]): Point[] => {
    const points: Point[] = [];
    allPlaces.map((offer) =>
      points.push({
        title: offer.name,
        lat: offer.latitude,
        lng: offer.longitude,
      })
    );
    return points;
  };
  
  export default offersToPoints;