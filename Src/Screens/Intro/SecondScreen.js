import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Styles/Images';
import styles from './styles';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';
class SecondScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <ImageBackground source={Images.backgroundSecond} style={styles.imageBackgroundWrapper} >
          <LinearGradient colors={[Colors.overlayColor, Colors.overlayColor]} style={styles.gradient} >
            <View style={styles.contentLayout}>
              <Text style={styles.missionText}>Make A</Text>
              <Text style={styles.missionText}>Difference</Text>
              <Text style={styles.firstDescription}>{Constants.SECOND_DESCRIPTION}</Text>
            </View>
            <View style={styles.dotBox}>
							<Image source={Images.circle} style={[styles.circleDot, { tintColor: Colors.dotColor }]} />
							<Image source={Images.circle} style={[styles.circleDot, { marginLeft: 7, tintColor: Colors.White }]} />
						</View>
          </LinearGradient>
        </ImageBackground>

      </>
    );
  }
}

export default SecondScreen;