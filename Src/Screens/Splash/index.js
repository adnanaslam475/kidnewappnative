import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import * as Constants from '../../Constants';
import Images from '../../Styles/Images';
import styles from './styles';
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moved = false;
  }
  componentDidMount() {
    setTimeout(() => {
      if (!this.moved) {

        this.props.navigation.navigate('Intro', { transition: 'vertical' })
      }
    }, 3000);
  }



  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.mainWrapper}>
          <Image style={styles.logoStyle} source={Images.logo} />

          <Text style={styles.textStyle}>{Constants.KIDNEY}</Text>
        </View>
      </View >
    );
  }
}


export default Splash;