import { StyleSheet, Dimensions } from 'react-native';
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
  gradient1: {
    width: '100%',
    height: '100%',
    flex: 1,
    opacity: 0.85
  },
  contentLayout: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -280,
    marginLeft: 50,
  },
  contentLayout1: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center'
    marginLeft: 50,
    marginTop: -50
  },
  contentLayout2: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center'
    marginLeft: 50,
    marginTop: -80
  },
  missionText: {
    fontSize: 35,
    fontWeight: '700',
    color: Colors.White
  },
  firstDescription: {
    marginTop: 20,
    fontSize: 18,
    color: Colors.White,
    width: '65%'
  },
  dotBox: {
    marginBottom: 20,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  circleDot: {
    width: 10,
    height: 10
  },
  bottomBox: {
    marginBottom: 40,
    alignSelf: 'center',
    width: '90%',

  },
  bottomDescription: {
    alignSelf: 'center',
    fontSize: 12,
    color: Colors.White,
    textAlign: 'center'
  },
  buttonWrapper: {
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center',
    width: '85%',
    borderWidth: 1.5,
    borderColor: Colors.White,
    borderRadius: 50,
    backgroundColor: Colors.appHeaderColor
  },
  continueText: {
    color: Colors.White,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    fontWeight: '600'
  }
});
export default styles;  