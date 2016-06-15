import expect from 'expect'
import todos from '../../reducers/todos'
import * as types from '../../constants/ActionTypes'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([])
  })
  it('should add Todo correctly', () => {
    const stateBefore = [];
    const action = {
      type: types.ADD_TODO,
      id: 0,
      text: 'learn redux'
    }
    const stateAfter = [{
      id: 0,
      text: 'learn redux',
      completed: false
    }]
    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter)
  })
  it('should toggle when finished', () => {
    const stateBefore = [{
      completed: false,
      id: 0,
      text: 'learn redux'
    }];
    const action = {
      type: types.TOGGLE_TODO,
      id: 0
    }
    const stateAfter = [{
      id: 0,
      text: 'learn redux',
      completed: true
    }]
    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter)
  })
})
