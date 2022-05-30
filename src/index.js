import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import ChatProvider from './context/ChatProvider.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChatProvider>
    <App />
  </ChatProvider>
);

