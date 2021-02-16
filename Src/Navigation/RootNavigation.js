import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Menu from '../Screens/Menu';
import Splash from '../Screens/Splash';
import Intro from '../Screens/Intro';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';

const AppNavigator = createSwitchNavigator(
  {
    Splash: Splash,
    Intro: Intro,
    HomeNavigation: HomeNavigation,
    AuthNavigation: AuthNavigation,
    Menu:  Menu,
  },
  {
    initialRouteName: 'Splash',
    initialRouteParams: { transition: 'fade' },
  },
);

export default createAppContainer(AppNavigator);