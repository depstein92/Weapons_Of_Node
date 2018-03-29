import React, { Component } from 'react';
import { FormGroup } from '@blueprintjs/core'

class SearchBar extends Component{
  render(){
    return (
<FormGroup
    label="NPM Search Engine"
    labelFor="text-input"
    inline={true}
    requiredLabel={false}>
    <input id="text-input" placeholder="Search for Any package" />
</FormGroup>
    )
  }
}

export default SearchBar;
