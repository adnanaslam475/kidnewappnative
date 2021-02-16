import { StyleSheet } from 'react-native';
import Colors from '../../Styles/Colors';
const styles = StyleSheet.create({
  chatMessageWrapper: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  receivedWrapper: {
    justifyContent: "flex-start",
  },
  chatMessageInner: {
    width: '40%',
    // padding: 0 10,

  },
  receivedInnerWrapper: {
    width: '60%',
  },
  avatarName: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ImageChecing: {
    height: 30,
    width: 30,
    borderWidth: 0.4,
    borderRadius: 30
  },
  textName: {
    margin: 0,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "400"
  },
  chatMessageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,

  },
  DateWrapper: {
    marginLeft: 'auto',
    fontSize: 12,
    color: Colors.grey
  },
  chatMessageHeaderText: {
    borderWidth: 1,
    borderColor: Colors.cancel,
    borderRadius: 15,
    backgroundColor: Colors.cancel
  },
  chatMessageHeaderText1: {
    borderWidth: 1,
    borderColor: Colors.appHeaderColor,
    borderRadius: 15,
    backgroundColor: Colors.appHeaderColor
  }
});
export default styles;