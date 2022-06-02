import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useSelector,useDispatch } from 'react-redux';
import { loadGigs, setFilter } from '../../store/actions/gig.actions.js'


const options = [
  { value: 'price', label: 'Price' },
  { value: 'title', label: 'Title' },
  // { value: 'newest', label: 'Newest Arrivals' },
];

export const SortGigsList = () => {
  const [selectedOption, setSelectedOption] = useState('title');
  const dispatch = useDispatch()
  let { filterBy } = useSelector((storeState) => storeState.gigModule)

  const onHandleChange = (ev) => {
    setSelectedOption(ev.value)
    }

    useEffect(() => {
      filterBy = { ...filterBy, sortBy: selectedOption }
      dispatch(setFilter(filterBy))
      // dispatch(setFilter(selectedOption))  
      dispatch(loadGigs()) 
    },[selectedOption])

  return (
    <div className="select-sort-gigs-list">
      <Select
        defaultValue={'title'}
        onChange={onHandleChange}
        // onClick={() => onHandleChange}
        options={options}
        placeholder="Title"        
        // inputValue={selectedOption}
      />
    </div>
  );
}