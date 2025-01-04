import { TReviewEntityFull } from '../../utils/types/types';
import Review from './review';


type ReviewsListProps = {
  reviews: TReviewEntityFull[];
};

function ReviewList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((reveiw) => (
        <Review key={reveiw.id} review={reveiw} />
      ))}
    </ul>
  );
}

export default ReviewList;
