import { TReview} from '../../utils/types/types';
import { Review } from './review';
import { ReviewForm } from './reviewForm';

type ReviewsListProps = {
    reviews: TReview[];
  };

export const ReviewList: React.FC<ReviewsListProps> = ({reviews}): JSX.Element => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">
        Reviews &middot;<span className="reviews__amount">{reviews.length}</span>
    </h2>
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review key={review.id} review={review}/>
      ))}
    </ul>
    <ReviewForm/>
  </section>
);
