import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ImageBackground,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import Loading from '../../Components/Loader/index';
import Images from '../../Styles/Images';
import styles from './styles';
import Colors from '../../Styles/Colors';
import { selectConversation, sendMessage } from '../../Redux/Actions/get_user_conversations';
import EmojiSelector from 'react-native-emoji-selector'
import { selectfullConversation } from "../../Redux/Selectors";

class FriendProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theValue: 0,
      chatmessage: '',
      emojiValue: false,
    };
  }
  componentDidMount = () => {
    const { params } = this.props.navigation.state;
    const FriendList = params?.friendUser;
    this.props.selectConversations(FriendList._id)
  }
  changeValue = (value) => {
    this.setState({ theValue: value })
  }
  submitMesage = () => {
    const { params } = this.props.navigation.state;
    // const { loading } = this.props.getMessages;
    const FriendList = params?.friendUser;
    const currentConversationId = this.props?.getConversation?.currentConversationId;
    const userId = this.props?.auth?.user?.user?._id;
    if (this.state.chatmessage == '') {
      return;
    }
    else {
      const message = {
        conversationId: currentConversationId,
        content: this.state.chatmessage,
        fromUserId: userId
      }
      this.props.sendMessages(message)
      this.setState({ chatmessage: '' })
      this.props.navigation.navigate('Chat', { FriendList: FriendList })
    }
  }
  emojiPress = () => {
    this.setState({ emojiValue: true })
  }
  render() {
    const { params } = this.props.navigation.state;
    // const { loading } = this.props.getMessages;
    const FriendList = params?.friendUser;
    const user = this.props.getProfile?.GetProfile?.userProfile;
    return (
      <>
        <ImageBackground source={
          user.userType == "MENTEE" ?
            FriendList?.mentorId?.userAvatar ? { uri: FriendList?.mentorId?.userAvatar } : Images.Profile_Img
            :
            FriendList?.menteeId?.userAvatar ? { uri: FriendList?.menteeId?.userAvatar } : Images.Profile_Img} style={styles.backgroundProfile}>
          <View style={styles.backIcon}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ChatMain') }}>
              <Image source={Images.back} style={styles.backImage} />
            </TouchableOpacity>
          </View>
          <ScrollView></ScrollView>
          {
            this.state.emojiValue == true ?
              <EmojiSelector
                onEmojiSelected={emoji => this.setState({ chatmessage: emoji, emojiValue: false })}
              /> :
              <>
                <View style={styles.mainContainer}>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('Chat', { FriendList: FriendList }) }}>
                    <Image source={Images.Arrow_up} style={styles.arrowStyle} />
                  </TouchableOpacity>
                  <Text style={styles.titleName}>{FriendList?.menteeId?.fullName ? FriendList?.menteeId?.fullName?.toUpperCase() :
                    FriendList?.mentorId?.fullName?.toUpperCase()}</Text>

                  <View style={styles.chatInbox}>
                    <View style={styles.chatInboxWrapper}>
                      <TouchableOpacity onPress={this.emojiPress}>
                        <Image source={Images.Emojis_Icon} style={{ marginTop: Platform.OS == 'android' ? 12 : 2, }} />
                      </TouchableOpacity>
                      <TextInput
                        style={styles.chatInboxContainer}
                        placeholder={"Write something here …"}
                        value={this.state.chatmessage}
                        placeholderTextColor={Colors.textInputColor}
                        onChangeText={(chatmessage) => { this.setState({ chatmessage: chatmessage }) }}
                      />
                      <TouchableOpacity onPress={this.submitMesage}>
                        <Image source={Images.Sent} style={{ marginTop: Platform.OS == 'android' ? 12 : 2, }} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </>
          }
          {/* {loading ? Loading : null} */}
        </ImageBackground>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  let currentConversation = null;
  if (state && state.getConversation.currentConversationId) {
    currentConversation = selectfullConversation(state, state.getConversation.currentConversationId);
  }
  return {
    currentConversation: currentConversation,
    auth: state.auth,
    getProfile: state.getProfile,
    getConversation: state.getConversation,
    currentUserType: state.auth.user?.user?.userType,
    currentConversationId: state.getConversation.currentConversationId,

    // getMessages: state.getMessages
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectConversations: (user) => dispatch(selectConversation(user)),
    sendMessages: (user) => dispatch(sendMessage(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendProfile);
