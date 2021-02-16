import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ImageBackground
} from 'react-native';
import { ChatMessage } from '../../Components/ChatMessages';
import { connect } from 'react-redux';
import {
  selectConversation, sendMessage,
  addFeedbackForConversationAction
} from '../../Redux/Actions/get_user_conversations';
import Modal from 'react-native-modal';
import Images from '../../Styles/Images';
import styles from './styles';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';
import { selectfullConversation } from "../../Redux/Selectors";
import EmojiSelector from 'react-native-emoji-selector'

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      feadbackValue: 0,
      chatmessage: '',
      emojiValue: false,
      comment: '',
      thumbValue: false
    };
  }
  componentDidMount = () => {
    const { params } = this.props.navigation.state;
    const FriendList = params.FriendList;
    this.props.selectConversations(FriendList._id)
  }
  valueChange = () => {
    this.setState({ isModalVisible: true })
  }
  feedback = (value) => {
    this.setState({ feadbackValue: value })
    if (value == 1) {
      this.setState({ thumbValue: true })
    }
    else {
      this.setState({ thumbValue: false })
    }
  }
  submitValue = () => {

    const currentConversationId = this.props?.getConversation?.currentConversationId;
    const userId = this.props?.auth?.user?.user?._id;
    if (currentConversationId && userId) {
      const data = {
        userId: userId,
        comment: this.state.comment ? this.state.comment : "",
        thumbValue: this.state.thumbValue,
        conversationId: currentConversationId
      }
      this.props.addFeedbackForConversation(data)
      this.setState({ isModalVisible: false })
    }
  }
  submitMesage = () => {
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
      this.props.sendMessages(message);
      this.setState({ chatmessage: '' });
    }
  }
  emojiPress = () => {
    this.setState({ emojiValue: true })
  }
  render() {
    const { params } = this.props.navigation.state;
    const FriendList = params.FriendList;
    const userId = this.props?.auth?.user?.user?._id;
    const user = this.props.getProfile?.GetProfile?.userProfile;
    const currentConversation = this.props.currentConversation;
    const currentUserType = this.props.currentUserType
    let oppositeUser = {}
    if (currentUserType && currentConversation) {
      currentUserType === "MENTEE" ?
        oppositeUser = currentConversation.mentorId
        : oppositeUser = currentConversation.menteeId
    }
    return (
      <>
        <SafeAreaView style={styles.safeViewStyle}>
          <View style={styles.backIcon1}>
            <TouchableOpacity onPress={this.valueChange}>
              <Image source={Images.back} style={styles.backImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('') }}>
              <Image source={
                user.userType == "MENTEE" ?
                  FriendList?.mentorId?.userAvatar ? { uri: FriendList?.mentorId?.userAvatar } : Images.Profile_Img
                  :
                  FriendList?.menteeId?.userAvatar ? { uri: FriendList?.menteeId?.userAvatar } : Images.Rectangle} style={styles.avatar1} />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 25, width: '90%', alignSelf: 'center', fontWeight: '700' }}>
            {FriendList?.menteeId?.fullName ? FriendList?.menteeId?.fullName?.toUpperCase() :
              FriendList?.mentorId?.fullName?.toUpperCase()}</Text>
          {
            this.state.emojiValue == true ?
              < EmojiSelector
                onEmojiSelected={emoji => this.setState({ chatmessage: emoji, emojiValue: false })}
              /> :
              <>

                <ScrollView ref={ref => { this.scrollView = ref }}
                  onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}>
                  <View style={{ backgroundColor: 'white', marginTop: 20, marginBottom: 20, width: '95%', alignSelf: 'center' }}>
                    {currentConversation && currentConversation.messages.map((message) => (
                      <ChatMessage message={message} key={message._id} userId={userId} oppositeUser={oppositeUser} />
                    ))}
                  </View>
                </ScrollView>

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
              </>
          }
          {
            this.state.myItemName != '' &&
            <Modal isVisible={this.state.isModalVisible}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.modelContainer}>
                  <View style={{ marginTop: 30, marginBottom: 30 }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '700' }}>How is your experience?</Text>
                    <Text style={{ textAlign: 'center', marginTop: 20, width: '80%', alignSelf: 'center' }}>Your feedback will help us improve the app experience.</Text>
                    <View style={{ flexDirection: 'row', alignSelf: "center", marginTop: 20 }}>
                      <TouchableOpacity onPress={() => this.feedback(1)}>
                        <View style={{
                          width: 50, height: 50, borderColor: "#4AA841", borderWidth: 1.5, borderRadius: 50,
                          backgroundColor: this.state.feadbackValue == 1 ? "#4AA841" : Colors.White
                        }}>
                          <Image source={Images.like} style={{
                            width: 30, height: 30, margin: 7,
                            tintColor: this.state.feadbackValue == 1 ? Colors.White : '#4AA841',
                          }} />
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.feedback(2)}>
                        <View style={{
                          marginLeft: 10, width: 50, height: 50, borderColor: "#224073", borderWidth: 1.5, borderRadius: 50,
                          backgroundColor: this.state.feadbackValue == 2 ? "#224073" : Colors.White
                        }}>
                          <Image source={Images.dislike} style={{
                            width: 30, height: 30, margin: 7,
                            tintColor: this.state.feadbackValue == 2 ? Colors.White : '#224073'
                          }} />
                        </View>
                      </TouchableOpacity>

                    </View>
                    <View style={{
                      marginTop: 15, alignSelf: 'center',
                      backgroundColor: "#EDF1F7",
                      width: '90%', height: 70, borderRadius: 12, borderWidth: 1, borderColor: "#EDF1F7"
                    }}>
                      <TextInput
                        placeholder="Say something about your experience…"
                        placeholderTextColor={Colors.borderColor}
                        style={{ flex: 1, marginLeft: 10 }}
                        onChangeText={(value) => { this.setState({ comment: value }) }}
                      />
                    </View>
                    <TouchableOpacity onPress={this.submitValue}>
                      <View style={styles.buttonWrapper}>
                        <Text style={styles.continueText}>{Constants.SUBMIT}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          }
          {/* {loading ? Loading : null} */}

        </SafeAreaView>
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
    addFeedbackForConversation: (user) => dispatch(addFeedbackForConversationAction(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);