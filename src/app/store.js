import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import additionReducer from './reducers/addition.js';
import {createLogger} from 'redux-logger'

const logger = createLogger();

// const store = createStore(reducer, {id: 0,text: 'default',username: ['first user']});

const store = createStore(additionReducer, window.devToolsExtension
? window.devToolsExtension()
: f => f, applyMiddleware(logger));

// console.log('Initial State..');
// console.log(store.getState());

// store.subscribe(() => {
//     console.log('State updated to..');
//     console.log(store.getState());
// })

// store.dispatch({id: 0, type: 'ADD', text: 'First addition to state'})

// store.dispatch({id: 1, type: 'ADD', text: 'Second addition to state'})

// store.dispatch({id: 1, type: 'SET_NAME', text: 'from store'})

window.store = store;
export default store;
