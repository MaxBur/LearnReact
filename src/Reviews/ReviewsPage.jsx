import React from 'react';

import './scss/reviews.scss';
import './scss/reviews_media.scss';

import ReviewsList from './components/ReviewsList';
import aReviews from './reviewsArr';

function ReviewsPage() {
    return (
        <div className="b-reviews">
            <div className="reviews__title">
                <h1>Отзывы</h1>
            </div>
            <ReviewsList aReviews={aReviews} />
        </div>
    );
}

export default ReviewsPage;
