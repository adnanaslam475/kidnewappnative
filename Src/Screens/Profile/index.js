import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import Images from '../../Styles/Images';
import styles from './styles';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theValue: 0,
      userImage: ''
    };
  }
  componentDidMount = () => {
    const user = this.props.getProfile?.GetProfile?.userProfile;
    this.setState({
      userImage: user?.userAvatar,
    })
  }
  changeValue = (value) => {
    this.setState({ theValue: value })
  }
  render() {
    const user = this.props.getProfile?.GetProfile?.userProfile;
    return (
      <>
        <ImageBackground source={this.state.userImage != '' ? { uri: this.state.userImage } : Images.Profile_Img} style={styles.background}>
          <View style={styles.drawerContainer}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Menu') }}>
              <Image source={Images.Drawer} />
            </TouchableOpacity>
          </View>
          <ScrollView>

          </ScrollView>
          {this.state.theValue == 0 ?
            <View style={styles.mainContainer}>
              <TouchableOpacity onPress={() => this.changeValue(1)}>
                <Image source={Images.Arrow_up} style={styles.arrowStyle} />
              </TouchableOpacity>
              <Text style={styles.titleName}>{user?.fullName}</Text>

              <TouchableOpacity onPress={() => { this.props.navigation.navigate('EditProfile') }}>
                <View style={styles.buttonWrapper}>
                  <Text style={styles.continueText}>{Constants.EDIT_PROFILE}</Text>
                </View>
              </TouchableOpacity>
            </View>
            :
            <View style={styles.mainContainer1}>
              <TouchableOpacity onPress={() => this.changeValue(0)}>
                <Image source={Images.Arrow_down} style={styles.arrowStyle} />
              </TouchableOpacity>
              <Text style={styles.titleName}>{user?.fullName}</Text>
              <Text style={styles.address}>{user?.city}</Text>
              <Text style={styles.profile_Bio}>{user?.aboutMe}</Text>
              <Text style={styles.interest}>{user?.interests}</Text>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('EditProfile') }}>
                <View style={styles.buttonWrapper}>
                  <Text style={styles.continueText}>{Constants.EDIT_PROFILE}</Text>
                </View>
              </TouchableOpacity>
            </View>
          }
        </ImageBackground>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    getProfile: state.getProfile
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    profileGet: (user) => dispatch(getProfile(user)),
  };
};
export default connect(
  mapStateToProps,
  null
)(Profile);