import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  imageBackgroundWrapper: {
    flex: 1,
    width: '100%',
    height: '100%',

  },
  gradient: {
    width: '100%',
    height: 200,
    // flex: 1,
    opacity: 0.85
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
    height: '100%',
    borderTopWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopColor: Colors.White,
  },
  logoWrapper: {
    marginTop: -50,
    borderColor: Colors.White,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: Colors.White,
    alignSelf: 'center',
    width: 120,
    height: 120,
  },
  logoFront: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    margin: 6,
    zIndex: 1,
    tintColor: Colors.overlayColor
  },
  bottomLayout: {
    marginTop: 30
  },
  signText: {
    color: Colors.primary,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '700'
  },
  textInputContainer: {
    width: '90%',
    marginTop: 30,
    alignSelf: 'center'
  },
  emailWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: Colors.borderColor,
  },
  passwordConstainer: {
    marginTop: 20,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: Colors.borderColor,
    justifyContent: 'space-between'
  },
  passwordWrapper: {
    flexDirection: 'row',
  },
  emailInput: {
    marginLeft: 20,
    flex: 1,
    fontSize: 15,
    marginBottom: 10
  },
  passwordInput: {
    width: '50%',
    marginLeft: 20,
    fontSize: 15,
    marginBottom: 10
  },
  forgotText: {
    color: Colors.borderColor,
    fontSize: 12,
    marginTop: 5,
  },
  buttonWrapper: {
    marginTop: 30,
    alignSelf: 'center',
    width: '85%',
    borderWidth: 1.5,
    borderRadius: 50,
  },
  buttonWrapperSocial: {
    marginTop: 30,
    marginBottom: 20,
    alignSelf: 'center',
    width: '85%',
    borderWidth: 1.5,
    borderRadius: 50,
    flexDirection: 'row',
    borderColor: Colors.black,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center'
  },
  continueText: {
    color: Colors.White,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    fontWeight: '600'
  },
  seperatorContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: '90%',
    alignSelf: 'center'
  },
  leftSperator: {
    flex: 1,
    height: 2,
    backgroundColor: Colors.borderColor
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#444",
    fontWeight: "700"
  },
  rightSeperator: {
    flex: 1,
    height: 2,
    backgroundColor: Colors.borderColor
  },
  termCondition: {
    color: Colors.borderColor,
    fontSize: 10,
    marginBottom: Platform.OS == 'android' ? 10 : 30,
    textAlign: 'center'
  },
  alreadyHaveAccount: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 15
  },
  nothaveAccount: {
    color: Colors.borderColor,
    fontSize: 14
  },
  signUpText: {
    color: Colors.primary,
    fontSize: 14,
    marginLeft: 5
  },
  errorMessageStyle: {
    color: 'red',
    width: '100%',
    margin: 5
  },
});
export default styles;

