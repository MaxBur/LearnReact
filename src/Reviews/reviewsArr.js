import PersonIcon from '../assets/img/reviews_person_icon.svg';

const aReviews = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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

export default aReviews;
