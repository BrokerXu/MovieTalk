/**
 * Created by xuyan on 2017/6/6.
 */
import React,{Component} from 'react';
import {View,Text,TextInput,ActivityIndicator,StyleSheet} from 'react-native';
import style from '../styles/main'
import SearchResult from './SearchResult'

let styles = StyleSheet.create(style);

export default class Search extends Component{

    constructor(props){
        super(props);

        this.state = {
            query:'',
            loaded: true,
            opacity:0
        }
    }

    fetchData(){
        this.setState({
            loaded:false,
            opacity:1
        });
        console.log(this.state.query);
        const REQUEST_URL = `https://api.douban.com/v2/movie/search?q=${this.state.query}`;
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData);
                this.setState({
                    loaded:true,
                    opacity:0
                });
                this.props.navigator.push({
                    title:responseData.title,
                    component:SearchResult,
                    passProps:{
                        results:responseData.subjects
                    }
                });
            }).done();
    }

    render(){
        return(
            <View style={{flex:1,flexDirection:'column',paddingTop:60}}>
                <View style={{paddingTop:6,paddingLeft:6,paddingRight:6,borderColor:'rgba(100,53,201,0.1)',borderBottomWidth:1}}>
                    <TextInput
                        style={{height:50}}
                        placeholder="搜索..."
                        placeholderTextColor="#6435c9"
                        autoFocus={true}
                        // secureTextEntry
                        keyboardType="web-search"
                        clearButtonMode="while-editing"//在编辑的时候显示
                        clearTextOnFocus={true}
                        enablesReturnKeyAutomatically={true}//自动启用回车键
                        returnKeyType="search"
                        // onchange={() => {
                        //     console.log('onChange');
                        // }}
                        // onFocus={() => {
                        //     console.log('onFocus');
                        // }}
                        // onBlur={() => {//离开文本框
                        //     console.log('onBlur');
                        // }}

                        onChangeText={(query) => {
                            this.setState({
                                query:query,
                        });

                        }}

                        // onEndEditing={() => {
                        //     console.log('onEndEditing');
                        // }}
                        //
                         onSubmitEditing={
                             this.fetchData.bind(this)
                         }

                    />

                    <ActivityIndicator size="small" color="#6435c9" style={{
                        position:'absolute',
                        right:10,
                        top:20,
                        opacity:this.state.opacity
                    }} animating={!this.state.loaded} />
                </View>
            </View>
        );
    }
}

