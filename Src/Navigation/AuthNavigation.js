import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Birthday from '../Screens/Birthday';
import ForgotPassword from '../Screens/ForgotPassword';
import NewPassword from '../Screens/NewPassword/NewPassword';
const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    ForgotPassword: { screen: ForgotPassword },
    NewPassword: { screen: NewPassword },
    SignUp: { screen: SignUp },
    Birthday: { screen: Birthday }
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
export default AuthNavigation;
