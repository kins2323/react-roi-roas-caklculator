import React from 'react';

const calculateNeedlePosition = (value) => {
  if (value < 0) return -90;
  if (value > 100) return 90;
  return (value / 100) * 180 - 90;
};

const Gauge = ({ value, label }) => {
  const needlePosition = calculateNeedlePosition(value);
  const valueColor = value < 0 ? 'text-red-600' : 'text-green-600';
  const backgroundColor = value < 0 ? 'bg-red-100' : 'bg-green-100';
  const arrow = value < 0 ? '↓' : '↑';

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h4 className="font-semibold mb-4">{label}</h4>

      {/* Gauge Container */}
      <div className="relative w-64 h-32 mx-auto">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full rounded-t-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"></div>
        </div>

        {/* Needle */}
        <div
          className="absolute bottom-0 left-1/2 transform"
          style={{
            height: '80%',
            width: '26px',
            backgroundColor: 'black',
            transform: `rotate(${needlePosition}deg) translateX(-50%)`,
            transformOrigin: 'bottom',
            clipPath: 'polygon(50% 0%, 55% 100%, 45% 100%)',
          }}
        />
      </div>

      {/* Display the exact value */}
      <div className={`mt-4 p-4 rounded-lg font-bold ${backgroundColor} ${valueColor}`}>
        {label}: {arrow} {typeof value === 'number' ? value.toFixed(2) : 'N/A'}
      </div>
    </div>
  );
};

export default Gauge;
