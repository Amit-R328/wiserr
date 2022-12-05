import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/root.reducer'

import "mailgo/dist/mailgo.min.js"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)