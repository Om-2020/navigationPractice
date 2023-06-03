import { View, Text,Button } from 'react-native'
import React from 'react'

const Notification = ({navigation}) => {
  return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Button onPress={() => navigation.goBack()} title="Go back Menu" />
          </View>

    
  )
}

export default Notification;