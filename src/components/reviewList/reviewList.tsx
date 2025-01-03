import { TReviewItem } from '../../types/types';
import Review from '../review/review';

type ReviewsListProps = {
    reviews: TReviewItem[];
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
