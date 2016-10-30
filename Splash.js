import React, {Component} from 'react';
import {Image} from 'react-native';

class Splash extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        setTimeout(()=> this.props.navigator.push({name: 'feed'}),2000);
    }

    render() {
        return (
            <Image style={styles.splash} source={require('./logo.jpeg')}/>
        );
    }
}

const styles = {
    splash: {
        flex: 1,
        resizeMode: 'contain',
        width: null
    }
};

module.exports = Splash;