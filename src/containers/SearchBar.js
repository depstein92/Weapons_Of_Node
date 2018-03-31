import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/index';
import { PropagateLoader } from 'react-spinners';
import BackgroundSlideshow from 'react-background-slideshow';
import ReactMarkdown from 'react-markdown';
import '../styles/index.css';
import _ from 'lodash';
import { ControlLabel,
         FormGroup,
         FormControl,
         Button } from 'react-bootstrap';


class SearchBar extends Component{

  constructor(props){
    super(props);

    this.state = {
      value: '',
      details: {} };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
  }

  onFormSubmit(event){
    console.log('I have been submitted')
    event.preventDefault();
    this.renderInfo();
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  renderInfo(input = this.state.value){
    this.props.fetchData(input);
  }


  render(){

   console.log(this.props);

    return (
      <div className="search-container">

        <FormGroup
          className="form-group-search"
          bsSize="lg"
          controlId="formBasicText">
          <ControlLabel>NPM Search</ControlLabel>
          <FormControl
            type="text"
            value={this.state.input}
            placeholder="Enter text"
            onChange={this.handleChange}
            style={{ width: "700px"}}
          />
          <FormControl.Feedback />
          <Button type="submit" onClick={this.onFormSubmit}>Submit</Button>
        </FormGroup>

          { this.props.isLoading === true ?
            <div className="spinner">
              <PropagateLoader  />
            </div> :

            <div className="content">
             { Array.isArray(this.props.items) === true ?
                 <div></div> :
                  <div className="content-markdown">
                    <ReactMarkdown source={ this.props.items.readme } />
                  </div>
              }
            </div> }
     </div>
    );
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
