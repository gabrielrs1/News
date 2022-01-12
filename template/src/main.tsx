import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/auth';
import { PaymentProvider } from './context/payment';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <PaymentProvider>
        <App />
      </PaymentProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
