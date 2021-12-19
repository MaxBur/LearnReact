import React from 'react';

import FaqItem from './FaqItem';

function FaqList({ aFaq }) {
    return (
        <div className="faq__list">
            {aFaq && aFaq.map((faq, index) => <FaqItem aFaq={faq} index={index} />)}
        </div>
    );
}

export default FaqList;
