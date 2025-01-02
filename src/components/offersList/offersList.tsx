import { useState } from "react";
import { TPlaceCardEntity } from "../placeCard.typings/placeCard.typings";
import PlaceCard from "../placeCard/placeCard";

type TOffersListProps = {
    offers: TPlaceCardEntity[];
  };
  
  const OffersList = ({ offers }: TOffersListProps): JSX.Element => {
    const [, setActiveOfferId] = useState<string | null>(null);
  
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <PlaceCard
                place={offer}
                key={offer.id}
                onMouseOver={() => {
                    setActiveOfferId(offer.id);
                } }
                onMouseLeave={() => {
                    setActiveOfferId(null);
                } } type={"Main"}          />
        ))}
      </div>
    );
  };
  
  export default OffersList;