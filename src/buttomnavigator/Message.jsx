import { View, Text } from 'react-native'
import React from 'react'

const Message = () => {
  return (
      <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'blue' }}>Message</Text>
    </View>
  )
}

export default Message;