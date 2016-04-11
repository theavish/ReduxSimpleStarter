import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

const YT_API_KEY = 'AIzaSyCor4XzA4GsDvFJSSD76QY8lo7yPwdOUrA';

// Create a new component. This component should produce some html
const App = () => {
  return (
    <div> 
      <SearchBar />
    </div>
  );
}
// Take the component's generated html, and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));