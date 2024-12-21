import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sepolia } from "@thirdweb-dev/chains";
import { StateContextProvider } from './context';
import {  ThirdwebProvider } from '@thirdweb-dev/react';


import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<ThirdwebProvider 
      activeChain={ Sepolia } 
      clientId="dbc5acdae3739eba2506e310ceb0a60e" // You can get a client id from dashboard settings
    >
    <Router>
      <StateContextProvider>
      <App />
      </StateContextProvider>
      
    </Router>
  </ThirdwebProvider> 
)