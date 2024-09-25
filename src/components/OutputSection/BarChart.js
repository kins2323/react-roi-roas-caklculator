import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';

// Register necessary components for the chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler);

const BarChart = ({ data, title }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Ad Spend vs Revenue',
        data: data.values,
        backgroundColor: data.values.map(value => value > 0 ? 'rgba(75,192,192,0.4)' : 'rgba(255,99,132,0.4)'),
        borderColor: data.values.map(value => value > 0 ? 'rgba(75,192,192,1)' : 'rgba(255,99,132,1)'),
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  // Chart options for better customization
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: title || 'Ad Spend vs Revenue',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.dataset.label}: $${tooltipItem.raw}`; // Customize tooltip display
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Metrics', // X-axis title
        },
        grid: {
          display: false, // Hide grid lines for clarity
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount ($)', // Y-axis title
        },
        beginAtZero: true, // Start Y-axis from zero
        grid: {
          color: 'rgba(0,0,0,0.1)', // Lighter grid lines
        },
      },
    },
  };

  return (
    <Bar data={chartData} options={options} />
  );
};

export default BarChart;
