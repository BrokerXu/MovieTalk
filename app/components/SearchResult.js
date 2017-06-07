/**
 * Created by xuyan on 2017/6/6.
 */

'use strict';
import React ,{Component} from 'react';
import {View ,Text ,Image,ListView,TouchableHighlight,StyleSheet} from 'react-native';

import MovieDetail from './MovieDetail'
import style from '../styles/main'
let styles = StyleSheet.create(style);
export default class SearchResult extends Component{

    constructor(props){
        super(props);

        let dataSource = new ListView.DataSource({
            rowHasChanged:(row1,row2) => row1!==row2
        });

        this.state = {
            movies:dataSource.cloneWithRows(this.props.results)
        }

    }
    showMovieDetail(movie) {
        this.props.navigator.push({
            title: movie.title,
            component: MovieDetail,
            passProps:{movie}
        });
    }

    renderMovieList(movie) {
        return (
            <TouchableHighlight
                underlayColor="rgba(34,26,38,0.1)"
                onPress={() => {
                    this.showMovieDetail(movie)
                }}
            >
                <View style={styles.item}>
                    <View style={styles.itemImage}>
                        <Image
                            source={{uri: movie.images.large}}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.itemContent}>
                        <Text style={styles.itemHeader}>{movie.title}</Text>
                        <Text style={styles.itemMeta}>
                            {movie.original_title}({movie.year})
                        </Text>
                        <Text style={styles.redText}>
                            {movie.rating.average}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <ListView dataSource={this.state.movies} renderRow={this.renderMovieList.bind(this)}  />
            </View>
        );
    }
}
