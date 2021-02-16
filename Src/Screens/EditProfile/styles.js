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
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  backImage: {
    width: 25,
    height: 25,
    tintColor: Colors.White
  },
  saveText: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.White
  },
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 40,
  },
  editProfileText: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.White
  },
  avatar1: {
    marginTop: 20,
    alignSelf: "center",
    width: 140,
    height: 140,
    borderWidth: 1,
    borderRadius: 140,
    borderColor: Colors.overlayColor
  },
  changeProfileText: {
    marginTop: 10,
    color: Colors.White,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center'
  },
  dataContainer: {
    width: '90%',
    alignSelf: "center",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 20,
  },
  dataContainer1: {
    width: '90%',
    alignSelf: "center",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 20,
    height: 80
  },

  headingText: {
    color: Colors.White,
    fontSize: 20,
    fontWeight: '600'
  },
  dataText: {
    color: Colors.White,
    fontSize: 15,
    fontWeight: '600'
  }
});
export default styles;

