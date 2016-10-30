import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Toolbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.toolbarContainer}>
                <Text style={styles.toolbarTitle}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = {
    toolbarContainer: {
        height: 60,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    toolbarTitle: {
        color: 'white',
        fontSize: 18
    }
};

module.exports = Toolbar;