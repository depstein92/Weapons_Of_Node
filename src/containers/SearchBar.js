import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/index';
import { PropagateLoader } from 'react-spinners';
import ReactMarkdown from 'react-markdown';
import '../styles/index.css';
import Header from '../components/Header';
import NPMHeader from '../components/NPMHeader';
import npmIcon from '../styles/npm_icon.png';
import Footer from '../components/Footer';
import { ControlLabel,
         FormGroup,
         FormControl,
         Button,
         Image } from 'react-bootstrap';


class SearchBar extends Component{

  constructor(props){
    super(props);

    this.state = {
      value: '' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
  }

  onFormSubmit(event){
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
        <NPMHeader />
        <FormGroup
          className="form-group-search"
          bsSize="lg"
          controlId="formBasicText">
          <FormControl
            type="text"
            value={this.state.input}
            placeholder="Search Any NPM Package"
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
        <Footer />
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
