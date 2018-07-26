import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class JustifyContentExample extends Component {
    render() {
        return ( // flexDirection = gravity, row = horizontal, column = vertical
            // justifyContent = layout_gravity
            // flex-start = Top
            // flex-end = Bottom if direction = column, = Right if direction = row
            // space-between các component cách đều nhau (bị giới hạn 2 đầu)
            // space-around các component cách đều nhau (liên tục)
            // stretch = match_parent
            <View style = {{
                backgroundColor: 'aquamarine',
                height: 500,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch'
                //alingItems: 'center'
                }}>
                <Text style = {{width: 50, height: 50, backgroundColor: 'red'}}/>
                <Text style = {{width: 50, height: 50, backgroundColor: 'green', marginLeft: 10}}/>
                <Text style = {{height: 50, backgroundColor: 'blue', marginLeft: 10}}/>
            </View>
        );
    }
}