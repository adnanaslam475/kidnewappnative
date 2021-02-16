import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../Screens/Profile';
import EditProfile from '../Screens/EditProfile';
import Setting from '../Screens/Setting';
import ChatMain from '../Screens/ChatBox';
import FriendProfile from '../Screens/ChatBox/friendProfile';
import Chat from '../Screens/ChatBox/chat';
const HomeNavigation = createStackNavigator(
  {
    // Menu: { screen: Menu },
    Profile: { screen: Profile },
    EditProfile: { screen: EditProfile },
    Setting: { screen: Setting },
    ChatMain: { screen: ChatMain },
    FriendProfile: { screen: FriendProfile },
    Chat: { screen: Chat },
  },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
      cardStack: { gesturesEnabled: false },
    },
    headerMode: 'none',
  },
);
export default HomeNavigation;
