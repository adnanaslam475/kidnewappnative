import { StyleSheet, Dimensions, Platform } from 'react-native';
import Metrics from '../../Styles/Metrices';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: 'white'
  },
  mainWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50
  },
  logoStyle: {
    alignSelf: 'center',
    width: 200,
    height: 190,
  },
  textStyle: {
    fontSize: 30,
    fontWeight: '800',
    color: Colors.appHeaderColor,
    marginTop: 20,
    textAlign: 'center',
    width: '60%',
    alignSelf: 'center'
  }
});
export default styles;  