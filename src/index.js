import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './main/HomePage';

import './scss/main.scss';
import './scss/main_media.scss';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
