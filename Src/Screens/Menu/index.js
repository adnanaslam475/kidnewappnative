import React, { Component } from 'react';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import Loading from '../../Components/Loader/index';
import LinearGradient from 'react-native-linear-gradient';
import { getProfile } from '../../Redux/Actions/getProfile';
import styles from './styles';
import Colors from '../../Styles/Colors';
import Images from '../../Styles/Images';
import * as Constants from '../../Constants';
import { ScrollView } from 'react-native-gesture-handler';
import Birthday from '../Birthday';
import moment from 'moment';

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      birthday: false
    };
  }
  componentDidMount = () => {
    const user = this.props.auth?.user?.user;
    const getProfile = this.props.updateProfile?.profileUpdated?.userProfile;
    const data = {
      id: user?._id,
    };
    this.props.profileGet(data);
    if (getProfile) {
      const userDate = getProfile?.dateOfBirth;
      const currentDate = new Date();

      if (userDate) {
        if (moment.utc(userDate).format('MM-DD') === moment.utc(currentDate).format('MM-DD')) {
          this.setState({ birthday: true })
        }
      }
    }
  }
  birthdayDay = (value) => {
    this.setState({ birthday: value })
  }
  render() {
    const { loading } = this.props.getProfile;
    return (
      <>
        {
          this.state.birthday ?
            <Birthday onchange={this.birthdayDay}
              navigation={this.props.navigation}
            /> :
            <ImageBackground source={Images.backgroundWhite} style={styles.imageBackgroundWrapper} >
              <LinearGradient colors={[Colors.White, Colors.White]} style={styles.gradient} >
                <ScrollView>
                  <View style={styles.mainContainer}>
                    <Text style={styles.menuText}>{Constants.MENU}</Text>
                    <Image source={Images.logo} style={styles.mainLogo} />
                  </View>
                  <View style={styles.menuContainer}>
                    <Text style={styles.menuTitile}>{Constants.MENU_TITLE}</Text>
                    <Text style={styles.menuDescription}>{Constants.MENU_DESCRIPTION}</Text>
                  </View>
                  <View style={styles.chatContainer}>

                    <Image source={Images.gallery} style={styles.imageHanlder} />
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ChatMain') }}>
                      <Text style={styles.textStyling}>{Constants.CHAT}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.chatContainer}>
                    <Image source={Images.profile} style={styles.imageHanlder} />
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profile') }}>
                      <Text style={styles.textStyling}>{Constants.MY_PROFILE}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.chatContainer}>
                    <Image source={Images.settings} style={styles.imageHanlder} />
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Setting') }}>
                      <Text style={styles.textStyling}>{Constants.SETTING}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.chatContainer}>
                    <Image source={Images.gallery} style={styles.imageHanlder} />
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.kfcp.org/')}>
                      <Text style={styles.textStyling}>{Constants.KFCP}</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
                    <View style={styles.buttonWrapper}>
                      <Text style={styles.continueText}>{Constants.LOGOUT}</Text>
                    </View>
                  </TouchableOpacity>
                </ScrollView>
              </LinearGradient>
              {loading ? <Loading /> : null}
            </ImageBackground>
        }
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    getProfile: state.getProfile,
    updateProfile: state.updateProfile
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    profileGet: (user) => dispatch(getProfile(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);