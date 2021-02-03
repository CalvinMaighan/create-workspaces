import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

const app = (
    <HelmetProvider>
        <App/>
    </HelmetProvider>
);

ReactDOM.render(app, document.getElementById('app'));
