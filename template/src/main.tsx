import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/auth';
import { ModalProvider } from './context/modal';
import { PaymentProvider } from './context/payment';
import { SubscribeProvider } from './context/subscribe';

ReactDOM.render(
  <React.StrictMode>
    <SubscribeProvider>
      <ModalProvider>
        <AuthProvider>
          <PaymentProvider>
            <App />
          </PaymentProvider>
        </AuthProvider>
      </ModalProvider>
    </SubscribeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
