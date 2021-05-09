/* eslint-disable */

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Layout} from '@ui-kitten/components';

import {AdminDrawer} from './../../constants/navigations/admin';
import {DashboardStack} from './stack';

const Drawer = createDrawerNavigator();

export default function AdminNavDrawer() {
  return (
    <Drawer.Navigator initialRouteName={AdminDrawer.dashboardDrawer}>
      <Drawer.Screen
        name={AdminDrawer.dashboardDrawer}
        component={DashboardStack}
        options={{
          title: 'Dashbaord',
          drawerIcon: () => {
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
    </Drawer.Navigator>
  );
}
