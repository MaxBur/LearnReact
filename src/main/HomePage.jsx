import { Routes, Route } from 'react-router-dom';

import ReviewsPage from '../Reviews/ReviewsPage';
import FaqPage from '../Faq/FaqPage';
import HeadLink from './HeadLink';

import aLinks from './linksArr';

function HomePage() {
    return (
        <div>
            <div className="b-header">
                <div className="header__wrapper">
                    <HeadLink aLink={aLinks} />
                </div>
            </div>
            <div className="container">
                <Routes>
                    <Route exap path="/" element={<ReviewsPage />} />
                    <Route exap path="/faq" element={<FaqPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default HomePage;
