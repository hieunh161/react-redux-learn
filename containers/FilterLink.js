import React,{ Component }  from 'react'
import * as types from '../constants/ActionTypes'
import Link from '../components/Link'

export default class FilterLink extends Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const state = props.store.getState();
    return (
      <Link active={
        props.filter === state.visibilityFilter
      }
      onClick={() => {
        props.store.dispatch({
          type: types.SET_VISIBILITY_FILTER,
          filter: props.filter
        })
      }}
      >{props.children}</Link>
    )
  }
}
