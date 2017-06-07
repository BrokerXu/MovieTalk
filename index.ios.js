/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    TabBarIOS,
    NavigatorIOS,
    StyleSheet
} from 'react-native';
import USBox from './app/components/USBox'
import MovieList from './app/components/MovieList'
import Search from './app/components/Search'
import icons from './app/asserts/Icons'
import style from './app/styles/main';



export default class MovieTalk extends Component {

    constructor(props){
        super(props);

        this.state = ({
            selectedTab:'search'
        });
    }

    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item

                    icon={{uri:icons.film,scale:10.5}}
                    selectedIcon={{uri:icons.film_active,scale:14.5}}
                    title="推荐电影"
                    selected={this.state.selectedTab==='featured'}
                    onPress={() => {
                        this.setState({
                            selectedTab:'featured'
                        });
                    }}
                >
                    <NavigatorIOS
                        style={styles.container}
                        initialRoute={{
                            title: "推荐电影",
                            component: MovieList
                        }}
                        shadowHidden={true}
                        barTintColor="darkslateblue"
                        titleTextColor="rgba(255,255,255,0.8)"
                        tintColor="rgba(255,255,255,0.8)"
                        translucent={true}
                    />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={{uri:icons.movie_recorder,scale:10.5}}
                    selectedIcon={{uri:icons.movie_recorder_active,scale:10.5}}
                    title="北美票房"
                    selected={this.state.selectedTab==="us_box"}
                    onPress={() => {
                        this.setState({
                            selectedTab:'us_box'
                        });
                    }}
                >
                    <NavigatorIOS
                        style={styles.container}
                        initialRoute={{
                            title: "北美票房",
                            component: USBox
                        }}
                        shadowHidden={true}
                        barTintColor="darkslateblue"
                        titleTextColor="rgba(255,255,255,0.8)"
                        tintColor="rgba(255,255,255,0.8)"
                        translucent={true}
                    />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={{uri:icons.search,scale:2.5}}
                    selectedIcon={{uri:icons.search_click,scale:2.5}}
                    title="搜索"
                    selected={this.state.selectedTab==="search"}
                    onPress={() => {
                        this.setState({
                            selectedTab:'search'
                        });
                    }}
                >
                    <NavigatorIOS
                        style={styles.container}
                        initialRoute={{
                            title: "搜索",
                            component: Search
                        }}
                        shadowHidden={true}
                        barTintColor="darkslateblue"
                        titleTextColor="rgba(255,255,255,0.8)"
                        tintColor="rgba(255,255,255,0.8)"
                        translucent={true}
                    />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
let styles = StyleSheet.create(style);
AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
