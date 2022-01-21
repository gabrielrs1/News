import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/auth';
import { ModalProvider } from './context/modal';
import { PaymentProvider } from './context/payment';
import { UnsubscribeProvider } from './context/unsubscribe';

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <UnsubscribeProvider>
        <AuthProvider>
          <PaymentProvider>
            <App />
          </PaymentProvider>
        </AuthProvider>
      </UnsubscribeProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
