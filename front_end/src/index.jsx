import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promisse from 'redux-promise'

import App from './main/app'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__()
//Chama o middleware para resolver a prommise para depois chamar o metodo create store com o parametro reducers
const store = applyMiddleware(promisse)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />    
    </Provider>
, document.getElementById('app'))
