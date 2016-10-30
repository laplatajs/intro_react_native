import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Splash from './Splash';
import Feed from './Feed';
import Article from './Article';

class App extends  Component {

    renderScene(route, navigator){
        switch (route.name){
            case 'splash': return <Splash navigator={navigator} />
            case 'feed': return <Feed navigator={navigator} />
            case 'article': return <Article navigator={navigator} article={route.article} />
        }
    }

    render(){
        return(
            <Navigator sceneStyle={{backgroundColor: 'white'}} renderScene={this.renderScene} initialRoute={{name: 'splash'}}/>
        )

    }
}

module.exports = App;