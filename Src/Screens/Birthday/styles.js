import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: Colors.birthdayColor
  },
  imagebackgroundd: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  birthdayLogo: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  closeWrapper: {
    marginTop: Platform.OS == 'android' ? '10%' : '20%',
    marginBottom: '35%',
    width: '90%',
    alignSelf: 'center'
  },
  closeImage: {
    alignSelf: 'flex-end'
  }
});
export default styles;