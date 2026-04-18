import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // ❗ ВОТ ЭТО ВАЖНО
import reportWebVitals from './reportWebVitals';

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* ❗ ВОТ ЭТО ГЛАВНОЕ */}
  </React.StrictMode>
);

reportWebVitals();