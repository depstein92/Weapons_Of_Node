import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/index';
import { PropagateLoader } from 'react-spinners';
import ReactMarkdown from 'react-markdown';
import '../styles/index.css';
import NPMHeader from '../components/NPMHeader';
import Footer from '../components/Footer';
import { FormGroup,
         FormControl,
         Button } from 'react-bootstrap';


class SearchBar extends Component{

  constructor(props){
    super(props);

    this.state = { value: '' };
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
    let { fetchData } = this.props;
    debugger;
    fetchData(input);
  }

  render(){
    let { isLoading, items, hasError } = this.props;
    let { input } = this.state;
    return (
      <div className="search-container">
        <NPMHeader />
        <FormGroup
          className="form-group-search"
          bsSize="lg"
          controlId="formBasicText">
          <FormControl
            type="text"
            value={ input }
            placeholder="Search Any NPM Package"
            onChange={this.handleChange}
            style={{ width: "700px"}}
          />
          <FormControl.Feedback />
          <Button type="submit" onClick={this.onFormSubmit}>Submit</Button>
        </FormGroup>

          { isLoading === true ?
            <div className="spinner">
              <PropagateLoader  />
            </div> :

            <div className="content">
            { items.readme === "ERROR: No README.md file found!" ||
              items.readme === "" ||
              hasError === true ?
              <div className="errorInPackage"></div> :
                  <div></div>
             }

             { Array.isArray(items.readme) === true || hasError === true ?
                 <div></div> :
                  <div className="content-markdown">
                    <ReactMarkdown source={ items.readme } />
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
