import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FlexExample extends Component {
    render() {
        return ( // flexDirection = gravity, row = horizontal, column = vertical
            <View style = {{flex: 1, flexDirection: 'row', margin: 20}}>
                <Text style = {{width: 50, height: 50, backgroundColor: 'red'}}/>
                <Text style = {{width: 50, height: 50, backgroundColor: 'green', marginLeft: 10}}/>
                <Text style = {{width: 50, height: 50, backgroundColor: 'blue', marginLeft: 10}}/>
            </View>
        );
    }
}