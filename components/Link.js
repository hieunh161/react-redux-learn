import React,{ Component }  from 'react'

const Link = ({ active, children, onClick}) => {
  if(active) {
    return <span>{children}</span>
  }
  return (
    <a href="#" onClick={onClick}>{children}</a>
  )
}

export default Link
