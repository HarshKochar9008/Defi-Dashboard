// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import BalanceChart from './balance';
import ProtocolsTable from '../table';
import FilterButtons from '../filter';

function Dashboard() {
  const [timeframe, setTimeframe] = useState('12 months');

  return (
    <div className="dashboard">
      <h1>Welcome back, David</h1>
      <FilterButtons setTimeframe={setTimeframe} />
      <BalanceChart timeframe={timeframe} />
      <ProtocolsTable />
    </div>
  );
}

export default Dashboard;
