// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', balance: 6000 },
  { name: 'Feb', balance: 10000 },
  { name: 'Mar', balance: 12000 },
  { name: 'Apr', balance: 8000 },
  { name: 'May', balance: 15000 },
  { name: 'Jun', balance: 31000 },
  { name: 'Jul', balance: 17000 },
  { name: 'Aug', balance: 23000 },
  { name: 'Sep', balance: 25000 },
  { name: 'Oct', balance: 19000 },
  { name: 'Nov', balance: 14000 },
  { name: 'Dec', balance: 16000 },
];

function BalanceChart() {
  return (
    <ResponsiveContainer className="chart-container">
      <BarChart data={data}>
        <defs>
          <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" />
            <stop offset="100%" />
          </linearGradient>
        </defs>
        <CartesianGrid className="chart-grid" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="balance" className="bar-fill" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BalanceChart;
