import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { getUserConversations } from '../../Redux/Actions/get_user_conversations';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Styles/Images';
import styles from './styles';
import Colors from '../../Styles/Colors';
import Loading from '../../Components/Loader';
import { ScrollView } from 'react-native-gesture-handler';

class ChatMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userImage: ''

    };
  }
  componentDidMount = () => {
    const user = this.props.getProfile?.GetProfile?.userProfile;
    this.setState({
      userImage: user?.userAvatar,
    })
    if (user) {
      const data = {
        userId: user?._id,
      }
      console.log("The Data Conversation is: ", data)
      this.props.getConversationAll(data);
    }
  }
  render() {
    const user = this.props.getProfile?.GetProfile?.userProfile;
    const { loading_conversation } = this.props.getConversation;
    const conversationDetails = this.props?.getConversation?.user_conversation;
    return (
      <>
        <ImageBackground source={Images.backgroundThird} style={styles.imageBackgroundWrapper} >
          <LinearGradient colors={["#298620", "#298620"]} style={styles.gradient} >
            <View style={styles.drawerContainer}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Menu') }}>
                <Image source={Images.Drawer} style={{ tintColor: Colors.White, width: 30, height: 15 }} />
              </TouchableOpacity>
              <View style={styles.messageConatiner}>
                <Text style={styles.topMessage}>{`Hi, ${user?.fullName}`}</Text>
                {/* <Text style={styles.topMessageUnread}>3 New Messages</Text>x */}
              </View>
            </View>
            <View style={styles.friendList}>
              <ScrollView horizontal={true} indicatorStyle='white'>
                <View style={styles.lsitWrapper}>
                  {
                    user.userType == "MENTEE" ?
                      conversationDetails?.conversations ?
                        conversationDetails?.conversations?.map((value) => {
                          return (<>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('FriendProfile', { friendUser: value }) }}>
                              <Image source={value?.mentorId?.userAvatar ? { uri: value?.mentorId?.userAvatar } : Images.Rectangle} style={styles.avatar1} />
                            </TouchableOpacity>
                          </>
                          )
                        }) :
                        conversationDetails?.map((value) => {
                          return (<>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('FriendProfile', { friendUser: value }) }}>
                              <Image source={value?.mentorId?.userAvatar ? { uri: value?.mentorId?.userAvatar } : Images.Rectangle} style={styles.avatar1} />
                            </TouchableOpacity>
                          </>
                          )
                        })
                      :
                      conversationDetails?.conversations ?
                        conversationDetails?.conversations?.map((value) => {
                          return (<>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('FriendProfile', { friendUser: value }) }}>
                              <Image source={value?.menteeId?.userAvatar ? { uri: value?.menteeId?.userAvatar } : Images.Rectangle} style={styles.avatar1} />
                            </TouchableOpacity>
                          </>
                          )
                        }) :
                        conversationDetails?.map((value) => {
                          return (<>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('FriendProfile', { friendUser: value }) }}>
                              <Image source={value?.menteeId?.userAvatar ? { uri: value?.menteeId?.userAvatar } : Images.Rectangle} style={styles.avatar1} />
                            </TouchableOpacity>
                          </>
                          )
                        })
                  }
                </View>
              </ScrollView>
              <Text style={styles.titleText}>{user?.fullName}</Text>
            </View>
          </LinearGradient>
          <ImageBackground source={this.state.userImage != '' ? { uri: this.state.userImage } : Images.Profile_Img} style={styles.background}>
            {/* <ScrollView horizontal={true} indicatorStyle='white'> */}
            <ScrollView></ScrollView>
            {/* <View style={styles.checkMessage}>
              <Text style={{ alignSelf: 'center', width: '90%', margin: 10, fontSize: 12, marginTop: 20 }}>
                Hey!, See you at the party, hope you are
                coming to enjoy new year, I know you
                don't like these stuffs too much but
                still wait for you.
              </Text>
              <Text style={styles.time}>5 minutes ago</Text>
              <TouchableOpacity >
                <Text style={styles.reply}>Repy</Text>
              </TouchableOpacity>
            </View> */}

            {/* </ScrollView> */}
          </ImageBackground>
          {loading_conversation ? <Loading /> : null}

        </ImageBackground>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    getProfile: state.getProfile,
    getConversation: state.getConversation
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getConversationAll: (user) => dispatch(getUserConversations(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatMain);