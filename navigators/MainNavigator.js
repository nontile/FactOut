import React from 'react';
import { Button} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../Screen/HomeScreen";
import DetailScreen from "../Screen/DetailScreen";

const Stack = createStackNavigator();

const MainNavigator = ({navigation}) => (
    // <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} 
            options={{
              title: 'Overview',
              headerLeft: () => (
                <Button
                  onPress={() => navigation.toggleDrawer()}
                    title="drawer"
                />
              ),
            }}
            />
          <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
    //   </NavigationContainer>

)

export default MainNavigator;