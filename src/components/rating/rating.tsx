import { TRating } from '../../utils/types/types';

type TRatingProps = {
  rating: TRating;
  objectType: string;
};

export const Rating: React.FC<TRatingProps> = ({rating, objectType}) => (
  <div className={`${objectType}__rating rating`}>
    <div className={`${objectType}__stars rating__stars`}>
      <span style={{width: `${rating * 20}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  </div>
);
