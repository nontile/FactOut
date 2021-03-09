import React from 'react';
import { Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../Screen/HomeScreen";
import DetailScreen from "../Screen/DetailScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} 
            options={{
              title: 'Overview',
              headerLeft: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#fff"
                />
              ),
            }}
            />
          <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>

)

export default AppNavigator;