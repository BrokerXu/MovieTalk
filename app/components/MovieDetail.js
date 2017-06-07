/**
 * Created by xuyan on 2017/6/2.
 */
'use strict';
import React,{Component} from 'react';
import {View,Text,ActivityIndicator,ScrollView,StyleSheet} from 'react-native';
import style from '../styles/main'

export default class MovieDetail extends Component{

    constructor(props){
        super(props);

        this.state = {
            MovieDetail:'',
            loaded:false
        };

        const REQUEST_URL = `https://api.douban.com/v2/movie/subject/${this.props.movie.id}`;
        this.fetchData(REQUEST_URL);
    }

    fetchData(REQUEST_URL) {
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    MovieDetail:responseData,
                    loaded:true
                });
            }).done();
    }



    render(){
        if(!this.state.loaded){
            return(
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
        let movie = this.state.MovieDetail;
        //react-native中遍历动态添加组件时要加上key属性作为组件的虚拟dom的唯一标识
        let summary = movie.summary.split(/\n/).map((p,i) =>{
           return(
               <View key={i} style={{paddingLeft:6,paddingBottom:15,paddingRight:6}}>
                   <Text style={styles.itemText}>{p}</Text>
               </View>
           );
        });
        return(
            <View style={[styles.container,{paddingTop:70}]}>
                <ScrollView  automaticallyAdjustContentInsets={false}
                             horizontal={false}>
                    <View style={[styles.item,{flexDirection:'column'}]}>
                        {summary}
                </View>
                </ScrollView>
            </View>
        );
    }
}

let styles = StyleSheet.create(style);
