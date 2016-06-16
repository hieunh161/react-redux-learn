import React,{ Component }  from 'react'
import * as types from '../constants/ActionTypes'
import Link from '../components/Link'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => { dispatch({
        type: types.SET_VISIBILITY_FILTER,
        filter: ownProps.filter
    })}
  }
}
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
