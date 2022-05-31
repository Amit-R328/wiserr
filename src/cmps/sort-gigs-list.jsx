import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'price', label: 'Price' },
  { value: 'name', label: 'Name' },
  { value: 'newest', label: 'Newest Arrivals' },
];

export const SortGigsList = ({onHandleChange}) => {
  const [selectedOption, setSelectedOption] = useState(null);


  
//   handleChange = (selectedOption) => {
//     this.setState((prevState) => ({
//         toy: {
//             ...prevState.toy,
//             labels: selectedOption.map(option => option.value)
//         }
//     }))
// }

  return (
    <div className="select-sort-gigs-list">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        onClick={(ev) => onHandleChange(ev,'sortBy',setSelectedOption)}
        options={options}
        placeholder="Newest Arrivals"        
      />
    </div>
  );
}