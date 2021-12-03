import React from 'react';
import ReactDOM from 'react-dom';

import { ReviewList } from './components';

import './scss/main.scss';

ReactDOM.render(
    <React.StrictMode>
        <ReviewList />
    </React.StrictMode>,
    document.getElementById('root'),
);
