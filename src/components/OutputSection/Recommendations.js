import React from 'react';

const Recommendations = ({ roas, roi, targetROI = 0, industry = "general" }) => {
  const industryRecommendations = (industry) => {
    switch (industry.toLowerCase()) {
      case 'ecommerce':
        return (
          <>
            {roas < 1 && (
              <li>
                <strong>Action:</strong> Conduct a thorough review of your product pricing and ad spend. Identify areas where you can increase product value or reduce costs to improve your ROAS.
              </li>
            )}
            {roi < targetROI && (
              <li>
                <strong>Action:</strong> Analyze your cart abandonment rate and checkout process. Implement strategies to reduce friction and increase conversions, such as offering free shipping or easy payment options.
              </li>
            )}
          </>
        );
      case 'real estate':
        return (
          <>
            {roas < 1 && (
              <li>
                <strong>Action:</strong> Refine your targeting to focus on high-value leads. Consider using geographic data and demographic information to identify potential buyers with greater purchasing power.
              </li>
            )}
            {roi < targetROI && (
              <li>
                <strong>Action:</strong> Review your lead nurturing strategies. Ensure your follow-up emails and calls are personalized and provide valuable information to guide potential buyers through the sales process.
              </li>
            )}
          </>
        );
      case 'software':
        return (
          <>
            {roas < 1 && (
              <li>
                <strong>Action:</strong> Revisit your product messaging. Clearly articulate the unique benefits and value propositions of your software to attract more qualified leads.
              </li>
            )}
            {roi < targetROI && (
              <li>
                <strong>Action:</strong> Review your user onboarding processes. Ensure that your ads highlight the key features and benefits that resonate with your target audience.
              </li>
            )}
          </>
        );
      default:
        return (
          <>
            {roas < 1 && (
              <li>
                <strong>Action:</strong> Optimize your ad targeting and spend efficiency. Use advanced targeting options and A/B testing to identify the most effective ad placements and messaging.
              </li>
            )}
            {roi < targetROI && (
              <li>
                <strong>Action:</strong> Analyze your marketing funnel to identify areas for improvement. Track key metrics like lead generation, conversion rates, and customer lifetime value to pinpoint bottlenecks.
              </li>
            )}
          </>
        );
    }
  };

  return (
    <div className="mt-4 p-6 border rounded-lg shadow-lg bg-gray-100">
      <h3 className="text-lg font-semibold text-center">Recommendations</h3>
      <ul className="list-disc ml-5">
        {/* ROAS Recommendations */}
        {roas < 1 && (
          <li>
            <strong>Action:</strong> Your ROAS is below 1, indicating a loss. Optimize your ad spend by refining targeting, experimenting with different ad formats, and monitoring performance metrics.
          </li>
        )}
        {roas >= 1 && roas < 3 && (
          <li>
            <strong>Action:</strong> Your ROAS is moderate. Try refining your audience segmentation to target more profitable customers. Consider using lookalike audiences or interest-based targeting.
          </li>
        )}
        {roas >= 3 && (
          <li>
            <strong>Action:</strong> Great job! Your ROAS is excellent. Consider scaling your campaigns to maximize revenue while maintaining profitability.
          </li>
        )}

        {/* ROI Recommendations */}
        {roi < targetROI && (
          <li>
            <strong>Action:</strong> Your ROI is below target. Evaluate your current strategy to identify where costs can be reduced or revenue increased. Consider optimizing bidding strategies, reducing ad frequency, or improving conversion rates.
          </li>
        )}
        {roi >= targetROI && (
          <li>
            <strong>Action:</strong> Your ROI is meeting or exceeding your target! Keep up the good work and maintain the momentum. Consider testing new strategies or expanding your reach to further optimize your campaigns.
          </li>
        )}

        {/* Industry-Specific Recommendations */}
        {industryRecommendations(industry)}

        {/* Call to Action */}
        <li className="mt-4 text-blue-500">
          <strong>Action:</strong> For tailored marketing strategies and further improvements,
          <a href="/services" className="font-bold">
            contact our team of experts
          </a>
          . We can provide personalized guidance and implement effective solutions to help you achieve your marketing goals.
        </li>
      </ul>
    </div>
  );
};

export default Recommendations;