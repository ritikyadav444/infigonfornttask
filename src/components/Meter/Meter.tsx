import React from 'react';

interface MeterProps {
  value: number;
  min: number;
  max: number;
}

const Meter: React.FC<MeterProps> = ({ value, min, max }) => {
  return (
    <meter value={value} min={min} max={max}>
      {value} out of {max}
    </meter>
  );
};

export default Meter;
