import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LoadingScreen from './screens-2/LoadingScreen';
import LoginScreen from './screens-2/LoginScreen';
import DashboardScreen from './screens-2/DashboardScreen';

import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return(
    <AppNavigator />
  ) 
}