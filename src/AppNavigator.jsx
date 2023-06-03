import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/Splash';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import Buttomscreen from './screens/Buttomscreen';


const stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen 

          name = "Splash"
          component={Splash}
          options={{headerShown:false}}
        />
        <stack.Screen
          name='Welcome'
          component={Welcome}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name='Buttomscreen'
          component={Buttomscreen}
          options={{ headerShown: false }}
        />
        
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;