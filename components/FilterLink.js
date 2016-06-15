import React,{ Component }  from 'react'
import * as types from '../constants/ActionTypes'

const FilterLink = ({filter, children, currentFilter, onClick}) => {
  if(filter === currentFilter) {
    return <span>{children}</span>
  }
  return (
    <a href="#" onClick={e => {
      e.preventDefault();
      onClick(filter)
    }}>{children}</a>
  )
}

export default FilterLink
