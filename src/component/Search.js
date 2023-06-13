import React from 'react';
import Infogrid from './Infogrid';
import Statsgrid from './Statsgrid';
import Teamgrid from './Teamgrid';

function Search(option1, option2) {
  if(option1 === 'player') {
    if(option2 === 'name') {
      return <Infogrid/>;
    }
    if(option2 === 'team'){
      return <Infogrid/>;

    }
    if(option2 === 'position'){
      return <Infogrid/>;
    }
    if(option2 === 'back-number') {
      return <Infogrid/>;
    }
  } else if (option1 === 'stats') {
    if(option2 === 'name') {
      return <Statsgrid/>;
    }
  } else if(option1 === 'team') {
    if(option2 === 'team_name') {
      return <Teamgrid/>;
    }
    if(option2 === 'city'){
      return <Teamgrid/>;
    }
    if(option2 === 'abbreviation'){
      return <Teamgrid/>;
    }
  }
}

export default Search;