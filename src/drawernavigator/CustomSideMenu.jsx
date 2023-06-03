import { View, Text, Image } from 'react-native'
import React from 'react'

const CustomSideMenu = () => {



  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.27, backgroundColor: "green" ,paddingTop:20,paddingHorizontal:20 }}>
        <Image source={require('../assets/om.jpeg')}
          style={{ height: 100, width: 100,borderRadius:50 }} />
        <Text style={{ fontWeight: "bold", fontSize: 22, marginTop: 5 }}>Om Prakash Bharti</Text>
        <Text style={{ fontSize: 15, marginTop: 5}}>{`6000 followers`}</Text>
      </View>


      <View style={{ flex: 0.53, backgroundColor: "red" }}>
        <Text >
          Hi this is the Side Menu
        </Text>
      </View>


      <View style={{ flex: 0.2, backgroundColor: "pink" }}>
        <Text>
          Hi this is the Side Menu
        </Text>
      </View>
    </View>
  )
}

export default CustomSideMenu;