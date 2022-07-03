import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import { loadGigs, setFilter } from '../../store/actions/gig.actions.js'

export const SortGigsList = () => {
  const [selectedOption, setSelectedOption] = useState('title')
  const dispatch = useDispatch()
  let { filterBy } = useSelector((storeState) => storeState.gigModule)
  const options = [
    { value: 'price', label: 'Price' },
    { value: 'title', label: 'Title' },
  ]
  
  const onHandleChange = (ev) => {
    setSelectedOption(ev.value)
  }

  useEffect(() => {
    filterBy = { ...filterBy, sortBy: selectedOption }
    dispatch(setFilter(filterBy))
    dispatch(loadGigs())
  }, [selectedOption])

  return (
      <Select
        classNamePrefix="sort-gigs-list"
        defaultValue={'title'}
        onChange={onHandleChange}
        options={options}
        placeholder="Title"
      />
  )
}