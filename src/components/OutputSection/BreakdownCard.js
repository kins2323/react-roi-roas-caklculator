// src/components/OutputSection/BreakdownCard.js
import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

const BreakdownCard = ({ results }) => {
  // Ensure that all necessary fields are checked and formatted properly
  const totalAdSpend = typeof results.adSpend === 'number' ? results.adSpend.toFixed(2) : 'N/A';
  const totalRevenue = results.expectedRevenue ? parseFloat(results.expectedRevenue).toFixed(2) : 'N/A';
  const calculatedClicks = results.clicks !== 'N/A' ? results.clicks : 'N/A';
  const calculatedLeads = results.leads !== 'N/A' ? results.leads : 'N/A';
  const expectedProfit = results.expectedProfit ? parseFloat(results.expectedProfit).toFixed(2) : 'N/A';
  const calculatedROAS = results.roas !== 'N/A' ? results.roas : 'N/A';
  const calculatedROI = results.roi !== 'N/A' ? results.roi : 'N/A';
  const costPerLead = results.costPerLead !== 'N/A' ? results.costPerLead : 'N/A';
  const valueOfLead = results.valueOfLead !== 'N/A' ? results.valueOfLead : 'N/A';

  // Determine the icon color and direction based on performance
  const isProfitPositive = expectedProfit !== 'N/A' && parseFloat(expectedProfit) > 0;
  const isROASPositive = calculatedROAS !== 'N/A' && parseFloat(calculatedROAS) > 1; // Assuming ROAS > 1 is good
  const isRevenuePositive = totalRevenue !== 'N/A' && parseFloat(totalRevenue) > 0;
  const isROIPostive = calculatedROI !== 'N/A' && parseFloat(calculatedROI) > 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-black">
      <h3 className="text-lg font-semibold text-center mb-4">Metrics Breakdown</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center flex items-center justify-between">
          <p>Total Ad Spend: <span className="font-bold">${totalAdSpend}</span></p>
        </div>
        <div className={`bg-gray-100 p-4 rounded-lg shadow-md text-center flex items-center justify-between`}>
          <p>Total Revenue: <span className="font-bold">${totalRevenue}</span></p>
          {isRevenuePositive ? (
            <ArrowUpIcon className="h-5 w-5 text-green-600" />
          ) : (
            <ArrowDownIcon className="h-5 w-5 text-red-600" />
          )}
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center flex items-center justify-between">
          <p>Number of Clicks: <span className="font-bold">{calculatedClicks}</span></p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center flex items-center justify-between">
          <p>Number of Leads: <span className="font-bold">{calculatedLeads}</span></p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center flex items-center justify-between">
          <p>Cost per Lead: <span className="font-bold">${costPerLead}</span></p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center flex items-center justify-between">
          <p>Value of a Lead: <span className="font-bold">${valueOfLead}</span></p>
        </div>
        <div className={`bg-gray-100 p-4 rounded-lg shadow-md text-center flex items-center justify-between`}>
          <p>Expected Profit: <span className="font-bold">${expectedProfit}</span></p>
          {isProfitPositive ? (
            <ArrowUpIcon className="h-5 w-5 text-green-600" />
          ) : (
            <ArrowDownIcon className="h-5 w-5 text-red-600" />
          )}
        </div>
        <div className={`bg-gray-100 p-4 rounded-lg shadow-md text-center flex items-center justify-between`}>
          <p>Calculated ROAS: <span className="font-bold">{calculatedROAS}</span></p>
          {isROASPositive ? (
            <ArrowUpIcon className="h-5 w-5 text-green-600" />
          ) : (
            <ArrowDownIcon className="h-5 w-5 text-red-600" />
          )}
        </div>
        <div className={`bg-gray-100 p-4 rounded-lg shadow-md text-center flex items-center justify-between`}>
          <p>Calculated ROI: <span className="font-bold">{calculatedROI}</span></p>
          {isROIPostive ? (
            <ArrowUpIcon className="h-5 w-5 text-green-600" />
          ) : (
            <ArrowDownIcon className="h-5 w-5 text-red-600" />
          )}
        </div>
      </div>
    </div>
  );
};

export default BreakdownCard;
