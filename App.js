/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import HomeScreen from "./Screen/HomeScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function DetailsScreen({ route, navigation}) {
  const {detailId } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{JSON.stringify(detailId)}</Text>
      <Button 
        title="Go Home"
        onPress={()=>navigation.navigate('Home', {complete: 'A'})}
        />
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./images/logo-test.png')}
    />
  );
}

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true} />
      <NavigationContainer>
        <Stack.Navigator 
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
        >
          <Stack.Screen name="Home" component={HomeScreen} 
                    options={{
                      headerTitle: props => <LogoTitle {...props} />,
                      headerRight: () => (
                        <Button
                          onPress={() => alert('This is a button!')}
                          title="Info"
                          color="#fff"
                        />
                      ),
                    }}         
                   
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    
  );
};


export default App;
