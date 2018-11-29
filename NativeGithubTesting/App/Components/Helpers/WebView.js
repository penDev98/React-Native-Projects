import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, WebView, View} from 'react-native';

export default class Webview extends Component{
    render(){
        return(
            <View style={styles.container}>
                <WebView url={this.props.url}/>
            </View>
        )
    }
}

Webview.propTypes = {
    url: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F6F6EF',
        flexDirection: 'column'
    }
})