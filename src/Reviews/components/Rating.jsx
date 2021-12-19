import React from 'react';

import StarActiveIcon from '../assets/img/reviews_star_active.svg';
import StarIcon from '../assets/img/reviews_star.svg';

function Rating({ reviewRating }) {
    const maxRating = 5;
    const notActiveRating = maxRating - reviewRating;
    return (
        <div className="reviews__rating">
            {[...Array(reviewRating)].map((star, index) => (
                <div key={index} className="reviews__star">
                    <img src={StarActiveIcon} alt="" />
                </div>
            ))}
            {[...Array(notActiveRating)].map((star, index) => (
                <div key={index} className="reviews__star">
                    <img src={StarIcon} alt="" />
                </div>
            ))}
        </div>
    );
}

export default Rating;
