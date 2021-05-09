/* eslint-disable */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {AdminStack} from './../../constants/navigations/admin';
import Dashboard from './../../pages/admin/Dashboard';
import AddFaculty from './../../pages/admin/AddFaculty';
import AddInstitute from './../../pages/admin/AddInstitute';
import AddStudent from './../../pages/admin/AddStudent';
import {Layout} from '@ui-kitten/components';

const Stack = createStackNavigator();

function dashboardScreen() {
  return (
    <Stack.Screen
      name={AdminStack.dashboard}
      component={Dashboard}
      options={{
        title: `Good Morning`,
        headerRight: () => {
          return (
            <Layout>
              <MaterialIcons
                name="admin-panel-settings"
                size="24"
                color="orange"
              />
            </Layout>
          );
        },
      }}
    />
  );
}

export const DashboardStack = () => {
  return <Stack.Navigator>{dashboardScreen()}</Stack.Navigator>;
};
