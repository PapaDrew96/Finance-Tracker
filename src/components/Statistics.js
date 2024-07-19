// src/components/Statistics.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import styled from 'styled-components';

// Registering Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const StatisticsContainer = styled.div`
  margin-bottom: 2rem;
  max-width: 500px; /* Adjust the container width as needed */
  margin: auto; /* Center the chart */
`;

const Statistics = ({ transactions }) => {
  // Calculate totals for income and expense
  const incomeTotal = transactions
    .filter(t => t.type === 'income')
    .reduce((total, t) => total + t.amount, 0);

  const expenseTotal = transactions
    .filter(t => t.type === 'expense')
    .reduce((total, t) => total + t.amount, 0);

  // Prepare data for the pie chart
  const data = {
    labels: ['Income', 'Expense'],
    datasets: [{
      data: [incomeTotal, expenseTotal],
      backgroundColor: ['#4CAF50', '#F44336'],
      label: 'Total Amounts',
    }],
  };

  // Prepare options for tooltips and legend
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || 0;
            return `${label}: $${value.toFixed(2)}`;
          }
        }
      },
      legend: {
        display: true,
        labels: {
          font: {
            size: 16
          }
        }
      }
    }
  };

  return (
    <StatisticsContainer>
      <h2>Statistics</h2>
      <Pie data={data} options={options} />
    </StatisticsContainer>
  );
};

export default Statistics;
