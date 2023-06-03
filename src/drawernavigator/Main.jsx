import { View, Text,Button } from 'react-native'
import React from 'react'


const Main = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notification')}
        title="Go to notifications"
      />
    </View>

  )
}

export default Main;