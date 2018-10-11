import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

    state = {
        query: null
    }

    handleInputChange = (e) => {
        this.setState({query: e.target.value});
    }

    handleButtonClick = () => {
        const searchQuery = this.state.query;
        this.props.search(searchQuery);
    }

    render(){
        return (
            <div className="Search">
                <input type="text" name="search" onChange={this.handleInputChange} />
                <button className="button" onClick={this.handleButtonClick}>SEARCH</button>
            </div>
        );
    }

}

export default Search;