import React from 'react';
import ReactDOM from 'react-dom';
import { WagmiProvider } from 'wagmi';  // Hypothetical new component
import { wagmiConfig } from './wagmiconfig';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <App />
    </WagmiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
