/**
 * Created by xuyan on 2017/6/5.
 */
'use strict';
import React, {Component} from 'react';
import {View, Text, WebView, StyleSheet, Dimensions} from 'react-native';
import style from '../styles/main'
//WebView必须设置宽高
const {width, height} = Dimensions.get('window');
export default class USBoxDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }

    }

    setLoadView() {
        if(!this.state.loaded) {
            console.log('loadStart');
            return (
                <View style={styles.container}>
                    <View style={styles.loading}>
                        <ActivityIndicator
                            size="large"
                            color="#6435c9"
                        />
                    </View>
                </View>
            );
        }
    }


    render() {

        return (
            <View style={styles.container}>
                <WebView
                    style={{width: width, height: height, backgroundColor: 'gray'}}
                    source={{uri: this.props.movie.subject.alt, method: 'GET'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                    onLoad={() => {
                        this.setState({
                            loaded:true
                        });
                        console.log("loadEnd");
                    }}
                />
                    {this.setLoadView.bind(this)}
            </View>
        );
    }
}

let styles = StyleSheet.create(style);

