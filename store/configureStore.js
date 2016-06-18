import {createStore} from 'redux'
import rootReducer from '../reducers'
import {saveState, loadState} from './localStorage'
import throttle from 'lodash/throttle'

const addLoggingToDispath = (store) => {
  const rawDispath = store.dispatch
  // return function that the same value with dispatch
  // but add logging to previous state and next state
  return (action) => {
    console.group(action.type)
    console.log('%c prev State', 'color: gray',store.getState());
    console.log('%c action', 'color: blue' ,action);
    const returnValue = rawDispath(action);
    console.log('%c next State', 'color: green ', store.getState());
    console.groupEnd(action.type)
    return returnValue
  }
}

const configureStore = () => {
  const persistedState = loadState('state');
  const store = createStore(rootReducer, persistedState);
  // override dispatch method with additional loggin function
  if(process.env.NODE_ENV !== 'production'){
    store.dispatch = addLoggingToDispath(store)
  }
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    });
  }),1000)
  return store;
}
export default configureStore
