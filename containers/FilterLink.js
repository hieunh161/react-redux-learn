import React,{ Component }  from 'react'
import Link from '../components/Link'
import { connect } from 'react-redux'
import {setVisibileFilter} from '../actions'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick() {
      dispatch(
        setVisibileFilter(ownProps.filter)
      )
    }
  }
}
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
