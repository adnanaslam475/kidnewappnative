import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking
} from 'react-native';
import { connect } from 'react-redux';
import Loading from '../../Components/Loader';
import { updateUser } from '../../Redux/Actions/updateProfile';
import { getLearnMore } from '../../Redux/Actions/get_learn_more';
import { getAllSponsors } from '../../Redux/Actions/get_all_sponsors';
import { getAllAnnouncments } from '../../Redux/Actions/get_all_announcments';

import ToggleSwitch from 'toggle-switch-react-native';
import Images from '../../Styles/Images';
import styles from './styles';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';
class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      push_Notification: false,
      email_Notification: false,
      notification_Sound: false,
      userID: ''
    };
  }
  
  componentDidMount = () => {
    const user = this.props.getProfile?.GetProfile?.userProfile;
    this.setState({
      userID: user._id,
      push_Notification: user.settings.pushNotifications,
      email_Notification: user.settings.emailNotifications,
      notification_Sound: user.settings.notificationSound
    })
    this.props.getLearnmore();
    this.props.getAllSponsor();
    this.props.getAnnouncements();
  }
  pushNotification = (value) => {
    this.setState({ push_Notification: value })
    const data = {
      settings: {
        pushNotifications: value,
        emailNotifications: this.state.email_Notification,
        notificationSound: this.state.notification_Sound
      },
      id: this.state.userID,
      valueChange: "second"
    }
    console.log('Ther Setting Data: ', data)
    this.props.updateUserProfile(data);
  }
  emailNotification = (value) => {
    this.setState({ email_Notification: value })
    const data = {
      settings: {
        pushNotifications: this.state.push_Notification,
        emailNotifications: value,
        notificationSound: this.state.notification_Sound
      },
      id: this.state.userID,
      valueChange: "second"
    }
    console.log('Ther Setting Data: ', data)
    this.props.updateUserProfile(data);
  }
  soundNotification = (value) => {
    this.setState({ notification_Sound: value })
    const data = {
      settings: {
        pushNotifications: this.state.push_Notification,
        emailNotifications: this.state.email_Notification,
        notificationSound: value
      },
      id: this.state.userID,
      valueChange: "second"
    }
    console.log('Ther Setting Data: ', data)
    this.props.updateUserProfile(data);
  }
  render() {
    const { loading } = this.props.updateProfile;
    const { loading_learn } = this.props.getLearn;
    const { loading_sponsers } = this.props.getSponsors;
    const { loading_Announcment } = this.props.getAnnouncment;

    const Learn_more = this.props.getLearn?.lean_more;
    const Sponsors = this.props.getSponsors?.get_sponsores;
    const Announcement = this.props.getAnnouncment?.get_Announcment;

    return (
      <>
        <SafeAreaView style={styles.safeViewStyle}>
          <View style={styles.backIcon}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Menu') }}>
              <Image source={Images.back} style={styles.backImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('') }}>
              <Text style={styles.saveText}>Delete Account</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.mainContainer}>
              <Text style={styles.settingText}>{"Settings"}</Text>

              <View style={styles.notificationWrapper}>
                <Text style={styles.pushNotification}>Push Notifications</Text>
                <ToggleSwitch
                  isOn={this.state.push_Notification}
                  onColor="#224073"
                  size="medium"
                  onToggle={isOn => { this.pushNotification(isOn) }}
                />
              </View>
              <View style={styles.notificationWrapper}>
                <Text style={styles.pushNotification}>Email Notifications</Text>
                <ToggleSwitch
                  isOn={this.state.email_Notification}
                  onColor="#224073"
                  size="medium"
                  onToggle={isOn => { this.emailNotification(isOn) }}
                />
              </View>
              <View style={styles.notificationWrapper}>
                <Text style={styles.pushNotification}>Notification Sound</Text>
                <ToggleSwitch
                  isOn={this.state.notification_Sound}
                  onColor="#224073"
                  size="medium"
                  onToggle={isOn => { this.soundNotification(isOn) }}
                />
              </View>
              <View style={styles.seperate} />
              {/* Learn More */}
              <Text style={styles.pushNotification}>Learn More</Text>
              <View style={styles.learnContainer}>
                <ScrollView horizontal={true}>
                  {
                    Learn_more?.learnMorePosts.map((value, index) => {
                      return (
                        <>
                          <TouchableOpacity onPress={() => Linking.openURL(`${value.link}`)}>
                            <View style={{ width: 100, marginTop: 30, marginLeft: 15 }}>
                              <Image source={Images.Bitmap} />
                              <Text style={{ fontSize: 10, marginTop: 10, textAlign: 'center' }}>{value.title}</Text>
                            </View>
                          </TouchableOpacity>
                        </>
                      )
                    })

                  }
                </ScrollView>
              </View>
              {/* Get Involved */}
              <View style={styles.seperate} />
              {
                Announcement?.announcments &&
                <Text style={styles.pushNotification}>Get Involved</Text>
              }
              <View style={styles.learnContainer}>
                <ScrollView horizontal={true}>
                  {
                    Announcement?.announcments.map((value, index) => {
                      return (
                        <>
                          <View style={{ width: 100, marginTop: 30, marginLeft: 15 }}>
                            <Image source={Images.Bitmap} />
                            <Text style={{ fontSize: 10, marginTop: 10, textAlign: 'center', fontWeight: '700' }}>{value.title}</Text>
                            <Text style={{ fontSize: 9, marginTop: 10, textAlign: 'center' }}>{value.text}</Text>
                          </View>
                        </>
                      )
                    })

                  }
                </ScrollView>
              </View>
              {/* Sponsors and Supporters */}
              <View style={styles.seperate} />

              <Text style={styles.pushNotification}>Sponsors and Supporters</Text>
              <View style={styles.learnContainer}>
                <ScrollView horizontal={true}>
                  {
                    Sponsors?.sponsors.map((value, index) => {
                      return (
                        <>
                          <TouchableOpacity onPress={() => Linking.openURL(`${value.websiteUrl}`)}>
                            <View style={{ width: 100, marginTop: 30, marginLeft: 15 }}>
                              <Image source={Images.Bitmap} />
                              <Text style={{ fontSize: 10, marginTop: 10, textAlign: 'center' }}>{value.businessName}</Text>
                              <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => Linking.openURL(`${value.phoneNumber}`)}>
                                  <Image source={Images.phoneIcon} style={{ margin: 5 }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL(`${value.email}`)}>
                                  <Image source={Images.emailIcon} style={{ margin: 5 }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL(`${value.facebookId}`)}>
                                  <Image source={Images.facebookIcon} style={{ margin: 5 }} />
                                </TouchableOpacity>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </>
                      )
                    })

                  }
                </ScrollView>
              </View>
              <View style={styles.seperate} />
              <Text style={styles.pushNotification}>Help</Text>
              <View style={styles.learnContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/kidneyfoundationcentralpa/')}>
                  <View>
                    <Image source={Images.facebook} />
                    <Text style={{ fontSize: 10, marginTop: 10, textAlign: 'center' }}>Follow Us</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:info@kfcp.org?subject=SendMail&body=Description')}>
                  <View>
                    <Image source={Images.mail} />
                    <Text style={{ fontSize: 10, marginTop: 10, textAlign: 'center' }}>Email Us</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(`tel:${+1 - 2021234567}`)}>
                  <View>
                    <Image source={Images.phone} />
                    <Text style={{ fontSize: 10, marginTop: 10, textAlign: 'center' }}>Call Us</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* Bottom Part */}
              <View style={styles.bottomLogo}>
                <Image source={Images.logo} style={styles.mainLogo} />
                <Text style={{ marginTop: 30, width: '50%', marginLeft: 10 }}>Kidney Foundation of Central PA</Text>
              </View>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
                <View style={styles.buttonWrapper}>
                  <Text style={styles.continueText}>{Constants.LOGOUT}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {loading ? <Loading /> : null}
          {loading_learn ? <Loading /> : null}
          {loading_sponsers ? <Loading /> : null}
          {loading_Announcment ? <Loading /> : null}
        </SafeAreaView >
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    getProfile: state.getProfile,
    updateProfile: state.updateProfile,
    getLearn: state.getLearn,
    getSponsors: state.getSponsors,
    getAnnouncment: state.getAnnouncment,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateUserProfile: (user) => dispatch(updateUser(user)),
    getLearnmore: () => dispatch(getLearnMore()),
    getAllSponsor: () => dispatch(getAllSponsors()),
    getAnnouncements: () => dispatch(getAllAnnouncments()),


  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);