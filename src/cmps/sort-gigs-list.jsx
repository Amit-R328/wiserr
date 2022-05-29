import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'price', label: 'Price' },
  { value: 'name', label: 'Name' },
  { value: 'newest', label: 'Newest Arrivals' },
];

export const SortGigsList = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="select-sort-gigs-list">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder="Newest Arrivals"
      />
    </div>
  );
}