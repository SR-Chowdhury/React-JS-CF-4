import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Chapter Four: 1-9
// import App from './introduction/app'

//Chapter Four: 10
// import App from './profile/app'

//Chapter Four: 11
// import App from './split-profile/app'

//Chapter Four: 13
// import App from './props/app'

//Chapter Four: 14
// import App from './modify-props/app'

//Chapter Four: 15
// import App from './pass-function/app'

//Chapter Four: 16
// import App from './children-props/app'

//Chapter Four: Practice Problem 2
// import App from './practice-problem-2/app'

//Chapter Four: Practice Problem 3
import App from './practice-problem-3/app'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
