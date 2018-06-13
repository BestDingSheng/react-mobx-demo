import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { Provider } from 'mobx-react'
import * as stores from './store'

console.log(stores)
ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>,
    document.getElementById('root')
)