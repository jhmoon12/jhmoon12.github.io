import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

let 초기값 = [
  { id : 0 ,
    title : "shoes1", 
    quan : 2 
  },
  { id : 1 ,
    title : "shoes2", 
    quan : 5 
  },
  { id : 2 ,
    title : "shoes3", 
    quan : 7 
  },
]
let alarm = true;

/* -- state 모음 -- */

function reducer2(state = alarm, action){
  if(action.type === '알림닫기'){
    return state = false;
    
  }else{
    return state;
  }
};

function reducer(state = 초기값, action){

  
  if( action.type === '상품추가' ){
    let found = state.findIndex((data)=>{ return data.id === action.payload.id })
    if( found>= 0 ){
      let copy = [...state];
      copy[found].quan++;
      return copy;
    }else{
      let copy = [...state];
      copy.push(action.payload);
      return copy;
    }
  }else if( action.type === '수량증가'){
    let copy = [...state];
    copy[action.payload].quan++;
    return copy;  
  }else if ( action.type === '수량감소' ) { 
      let copy = [...state];
      copy[action.payload].quan--;
      return copy;
  }else{
    return state
  }
  
};

/* -- reducer 함수 모음 -- */

let store = createStore(combineReducers({reducer, reducer2}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
