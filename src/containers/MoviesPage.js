// ./src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';

const MoviesPage = (props) => {
  console.log(props)
  return (
  <div>
    <MoviesList movies={props.movies} />
    <Route path={`${props.match.url}/:movieId`} component={MovieShow} />
    <Route exact path={props.match.url} render={() => (
      <h3>Please select a Movie from the list.</h3>
    )}/>
  </div>
)}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps, null)(MoviesPage);
