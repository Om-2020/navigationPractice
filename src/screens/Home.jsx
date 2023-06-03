import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from '../drawernavigator/Main';
import Notification from '../drawernavigator/Notification';
import CustomSideMenu from '../drawernavigator/CustomSideMenu';

const drawer = createDrawerNavigator();

const Home = () => {
  return (

    <drawer.Navigator
      drawerContent={props => <CustomSideMenu {...props}/>}
      initialRouteName='Main'>
      <drawer.Screen
        name='Main'
        component={Main}
      />
      <drawer.Screen
        name='Notification'
        component={Notification}
      />
    </drawer.Navigator>
  )
}

export default Home;