import { View, Text, Button } from 'react-native'
import React from 'react'

const Splash = ({navigation}) => {
  return (
    <View style={{flex:1,alignContent:'center',alignItems:'center',backgroundColor:'blue'}} >
      <Text>Splash</Text>
      <Button title="go to Welcome" onPress={()=>{navigation.navigate('Welcome',{'name':"om"})}}></Button>
      <Button title='go to Buttom screen drawer' onPress={()=>navigation.navigate('Buttomscreen')}></Button>
    </View>
  )
}

export default Splash;