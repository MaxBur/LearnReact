import React from 'react';
import ReactDOM from 'react-dom';

import { ReviewsPage } from './Reviews';

import './scss/main.scss';
import './scss/main_media.scss';

ReactDOM.render(
    <React.StrictMode>
        <ReviewsPage />
    </React.StrictMode>,
    document.getElementById('root'),
);
