import React from 'react';

function ReviewsPerson({ reviewPerson }) {
    return (
        <div className="reviews__person">
            <div className="reviews__photo">
                <img src={reviewPerson.avatar} alt="" />
            </div>
            <div className="reviews__info">
                <div className="reviews__date">{reviewPerson.date}</div>
                <div className="reiews__name">{reviewPerson.name} </div>
            </div>
        </div>
    );
}

export default ReviewsPerson;
