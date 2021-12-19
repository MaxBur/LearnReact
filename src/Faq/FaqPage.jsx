import React from 'react';

import './scss/faq.scss';

import aFaq from './faqArr';
import FaqList from './components/FaqList';

function FaqPage() {
    return (
        <div className="b-faq">
            <div className="faq__title">
                <h1>F.A.Q.</h1>
            </div>
            <div className="faq__wrapper">
                <FaqList aFaq={aFaq} />
            </div>
        </div>
    );
}

export default FaqPage;
