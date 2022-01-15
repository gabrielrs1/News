import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/auth';
import { ModalProvider } from './context/modal';
import { PaymentProvider } from './context/payment';

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <AuthProvider>
        <PaymentProvider>
          <App />
        </PaymentProvider>
      </AuthProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
