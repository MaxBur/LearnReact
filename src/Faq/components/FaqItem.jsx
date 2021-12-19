import React from 'react';
import classNames from 'classnames';

function FaqItem({ aFaq, index }) {
    const [faqActive, setFaqActive] = React.useState(false);

    return (
        <div key={aFaq.id} className="faq__item">
            <div className="faq__inner">
                <div
                    className={classNames('faq__question', classNames, {
                        'faq__question--active': faqActive,
                    })}
                    onClick={() => setFaqActive(!faqActive)}>
                    {aFaq.question}
                </div>
                {faqActive && <div className="faq__answer">{aFaq.answer}</div>}
            </div>
        </div>
    );
}

export default FaqItem;
