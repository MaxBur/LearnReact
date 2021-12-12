import React from 'react';

import PersonIcon from '../assets/img/reviews_person_icon.svg';

import ReviewsList from './components/ReviewsList';

const aReviews = [
    {
        approved: true,
        person: {
            avatar: PersonIcon,
            name: 'Иванов Иван',
            date: '14 октября 2021',
        },
        rating: 2,
        text: ' Подробно ответили на мои вопросы, рассказал о технических особенностях.',
    },
    {
        approved: true,
        person: {
            avatar: PersonIcon,
            name: 'Иванов Иван',
            date: '14 октября 2021',
        },
        rating: 3,
        text: ' Подробно ответили на мои вопросы, рассказал о технических особенностях.',
    },
    {
        approved: false,
        person: {
            avatar: PersonIcon,
            name: 'Иванов Иван',
            date: '14 октября 2021',
        },
        rating: 3,
        text: ' Подробно ответили на мои вопросы, рассказал о технических особенностях.',
    },
];

function ReviewsPage() {
    return (
        <div>
            <ReviewsList aReviews={aReviews} />
        </div>
    );
}

export default ReviewsPage;
