import { TReviewFull } from '../../utils/types/types';
import Review from './review';


type ReviewsListProps = {
  reviews: TReviewFull[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((reveiw) => (
        <Review key={reveiw.id} review={reveiw} />
      ))}
    </ul>
  );
}

export default ReviewsList;
