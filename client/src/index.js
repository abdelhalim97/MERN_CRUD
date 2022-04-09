import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers'
import { Provider } from 'react-redux';
// import { createRoot } from 'react-dom/client';

const store=createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
      <App />
     </Provider>    
    ,
  document.getElementById('root')
);
// const root = createRoot(document.getElementById('root'))

// root.render(
  // <Provider store={store}>
//     <App/>
// </Provider>
//   )