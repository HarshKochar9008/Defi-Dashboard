import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

function WalletConnector() {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div>
      {isConnected ? (
        <div>
          <p>Connected as: {address}</p>
          <button onClick={() => disconnect()}>Disconnect Wallet</button>
        </div>
      ) : (
        <div>
          {connectors.map((connector) => (
            <button
              key={connector.id}
              onClick={() => connect({ connector })}
              disabled={!connector.ready}
            >
              {connector.name}
              {!connector.ready && ' (not supported)'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default WalletConnector;
