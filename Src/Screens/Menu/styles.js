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
    opacity: 0.7
  },
  mainContainer: {
    marginTop: Platform.OS == 'android' ? '18%' : '25%',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  menuText: {
    fontSize: 35,
    fontWeight: '700',
    color: Colors.overlayColor
  },
  mainLogo: {
    marginTop: -50,
    width: 150,
    height: 150,
    tintColor: Colors.overlayColor
  },
  menuContainer: {
    marginTop: '5%',
    width: '90%',
    alignSelf: 'center',
    marginBottom: '7%',
  },
  menuTitile: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '700',
    color: Colors.borderColor
  },
  menuDescription: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 12,
    color: Colors.borderColor
  },
  chatContainer: {
    marginLeft: '20%',
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  textStyling: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.borderColor,
    margin: 5,
    marginLeft: 20
  },
  imageHanlder: {
    tintColor: Colors.overlayColor
  },
  buttonWrapper: {
    marginTop: 60,
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