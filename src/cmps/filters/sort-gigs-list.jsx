import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { loadGigs, setFilter } from '../../store/actions/gig.actions.js'

const options = [
  { value: 'price', label: 'Price' },
  { value: 'title', label: 'Title' },
]

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
    dispatch(loadGigs())
  }, [selectedOption])

  return (
    // <div className="sort-gigs-list">
      <Select
        classNamePrefix="sort-gigs-list"
        defaultValue={'title'}
        onChange={onHandleChange}
        options={options}
        placeholder="Title"
      />
    // </div>
  )
}