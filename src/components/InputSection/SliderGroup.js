// src/components/InputSection/SliderGroup.js
import React from 'react';
import SliderInput from './SliderInput';

const SliderGroup = ({ inputs, handleChange, slidersConfig }) => {
  console.log(inputs); // Log inputs to check their values
  return (
    <div className="mb-4">
      {slidersConfig.map((slider) => (
        <SliderInput
          key={slider.key}
          label={slider.label}
          value={slider.type === 'percentage' ? inputs[slider.key] * 100 : inputs[slider.key]} // Convert to percentage for sliders
          min={slider.min}
          max={slider.max}
          step={slider.step}
          onChange={(value) =>
            handleChange(slider.key, slider.type === 'percentage' ? value / 100 : value) // Store as decimal for percentages
          }
        />
      ))}
    </div>
  );
};

export default SliderGroup;
