import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from './Screens/WelcomeScreen';
import { AppDrawerNavigator } from './Components/AppDrawerNavigator.js'


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
