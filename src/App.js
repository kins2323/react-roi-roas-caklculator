import React, { useState } from 'react';
import InputSection from './components/InputSection/InputSection';
import OutputSection from './components/OutputSection/OutputSection';

const App = () => {
  const [inputs, setInputs] = useState({
    adSpend: '',
    expectedCPC: '',
    targetConversionRate: '',
    averageSalesPrice: '',
    leadToCustomerRate: '',
  });

  const [results, setResults] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Maximize Your Ad Efficiency with Our Free ROAS & ROI Calculator
        </h2>
        <p className="text-lg text-center">
          Quickly determine the profitability of your advertising campaigns using our ROAS & ROI Calculator. 
          Understand the revenue generated for every dollar spent, and gain deeper insights into your overall business performance. 
          Optimize your ad spend and discover areas for improvement to drive higher returns and business growth. 
          Ideal for marketers and advertisers looking to fine-tune their strategies!
        </p>
      </div>

      <InputSection inputs={inputs} setInputs={setInputs} setResults={setResults} />

      {results && <OutputSection results={results} inputs={inputs} />}
    </div>
  );
};

export default App;
