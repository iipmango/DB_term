import React, { useState } from 'react';
import { MenuItem, Select } from '@mui/material';

const MyComponent = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleFirstMenuItemChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Select value={selectedOption} onChange={handleFirstMenuItemChange}>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
      </Select>

      {selectedOption === 'option1' ? (
        <Select>
          <MenuItem>Suboption 1</MenuItem>
          <MenuItem>Suboption 2</MenuItem>
        </Select>
      ) : (
        <Select>
          <MenuItem>Alternative 1</MenuItem>
          <MenuItem>Alternative 2</MenuItem>
        </Select>
      )}
    </div>
  );
};

export default MyComponent;
