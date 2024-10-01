// eslint-disable-next-line no-unused-vars
import React from 'react';

const protocols = [
  { name: 'Rocket Pool', change: '+3.27%', price: '$14.13', balance: '$3,010.250' },
  { name: 'Lido', change: '-5.27%', price: '$14.13', balance: '$3,010.250' },
  { name: 'AAVE', change: '+6.27%', price: '$14.13', balance: '$3,010.250' },
  // Add other protocols here...
];

function ProtocolsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Protocol</th>
          <th>24h Change</th>
          <th>Price</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {protocols.map((protocol, index) => (
          <tr key={index}>
            <td>{protocol.name}</td>
            <td>{protocol.change}</td>
            <td>{protocol.price}</td>
            <td>{protocol.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProtocolsTable;
