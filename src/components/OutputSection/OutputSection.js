// src/components/OutputSection/OutputSection.js
import React from 'react';
import BreakdownCard from './BreakdownCard'; // Adjust path if necessary
import Gauge from './Gauge'; // Adjust path if necessary
import BarChart from './BarChart'; // Adjust path if necessary
import Recommendations from './Recommendations'; // Adjust path if necessary

const OutputSection = ({ results, inputs }) => {
  console.log("Output Section Results:", results);
  const targetROI = inputs?.targetROI || 0; 
  const industry = inputs?.industry || "general"; 

  const roasValue = results.roas !== 'N/A' ? parseFloat(results.roas) : 0;
  const roiValue = results.roi !== 'N/A' ? parseFloat(results.roi) : 0;

  console.log("ROAS Value:", roasValue, "ROI Value:", roiValue);

  const chartData = {
    labels: ['ROAS', 'ROI'],
    values: [roasValue, roiValue],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
      <h3 className="text-xl font-semibold text-center">YOUR ROI & ROAS</h3>
      
      <BreakdownCard results={results} />
      
      <div className="mt-4 flex flex-wrap justify-around gap-4">
        <Gauge value={roasValue} label="ROAS" />
        <Gauge value={roiValue} label="ROI" />
      </div>
      
      <BarChart data={chartData} title="ROAS vs ROI Comparison" />
      
      <Recommendations 
        roas={results.roas} 
        roi={results.roi} 
        targetROI={targetROI} 
        industry={industry} 
      />
    </div>
  );
};

export default OutputSection;
