import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import PlayersList from './PlayersList';
import PlayerView from './PlayerView';

const AppStackNavigator = createStackNavigator(
  {
    playersList: {
      screen: PlayersList,
      path: 'playersList',
    },
    playerShow: {
      screen: PlayerView,
      path: 'playerShow',
    },
  },
  {
    headerTransitionPreset: 'uikit',
    defaultNavigationOptions: {
      headerTruncatedBackTitle: 'Retour',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#151B4A',
      },
    },
  },
);

export default createAppContainer(AppStackNavigator);
