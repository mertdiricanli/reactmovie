import React, { Component } from 'react';
import * as envVariables from '../../../env-variables';

import './Movie.css';

class Movie extends Component {
    render(){
        return (
            <div className="Movie col-6 col-sm-4 col-md-3" onClick={this.props.detail}>
                <img src={envVariables.IMAGE_PATH + this.props.movie.poster_path} alt={this.props.movie.title} className="img-fluid" />
                <p>{this.props.movie.title}</p>
            </div>
        )
    }
}

export default Movie;