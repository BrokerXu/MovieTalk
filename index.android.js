/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    AppRegistry
} from 'react-native';

// import MovieList from './app/components/MovieList'

export default class MovieTalk extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
         {/*<MovieList />*/}
        );
    }
}



AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
