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
    height: '100%',
    flex: 1,
    opacity: 0.85
  },
  backIcon: {
    marginTop: Platform.OS == 'android' ? '8%' : '15%',
    width: '80%',
    alignSelf: 'center'
  },
  backImage: {
    width: 25,
    height: 25,
    tintColor: Colors.White
  },
  forgotContainer: {
    marginTop: '35%',
    justifyContent: 'center',
    alignItems: "center"
  },
  forgotTitle: {
    color: Colors.White,
    fontSize: 25,
    fontWeight: '700'
  },
  forgotDescription: {
    marginTop: 20,
    fontSize: 13,
    textAlign: 'center',
    width: '65%',
    alignSelf: "center",
    color: Colors.White
  },
  fotgoTextInputWrapper: {
    marginTop: 40,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    backgroundColor: Colors.White,
    borderRadius: 50,
    height: 40,
    borderColor: Colors.White
  },
  input: {
    flex: 1,
    marginLeft: 10
  },
  buttonWrapper: {
    marginTop: '30%',
    alignSelf: 'center',
    width: '85%',
    borderWidth: 1.5,
    borderRadius: 50,
  },
  buttonWrapperSocial: {
    marginTop: 50,
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
    color: Colors.overlayColor,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    fontWeight: '600'
  },
  errorMessageStyle: {
    color: 'red',
    width: '100%',
    margin: 5
  },
});
export default styles;