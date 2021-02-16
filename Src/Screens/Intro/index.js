import React, { Component } from 'react';
import { View, Text } from 'react-native';
import  ViewPager from '@react-native-community/viewpager';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';


export default class ViewPagerPage extends Component {
    _renderDotIndicator() {
        return <PagerDotIndicator
            style={{ height: 50 }}
            pageCount={2} />
    }
    render() {
        return (
            <ViewPager
                style={{ height: '100%' }}
                // showPageIndicator={true}
                // indicator={this._renderDotIndicator()}
            >
                <View>
                    <FirstScreen
                        navigation={this.props.navigation}
                    />
                </View>
                <View >
                    <SecondScreen
                     navigation={this.props.navigation}
                    />
                </View>
                <View >
                    <ThirdScreen
                     navigation={this.props.navigation}
                    />
                </View>
            </ViewPager>
        );
    }
}