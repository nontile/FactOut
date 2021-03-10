import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainNavigator from "./MainNavigator";
import LicenseScreen from "../Screen/LicenseScreen";
import ModalScreen from "../Screen/ModalScreen";

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={MainNavigator} />
          <Drawer.Screen name="License" component={LicenseScreen} />
          <Drawer.Screen name="Explain" component={ModalScreen} />
        </Drawer.Navigator>
      </NavigationContainer>

)

export default AppNavigator;