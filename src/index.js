import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCU_xVDp6rE9lRcs1qV9omkX7hYNwKBDaE';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// Create a new componenet - should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
};

// Take component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
