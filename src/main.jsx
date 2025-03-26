import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Default CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line for Bootstrap

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);