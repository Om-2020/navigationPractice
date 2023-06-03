import { View, Text,Button } from 'react-native'
import React, { useReducer } from 'react'
import {useNavigation} from "@react-navigation/native";


function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }

}

const Welcome = ({route}) => {
    const navigation = useNavigation();
    //console.log(route);
    const name = route.params.name;
    
    const [cnt,dispatch] = useReducer(reducer,initialstate=0)


    function Increment(params) {
      dispatch({type:"increment"});
    }

    function Decrement(params) {
      dispatch({type:"decrement"});
    }


  return (
    <View>
      <Text>Welcome {name}</Text>
      <Button title='Go to Home' onPress={()=>navigation.navigate('Home')}> </Button>
      <Text>Experimentwith Reducer Hooks</Text>
      <Button title='+' onPress={Increment}></Button>
      <Text>{cnt}</Text>
      <Button title='-' onPress={Decrement}></Button>
    </View>
  )
}

export default Welcome;