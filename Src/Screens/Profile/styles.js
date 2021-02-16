import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  drawerContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: Platform.OS == 'android' ? '10%' : '20%'
  },
  mainContainer: {
    // marginBottom: '-45%',
    // marginTop: Platform.OS == 'android' ? widthScreen / 0.77 : widthScreen / 0.7
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
  mainContainer1: {
    // marginBottom: '-20%',
    // marginTop: Platform.OS == 'android' ? widthScreen / 1.1 : widthScreen / 0.95,
    // paddingHorizontal: widthScreen,
    width: '100%',
    height: '45%',
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
  address: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
  },
  buttonWrapper: {
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center',
    width: '85%',
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: Colors.overlayColor,
    backgroundColor: Colors.overlayColor
  },
  continueText: {
    color: Colors.White,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    fontWeight: '600'
  },
  profile_Bio: {
    marginTop: 15,
    fontSize: 14,
    alignSelf: 'center',
    width: '80%',
  },
  interest: {
    marginTop: 15,
    fontSize: 14,
    alignSelf: 'center',
    width: '80%',
    textAlign: 'center'
  }
});
export default styles;