import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const initialState = {
  tips: []
};

const tipReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TIP':
      let currentTips = state.tips;
      console.log(state.tips);

      currentTips.push(action.payload.newTips);
      return { tips: currentTips };
    
    case 'CLEAR_TIP':
      
      return { tips: action.payload.newTips };

  default:
    return state;
  }
};

const store = createStore(tipReducer);

render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
