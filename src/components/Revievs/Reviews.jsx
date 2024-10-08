import css from './Reviews.module.css';
import icons from '../../assets/icon/symbol-defs.svg';

const Reviews = ({ item }) => {
  return (
    <div className={css.reviews}>
      <ul className={css.reviewList}>
        {item.reviews.map(review => (
          <li key={review.reviewer_name}>
            <div className={css.review}>
              <div className={css.nameWrapper}>
                <span className={css.avatar}>{review.reviewer_name[0]}</span>
                <div className={css.ratingWrapper}>
                  <p className={css.reviewerName}>{review.reviewer_name}</p>
                  <ul className={css.rating}>
                    {Array.from(
                      { length: review.reviewer_rating },
                      (_, index) => (
                        <li key={index}>
                          <svg width="20" height="20">
                            <use
                              xlinkHref={`${icons}#icon-rating-star-filled`}
                            ></use>
                          </svg>
                        </li>
                      )
                    )}
                    {Array.from(
                      { length: 5 - review.reviewer_rating },
                      (_, index) => (
                        <li key={index}>
                          <svg width="20" height="20">
                            <use
                              xlinkHref={`${icons}#icon-rating-star-empty`}
                            ></use>
                          </svg>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <p className={css.comment}>{review.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
