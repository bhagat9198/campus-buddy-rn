/* eslint-disable */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {StartingStack} from './../constants/navigations/starting';
import Login from './../pages/startingScreen/Login';
import Signup1 from './../pages/startingScreen/Signup1';
import Signup2 from './../pages/startingScreen/Signup2';

const Stack = createStackNavigator();

function loginScreen() {
  return <Stack.Screen name={StartingStack.login} component={Login} />;
}

function signup1Screen() {
  return <Stack.Screen name={StartingStack.signup1} component={Signup1} />;
}

function signup2Screen() {
  return <Stack.Screen name={StartingStack.signup2} component={Signup2} />;
}

export default function StartingNavStack() {
  return (
    <Stack.Navigator
      initialRouteName={StartingStack.signup2Screen}
      screenOptions={{
        headerShown: false,
      }}>
      {loginScreen()}
      {signup1Screen()}
      {signup2Screen()}
    </Stack.Navigator>
  );
};
