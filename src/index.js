import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App/App';

const loadScript = () => {
  const script = document.createElement('script');
  script.onload = function () {
      window.dataLayer = window.dataLayer || [];
    
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'UA-149871373-1');
    };
  script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-149871373-1';
  document.head.appendChild(script);
};

loadScript();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
