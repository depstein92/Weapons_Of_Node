import React, { Component } from 'react';
import { FormGroup } from '@blueprintjs/core'
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/index';

class SearchBar extends Component{

  constructor(props){
    super(props);

    this.state = { input: ''};
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event){
    event.preventDefault();
  }

  componentDidMount(){
   this.props.fetchData('react');
  }


  render(){
   console.log('props: ', this.props);
   if(this.props.errors){
     return;
   }

   if(this.props.loading){
     return;
   }

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

const mapStateToProps = (state) => {
        return {
            items: state.items,
            hasError: state.itemsHaveError,
            isLoading: state.itemsAreLoading
        };
    };

const mapDispatchToProps = (dispatch) => {
          return {
              fetchData: (word) => dispatch(itemsFetchData(word))
            };
        };


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
