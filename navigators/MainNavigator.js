import React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../Screen/HomeScreen";
import DetailScreen from "../Screen/DetailScreen";
import Icon from 'react-native-vector-icons/Feather';


const Stack = createStackNavigator();

const MainNavigator = ({navigation}) => (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}
            options={{
              title: 'FaceOut',
              headerTitleStyle: {
                alignSelf: 'center',
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                   <Icon style = {{paddingLeft : 20}} name="menu" size={24} color="#000" />
                 </TouchableOpacity> 
              ),
              headerRight: () =>(<View />)
            }}
            />
            
          <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>


)

export default MainNavigator;