import {createStore} from 'redux'
import rootReducer from '../reducers'
import {saveState, loadState} from './localStorage'
import throttle from 'lodash/throttle'

const configureStore = () => {
  const persistedState = loadState('state');
  const store = createStore(rootReducer, persistedState);
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    });
  }),1000)
  return store;
}
export default configureStore
