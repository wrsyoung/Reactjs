import React from 'react';
import ReactDOM from 'react-dom';

import HeaderComp from './components/HeaderComp';
import App from './components/App';
import FooterComp from './components/FooterComp';

const headerElement = document.getElementById('headercomp');
const rootElement = document.getElementById('root');
const footElement = document.getElementById('footercomp');

// ReactDOM.render(<HeaderComp />, headerElement);
ReactDOM.render(<App />, rootElement);
// ReactDOM.render(<FooterComp />, footElement);
// ReactDOM.render(<App />, rootElement);
