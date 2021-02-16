import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    backgroundColor: Colors.White
  },
  imageBackgroundWrapper: {
    flex: 1,
    width: '100%',
    height: '100%',

  },
  gradient: {
    width: '100%',
    height: 350,
    // flex: 1,
    opacity: 0.85
  },
  drawerContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: Platform.OS == 'android' ? '10%' : '20%'
  },
  messageConatiner: {
    marginTop: 30,
  },
  topMessage: {
    color: Colors.White,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600'
  },
  topMessageUnread: {
    marginTop: 10,
    color: Colors.White,
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '600',
    fontStyle: 'italic'
  },
  friendList: {
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: Colors.overlayColor,
    borderColor: Colors.overlayColor
  },
  lsitWrapper: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },
  avatar1: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Colors.overlayColor,
    marginLeft: 50
  },
  titleText: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 5,
    color: Colors.White,
    width: 100,
    alignSelf: 'center'
  },
  background: {
    flex: 1,
    width: '100%',
    height: 600,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkMessage: {
    // marginTop: '50%',
    marginBottom: 20,
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Colors.White,
    borderRadius: 12,
    backgroundColor: Colors.White,
  },
  time: {
    margin: 10,
    color: Colors.overlayColor
  },
  reply: {
    alignSelf: "flex-end",
    margin: 20
  },
  backImage: {
    width: 30,
    height: 25,
    tintColor: Colors.borderColor
  },
  backIcon: {
    marginTop: Platform.OS == 'android' ? '8%' : '15%',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  backIcon1: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  backgroundProfile: {
    flex: 1,
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  mainContainer: {
    // marginTop: Platform.OS == 'android' ? widthScreen / 0.77 : widthScreen / 0.7,
    width: '100%',
    height: '25%',
    backgroundColor: Colors.White,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderTopWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopColor: Colors.White,
  },
  arrowStyle: {
    alignSelf: 'center',
    marginTop: 20
  },
  titleName: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
  },
  chatInboxWrapper: {
    margin: 10,
    flexDirection: 'row'
  },
  chatInbox: {
    marginTop: 20,
    marginBottom: 20,
    width: '85%',
    alignSelf: "center",
    borderWidth: 2,
    borderColor: Colors.overlayColor,
    borderRadius: 50,

  },
  chatInboxContainer: {
    flex: 1,
    marginLeft: 20,
  },
  modelContainer: {
    width: '100%',
    // height: 200,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
  },
  buttonWrapper: {
    marginTop: 30,
    marginBottom: 20,
    alignSelf: 'center',
    width: '85%',
    borderWidth: 1.5,
    borderColor: Colors.overlayColor,
    borderRadius: 50,
    backgroundColor: Colors.White
  },
  continueText: {
    color: Colors.overlayColor,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    fontWeight: '600'
  }
});
export default styles;

