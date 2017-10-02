import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default App => { 
    return (
      <div>
        <SearchBar/>
        <WeatherList/>
      </div>
  )
}
