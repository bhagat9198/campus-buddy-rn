/* eslint-disable */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {useSelector} from 'react-redux';

export default function Theme() {
  const darkStore = useSelector(state => state.appReducer.dark);
  const [darkState, setDarkState] = useState(darkState);

  let appTheme;
  if(darkState) {
    appTheme = eva.dark
  } else {
    appTheme = eva.light
  }

  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={appTheme}>

      </ApplicationProvider>
    </NavigationContainer>
  );
}
