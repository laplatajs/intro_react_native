import React, {Component} from 'react';
import {Linking, Text, TouchableHighlight, View} from 'react-native';
import Toolbar from './Toolbar';

class Article extends Component {

    constructor(props) {
        super(props);
    }

    openArticle(url){
        Linking.openURL(url)
    }


    render() {
        return (
            <View>
                <Toolbar title="Article Detail"/>

                <View style={styles.articleContainer}>
                    <Text style={styles.articleTitle}>{this.props.article.title}</Text>
                    <Text>by {this.props.article.author}</Text>
                    <Text style={styles.articleDescription}>{this.props.article.description}</Text>

                </View>

                <TouchableHighlight underlayColor={'transparent'} style={styles.button} onPress={() => Linking.openURL(this.props.article.url)}>
                    <Text>Read full article</Text>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'transparent'} style={styles.button} onPress={this.props.navigator.pop}>
                    <Text>Back to List</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = {

    articleContainer: {
        margin: 10
    },

    articleTitle: {
        fontSize: 22,
        marginBottom: 10
    },

    articleDescription: {
        fontSize: 16,
        marginTop: 25,
        marginBottom: 50
    },

    button: {
        borderWidth: .5,
        marginHorizontal: 50,
        marginVertical: 10,
        padding: 10,
        alignItems: 'center'
    }
};

module.exports = Article;