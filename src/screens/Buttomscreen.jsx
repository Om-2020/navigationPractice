import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
import Call from '../buttomnavigator/Call';
import Setting from '../buttomnavigator/Setting';
import Message from '../buttomnavigator/Message';


const buttom = createBottomTabNavigator();

const Buttomscreen = () => {
    return (
        <buttom.Navigator>
            <buttom.Screen
                name='Call'
                component={Call}
                options={{
                    tabBarLabel: Call,
                    headerShown: false,
                    tabBarIcon: () => {
                        return (
                            <Image source={require('../assets/call.png')}
                                style={{ height: 24, width: 24 }} />
                        )
                    }
                }}
            />
            <buttom.Screen
                name='Setting'
                component={Setting}
                options={{
                    tabBarLabel: 'Setting',
                    headerShown: false,
                    tabBarIcon: () => {
                        return (
                            <Image source={require('../assets/setting.png')}
                                style={{ height: 24, width: 24 }} />
                        )
                    }
                }}
            />
            <buttom.Screen
                name='Message'
                component={Message}
                options={{
                    tabBarLabel: 'Message',
                    headerShown: false,
                    tabBarIcon: () => {
                        return (
                            <Image source={require('../assets/message.png')}
                                style={{ height: 24, width: 24 }} />
                        )
                    }
                }}

            />
        </buttom.Navigator>

    )
}

export default Buttomscreen;