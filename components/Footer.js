import React,{ Component }  from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => {
  return (
    <p>
      Show:
      {' '}
      <FilterLink
        filter='all'
        >All</FilterLink>
      {' '}
      <FilterLink
        filter='active'
        >Active</FilterLink>
      {' '}
      <FilterLink
        filter='completed'
        >Completed</FilterLink>
    </p>
  )
}

export default Footer
