/* eslint-disable */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Layout, Text} from '@ui-kitten/components';
import {useSelector} from 'react-redux';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import LogIn from './startingScreen/Login';
import StartingNavStack from './../navigations/starting';

export default function Theme() {
  const darkStore = useSelector(state => state.appReducer.dark);
  // const [darkState, setDarkState] = useState(darkStore);

  let appTheme;
  if(darkStore) {
    appTheme = eva.dark
  } else {
    appTheme = eva.light
  }

  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={appTheme}>
        <StartingNavStack />
      </ApplicationProvider>
    </NavigationContainer>
  );
}
