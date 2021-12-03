import React from 'react';
import PersonIcon from '../assets/img/reviews_person_icon.svg';
import StarActiveIcon from '../assets/img/reviews_star_active.svg';
import StarIcon from '../assets/img/reviews_star.svg';

const ReviewsList = () => {
    return (
        <div className="container">
            <div className="b-reviews">
                <div className="reviews__title">
                    <h1>Отзывы</h1>
                </div>
                <div className="reviews__wrapper">
                    <div className="reviews__list">
                        <div className="reviews__item">
                            <div className="reviews__inner">
                                <div className="reviews__top">
                                    <div className="reviews__person">
                                        <div className="reviews__photo">
                                            <img src={PersonIcon} alt="" />
                                        </div>
                                        <div className="reviews__info">
                                            <div className="reviews__date">14 октября 2021</div>
                                            <div className="reiews__name">Светлана Дьяченко </div>
                                        </div>
                                    </div>
                                    <div className="reviews__rating">
                                        <div className="reviews__star">
                                            <img src={StarActiveIcon} alt="" />
                                        </div>
                                        <div className="reviews__star">
                                            <img src={StarActiveIcon} alt="" />
                                        </div>
                                        <div className="reviews__star">
                                            <img src={StarActiveIcon} alt="" />
                                        </div>
                                        <div className="reviews__star">
                                            <img src={StarActiveIcon} alt="" />
                                        </div>
                                        <div className="reviews__star">
                                            <img src={StarIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews__text">
                                    Долго выбирала, ставить ванную или душевую кабину в квартиру.
                                    Хотела сэкономить место, но боялась, что будет неудобно
                                    принимать душ в кабине. Написала консультанту в онлайн-чат.
                                    Какое было мое удивление, когда он ответил через минуту.
                                    Подробно ответил на мои вопросы, рассказал о технических
                                    особенностях.
                                </div>
                            </div>
                        </div>
                        <div className="reviews__item">
                            <div className="reviews__inner">
                                <div className="reviews__top">
                                    <div className="reviews__person">
                                        <div className="reviews__photo">
                                            <img src={PersonIcon} alt="" />
                                        </div>
                                        <div className="reviews__info">
                                            <div className="reviews__date">14 октября 2021</div>
                                            <div className="reiews__name">Светлана Дьяченко </div>
                                        </div>
                                    </div>
                                    <div className="reviews__rating">
                                        <div className="reviews__star">
                                            <img src={StarActiveIcon} alt="" />
                                        </div>
                                        <div className="reviews__star">
                                            <img src={StarActiveIcon} alt="" />
                                        </div>
                                        <div className="reviews__star">
                                            <img src={StarActiveIcon} alt="" />
                                        </div>
                                        <div className="reviews__star">
                                            <img src={StarActiveIcon} alt="" />
                                        </div>
                                        <div className="reviews__star">
                                            <img src={StarIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews__text">
                                    Долго выбирала, ставить ванную или душевую кабину в квартиру.
                                    Хотела сэкономить место, но боялась, что будет неудобно
                                    принимать душ в кабине. Написала консультанту в онлайн-чат.
                                    Какое было мое удивление, когда он ответил через минуту.
                                    Подробно ответил на мои вопросы, рассказал о технических
                                    особенностях.
                                </div>
                            </div>
                        </div>
                        <div className="reviews__item">
                            <div className="reviews__inner">
                                <div className="reviews__top">
                                    <div className="reviews__person">
                                        <div className="reviews__photo">
                                            <img src={PersonIcon} alt="" />
                                        </div>
                                        <div className="reviews__info">
                                            <div className="reviews__date">14 октября 2021</div>
                                            <div className="reiews__name">Светлана Дьяченко </div>
                                        </div>
                                    </div>
                                    <div className="reviews__rating">
                                        <div className="reviews__star">
                                            <img src={StarActiveIcon} alt="" />
                                        </div>
                                        <div className="reviews__star">
                                            <img src={StarActiveIcon} alt="" />
                                        </div>
                                        <div className="reviews__star">
                                            <img src={StarActiveIcon} alt="" />
                                        </div>
                                        <div className="reviews__star">
                                            <img src={StarActiveIcon} alt="" />
                                        </div>
                                        <div className="reviews__star">
                                            <img src={StarIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews__text">
                                    Долго выбирала, ставить ванную или душевую кабину в квартиру.
                                    Хотела сэкономить место, но боялась, что будет неудобно
                                    принимать душ в кабине. Написала консультанту в онлайн-чат.
                                    Какое было мое удивление, когда он ответил через минуту.
                                    Подробно ответил на мои вопросы, рассказал о технических
                                    особенностях.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsList;
