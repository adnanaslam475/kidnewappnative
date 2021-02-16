import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Styles/Images';
import styles from './styles';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';
class ThirdScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <ImageBackground source={Images.backgroundThird} style={styles.imageBackgroundWrapper} >
          <LinearGradient colors={[Colors.overlayColor, Colors.overlayColor]} style={styles.gradient1} >
            <View style={styles.contentLayout2}>
              <Text style={styles.missionText}>Our media</Text>
              <Text style={styles.missionText}>sharing policy</Text>
              <Text style={styles.firstDescription}>{Constants.THIRD_DESCRIPTION}</Text>
            </View>
            <View style={styles.bottomBox}>
              <Text style={styles.bottomDescription}>{Constants.THIRD_BOTTOM}</Text>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
                <View style={styles.buttonWrapper}>
                  <Text style={styles.continueText}>{Constants.CONTINUE}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>

      </>
    );
  }
}

export default ThirdScreen;