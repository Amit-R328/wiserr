import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { loadGigs, setFilter } from '../store/actions/gig.actions.js'


const options = [
  { value: 'price', label: 'Price' },
  { value: 'title', label: 'Title' },
  // { value: 'newest', label: 'Newest Arrivals' },
];

export const SortGigsList = () => {
  const [selectedOption, setSelectedOption] = useState('title');
  const dispatch = useDispatch()

  const onHandleChange = (ev) => {
    console.log('ev',ev )
    setSelectedOption(ev.value)
    console.log('selectedOption', selectedOption)
    }

    useEffect(() => {
      dispatch(setFilter(selectedOption))  
      dispatch(loadGigs)
      console.log('selectedOption', selectedOption )  
    },[selectedOption])

  return (
    <div className="select-sort-gigs-list">
      <Select
        defaultValue={selectedOption}
        onChange={onHandleChange}
        // onClick={() => onHandleChange}
        options={options}
        // placeholder="Newest Arrivals"        
      />
    </div>
  );
}