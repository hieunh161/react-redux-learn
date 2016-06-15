import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import configureStore from './store/configureStore'

const store = configureStore();
const appRender = () => {
  render(
    <App store={store} {...store.getState()}/>,
    document.getElementById('root')
  )
}
store.subscribe(appRender)
appRender();
