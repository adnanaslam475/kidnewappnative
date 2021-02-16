import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    backgroundColor: Colors.White
  },
  backIcon: {
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  backImage: {
    width: 30,
    height: 25,
    tintColor: Colors.borderColor
  },
  saveText: {
    marginTop: 3,
    fontSize: 16,
    fontWeight: '600',
    color: '#50E3C2'
  },
  mainContainer: {
    width: '90%',
    marginTop: 20,
    alignSelf: 'center'
  },
  settingText: {
    color: Colors.black,
    fontSize: 30,
    fontWeight: '600'
  },
  notificationWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pushNotification: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: '600'
  },
  seperate: {
    marginTop: 30,
    marginBottom: 30,
    borderBottomWidth: 1.5,
    borderBottomColor: Colors.textInputColor
  },
  learnContainer: {
    width: '98%',
    alignSelf: 'center',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  bottomLogo: {
    marginTop: 30,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  mainLogo: {
    width: 100,
    height: 100,
    tintColor: Colors.overlayColor
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

