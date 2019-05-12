import React from 'react'

import app, { registry } from './app'
import { render } from 'react-dom';
import { Provider } from 'react-redux';

const store = app.createStore()
render(
  <Provider store={store}>
    <>
      <registry.Component name="ComponentA" />
    </>
  </Provider>,
  document.getElementById('root')
)
