import React, {Component} from 'react';
import {Image, ListView, Text, TouchableHighlight, View} from 'react-native';
import Toolbar from './Toolbar';

class Feed extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (oldRow, newRow) => oldRow != newRow});
        this.state = {
            dataSource: ds.cloneWithRows([])
        }
    }

    componentDidMount(){

        let url = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=e50cce73ffff4ee98a9ef215b0fcd1ed';

        fetch(url)
            .then((response) => response.json())
            .then((rjson) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(rjson.articles)
                })
            })

    }

    renderRow(article){

        return(
            <TouchableHighlight onPress={() => {this.props.navigator.push({name: 'article', article: article})}}>
                <View style={styles.article}>
                    <Image style={styles.articleImage} source={{uri: article.urlToImage}}/>
                    <Text style={styles.articleTitle}>{article.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <View>
                <Toolbar title="React Native Feed"/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections={true}
                />
            </View>

        );
    }
}

const styles = {
    article: {
        padding: 10,
        borderBottomWidth: .5,
        borderBottomColor: '#ccc',
        flexDirection: 'row'
    },
    articleImage: {
        width: 40,
        height: 40
    },
    articleTitle: {
        flex: 1,
        marginLeft: 10
    }
};

module.exports = Feed;