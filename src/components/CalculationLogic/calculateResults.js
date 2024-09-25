// src/components/CalculationLogic/calculateResults.js
export const calculateResults = (inputs) => {
  // Check if inputs are provided
  if (!inputs) {
    console.error("No inputs provided");
    return null; // Or handle as necessary
  }

  const {
    adSpend,
    expectedCPC,
    targetConversionRate,
    averageSalesPrice,
    leadToCustomerRate,
  } = inputs;

  // Parse inputs to numbers, defaulting to 0 if invalid
  const parsedAdSpend = parseFloat(adSpend) || 0; 
  const parsedExpectedCPC = parseFloat(expectedCPC) || 0; 
  const parsedTargetConversionRate = parseFloat(targetConversionRate) || 0; 
  const parsedAverageSalesPrice = parseFloat(averageSalesPrice) || 0; 
  const parsedLeadToCustomerRate = parseFloat(leadToCustomerRate) || 0; 

  // Log parsed values for debugging
  console.log("Parsed Values - Ad Spend:", parsedAdSpend, 
              "Expected CPC:", parsedExpectedCPC, 
              "Target Conversion Rate:", parsedTargetConversionRate, 
              "Average Sales Price:", parsedAverageSalesPrice, 
              "Lead to Customer Rate:", parsedLeadToCustomerRate);

  // Calculate number of clicks
  const clicks = parsedExpectedCPC > 0 ? Math.ceil(parsedAdSpend / parsedExpectedCPC) : 0;

  // Calculate number of leads
  const leads = parsedTargetConversionRate > 0 ? Math.ceil(clicks * parsedTargetConversionRate) : 0;

  // Calculate cost per lead
  const costPerLead = leads > 0 ? (parsedAdSpend / leads).toFixed(2) : 'N/A';

  // Calculate value of a lead
  const valueOfLead = (parsedAverageSalesPrice * parsedLeadToCustomerRate).toFixed(2);

  // Calculate expected revenue
  const expectedRevenue = (leads * valueOfLead).toFixed(2);

  // Calculate expected profit
  const expectedProfit = (expectedRevenue - parsedAdSpend).toFixed(2);

  // Calculate ROAS
  const roas = parsedAdSpend > 0 ? ((expectedRevenue / parsedAdSpend) * 100).toFixed(2) : 'N/A'; 

  // Calculate ROI
  const roi = parsedAdSpend > 0 ? (((expectedRevenue - parsedAdSpend) / parsedAdSpend) * 100).toFixed(2) : 'N/A'; 

  // Log calculated results for debugging
  console.log("Calculated Results - Clicks:", clicks, 
              "Leads:", leads, 
              "Cost per Lead:", costPerLead, 
              "Value of a Lead:", valueOfLead, 
              "Expected Revenue:", expectedRevenue, 
              "Expected Profit:", expectedProfit, 
              "Calculated ROAS:", roas, 
              "Calculated ROI:", roi);

  // Prepare data for chart
  const dataChart = {
    labels: ['ROAS', 'ROI'],
    values: [parseFloat(roas) || 0, parseFloat(roi) || 0], 
  };

  return {
    adSpend: parsedAdSpend,
    clicks: clicks,
    leads: leads,
    costPerLead: costPerLead,
    valueOfLead: valueOfLead,
    expectedRevenue: expectedRevenue,
    expectedProfit: expectedProfit,
    roas: roas,
    roi: roi,
    dataChart,
  };
};
