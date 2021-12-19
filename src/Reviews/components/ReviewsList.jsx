import React from 'react';

import { ReviewsPerson, Rating } from '../components';

const ReviewsList = ({ aReviews }) => {
    return (
        <div className="reviews__wrapper">
            <div className="reviews__list">
                {aReviews &&
                    aReviews.map((review, index) => (
                        <div key={`${review.id}_${index}`}>
                            {review.approved && (
                                <div className="reviews__item" key={review.index}>
                                    <div className="reviews__inner">
                                        <div className="reviews__top">
                                            <ReviewsPerson reviewPerson={review.person} />
                                            <Rating reviewRating={review.rating} />
                                        </div>

                                        <div className="reviews__text">{review.text}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ReviewsList;
