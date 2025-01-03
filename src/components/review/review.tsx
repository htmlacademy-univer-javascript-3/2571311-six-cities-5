import { OBJECT_CLASS_TYPES } from '../../utils/const/const';
import { dateToMonthWordYear, dateToYearMonthDay } from '../../utils/date/date';
import { TReview} from '../../utils/types/types';
import { Rating } from '../rating/rating';


interface TReviewProps {
    review: TReview;
  }

export const Review: React.FC<TReviewProps> = ({review}) => (
  <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
      </div>
      <span className="reviews__user-name">{review.user.name}</span>
    </div>
    <div className="reviews__info">
      <Rating rating={review.rating} objectType={OBJECT_CLASS_TYPES.Reviews}/>
      <p className="reviews__text">{review.comment}</p>
      <time className="reviews__time" dateTime={dateToYearMonthDay(review.date)}>
        {dateToMonthWordYear(review.date)}
      </time>
    </div>
  </li>
);