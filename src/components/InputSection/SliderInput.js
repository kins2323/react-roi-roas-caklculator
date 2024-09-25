// src/components/InputSection/SliderInput.js
import React from 'react';

const SliderInput = ({ label, value, min, max, step, onChange }) => {
  // Ensure value is a number and fallback to 0 if not
  const displayValue = typeof value === 'number' ? value : 0;

  return (
    <div className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center justify-between mt-2">
        <input
          type="range"
          value={displayValue}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #fe410c 0%, #fe410c ${((displayValue - min) / (max - min)) * 100}%, #ddd ${((displayValue - min) / (max - min)) * 100}%, #ddd 100%)`,
          }}
        />
        <input
          type="number"
          value={displayValue.toFixed(2)}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className="ml-2 w-20 border border-gray-300 rounded-md p-1"
        />
      </div>
      <div className="mt-1 text-center text-sm text-gray-600">{displayValue.toFixed(2)}</div> {/* Display the current value */}
      
      <style jsx>{`
        input[type='range'] {
          -webkit-appearance: none; /* Override default CSS styles */
          appearance: none; /* Override default CSS styles */
        }
        
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px; /* Adjust width of the thumb */
          height: 24px; /* Adjust height of the thumb */
          background: black; /* Color of the thumb */
          border: 2px solid #fe410c; /* Color of the border */
          border-radius: 50%; /* Rounded thumb */
          cursor: pointer; /* Cursor style when hovering over the thumb */
          margin-top: -10px; /* Center the thumb vertically */
        }
        
        input[type='range']::-moz-range-thumb {
          width: 24px; /* Adjust width of the thumb */
          height: 24px; /* Adjust height of the thumb */
          background: black; /* Color of the thumb */
          border: 2px solid #fe410c; /* Color of the border */
          border-radius: 50%; /* Rounded thumb */
          cursor: pointer; /* Cursor style when hovering over the thumb */
        }
        
        input[type='range']::-ms-thumb {
          width: 24px; /* Adjust width of the thumb */
          height: 24px; /* Adjust height of the thumb */
          background: black; /* Color of the thumb */
          border: 2px solid #fe410c; /* Color of the border */
          border-radius: 50%; /* Rounded thumb */
          cursor: pointer; /* Cursor style when hovering over the thumb */
        }
        
        input[type='range']::-webkit-slider-runnable-track {
          height: 4px; /* Height of the track */
          border-radius: 5px; /* Rounded track */
        }
        
        input[type='range']::-moz-range-track {
          height: 4px; /* Height of the track */
          border-radius: 5px; /* Rounded track */
        }

        input[type='range']::-ms-track {
          height: 4px; /* Height of the track */
          border-radius: 5px; /* Rounded track */
          background: transparent; /* To ensure track background shows through */
          border-color: transparent; /* Prevent border color */
          color: transparent; /* Hide track color */
        }

        input[type='range']::-ms-fill-lower {
          background: #fe410c; /* Lower part of the track */
        }

        input[type='range']::-ms-fill-upper {
          background: #ddd; /* Upper part of the track */
        }
      `}</style>
    </div>
  );
};

export default SliderInput;
