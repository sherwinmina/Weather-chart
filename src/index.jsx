import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const createStoreWithMiddleware = applyMiddleware()(createStore);

const API_KEY = AIzaSyBFEKvZVIfp8AnQO0tN6TqVe0zk717TXrk;

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  )
}

ReactDOM.render( <App />, document.querySelector('.container'));
