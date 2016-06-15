import React,{ Component }  from 'react'
import * as types from '../constants/ActionTypes'

const Link = ({ active, children, onClick}) => {
  if(active) {
    return <span>{children}</span>
  }
  return (
    <a href="#" onClick={onClick}>{children}</a>
  )
}

export default Link
