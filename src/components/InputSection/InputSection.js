// src/components/InputSection/InputSection.js
import React from 'react';
import SliderGroup from './SliderGroup';
import { calculateResults } from '../CalculationLogic/calculateResults';

const InputSection = ({ inputs, setInputs, setResults }) => {
  // Define the configuration for sliders
  const slidersConfig = [
    {
      key: 'adSpend',
      label: 'Advertising Budget ($)',
      min: 0,
      max: 10000,
      step: 100,
    },
    {
      key: 'expectedCPC',
      label: 'Expected CPC ($)',
      min: 0,
      max: 10,
      step: 0.1,
    },
    {
      key: 'targetConversionRate',
      label: 'Target Conversion Rate (%)',
      min: 0,
      max: 100,
      step: 1,
      type: 'percentage',
    },
    {
      key: 'averageSalesPrice',
      label: 'Average Sales Price ($)',
      min: 0,
      max: 500,
      step: 1,
    },
    {
      key: 'leadToCustomerRate',
      label: 'Lead to Customer Rate (%)',
      min: 0,
      max: 100,
      step: 1,
      type: 'percentage',
    },
  ];

  // Handle changes in input and recalculate results in real-time
  const handleChange = (key, value) => {
    setInputs((prev) => ({ ...prev, [key]: value }));

    // Calculate new results and update state
    const newResults = calculateResults({ ...inputs, [key]: value });
    setResults(newResults); // Update results in parent component
  };

  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold text-center mb-4">Calculate ROI</h3>
      <SliderGroup inputs={inputs} handleChange={handleChange} slidersConfig={slidersConfig} />
    </div>
  );
};

export default InputSection;
