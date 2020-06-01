import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screen/homeScreen';
import ListDemoScreen from '../screen/listDemoScreen';
import WebViewScreen from '../screen/webViewScreen';
import TipsScreen from '../screen/tipsScreen';

export default createStackNavigator({
  Tips: {
    screen: TipsScreen,
    navigationOptions: {
      title: 'Tips',
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Refresh',
      // headerStyle: {
      //     backgroundColor: '#10f9fa'
      // }
    },
  },
  ListDemo: {
    screen: ListDemoScreen,
  },
  WebView: {
    screen: WebViewScreen,
  },
});
