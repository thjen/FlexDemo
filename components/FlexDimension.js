import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDimension extends Component {
    render() {
        return ( // flex = flexible = "a positive number"
            // flex = weisum (android native)
            <View style = {{flex: 1}}>
                <View style = {{flex: 80, backgroundColor: 'mediumaquamarine' /*80%*/}}></View>
                <View style = {{flex: 20, backgroundColor: '#1e90ff' /*20%*/}}></View>
                <View style = {{height: 123, backgroundColor: 'darkslategrey'}}></View>
            </View>
        );
    }
}