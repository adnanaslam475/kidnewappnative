import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image
} from 'react-native';
import styles from './styles';
import Images from '../../Styles/Images';
class Birthday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeBirthday: false
    };
  }

  close = () => {
    this.props.onchange(this.state.closeBirthday)
    this.props.navigation.navigate('Menu')
  }
  render() {
    return (
      <>
        <View style={styles.mainConatiner}>
          <View style={styles.closeWrapper}>
            <TouchableOpacity onPress={this.close}>
              <Image source={Images.close} style={styles.closeImage} />
            </TouchableOpacity>
          </View>
          <ImageBackground source={Images.birthday} style={styles.imagebackgroundd}>
            <Image source={Images.birthdayLogo} style={styles.birthdayLogo} />
          </ImageBackground>
        </View>
      </>
    );
  }
}
export default Birthday;
