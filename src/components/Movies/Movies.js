import React, { Component } from 'react';
import Aux from '../../containers/Aux/Aux';
import Modal from '../UI/Modal/Modal';
import Search from '../Search/Search';
import Movie from './Movie/Movie';
import axios from '../../axios-instance';
import * as envVariables from '../../env-variables';


class Movies extends Component {

    state = {
        movies: [],
        searchQuery: null,
        currentDetail: null,
        detail: false
    }

    componentDidMount(){
        this.getMovies();
    }

    getMovies = () => {
        axios.get('movie/'+this.props.content+'?api_key='+envVariables.API_KEY)
        .then(response => {
            this.setState({movies: response.data.results});
        })
        .catch(error => {
            console.log("ERROR!!!");
        })
    }

    detailHandler = (id) => {
        if (this.state.movies.length > 0) {
            const detailContent = this.state.movies[id].overview;
            this.setState({currentDetail: detailContent});
        }
        
        this.setState({detail: true});
    }

    modalCloseHandler = () => {
        this.setState({detail:false, currentDetail: null});
    }

    searchHandler = (searchQuery) => {
        if (searchQuery){
            this.setState({searchQuery: searchQuery, movies: []});

            axios.get('search/movie?api_key='+envVariables.API_KEY+'&query='+searchQuery)
            .then(response => {
                this.setState({movies: response.data.results});
            })
            .catch(error => {
                console.log("SEARCH ERROR!");
            });
        }
        else {
            this.getNowPlaying();
        }
    }

    render(){
        let data = "Loading...";

        if(this.state.movies.length > 0) {
            data = this.state.movies.map((movie, index) => <Movie key={movie.id} movie={movie} detail={() => this.detailHandler(index)} />)
        }
        
        let movieDetail = null;
        if (this.state.currentDetail) {
            movieDetail = this.state.currentDetail;
        }

        return (
            <Aux>
                <Modal show={this.state.detail} modalClosed={this.modalCloseHandler}>{movieDetail}</Modal>
                <Search search={this.searchHandler} />
                <div className="row movies">
                    {data}
                    <div className="clearfix"></div>
                </div>
            </Aux>
        )
    }
}

export default Movies;