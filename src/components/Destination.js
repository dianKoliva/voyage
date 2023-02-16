import { View, Text,StatusBar, TouchableOpacity, StyleSheet, Platform,Button} from 'react-native'
import React, {useState} from 'react'
import { FontAwesome } from '@expo/vector-icons';


import {Picker} from '@react-native-picker/picker';


const Destination = ({navigation}) => {
  
    const [mydate, setDate] = useState(new Date());
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View>
        <View className="   py-4 bg-blue-500">
          <View className=" flex-row ml-4 mt-4">
            <View className="mt-4 mb-2  mr-4">
            <FontAwesome name="bars" size={16} color="white"  />
            </View>
         
          <Text className="text-white font-bold mt-4">Voyage Bus</Text>
          </View>
            
            <View className=" flex-row  pt-6 justify-between ">
                <Text className="text-white ml-4">ONE WAY </Text>
                
                <Text className="text-white mr-4 ">MY BOOKINNGS</Text>
            
               
            </View>

        </View>
        <View>

<View className=" pt-4 pl-3 flex-row space-x-4 ">
  <View className="bg-white shadow-sm p-1  ">
  <Text className="font-bold">From</Text>
<Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {setSelectedValue(itemValue);console.log(itemIndex)}}
      >
        <Picker.Item label="Java" value="java" />
      </Picker>
  </View>
  <View className="bg-white shadow-sm p-1 ">
  <Text className="font-bold">To</Text>
<Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {setSelectedValue(itemValue);console.log(itemIndex)}}
      >
        <Picker.Item label="Java" value="java" />
      </Picker>
  </View>

</View>
<View className="items-center mt-10 bg-white shadow-sm mx-8">
<Text>DEPART DATE</Text>


</View>
<TouchableOpacity className="bg-blue-500 mt-8 p-2 items-center mx-8" onPress={()=>{navigation.navigate("Available")}}>
  <Text className="text-white">Search Bus Trips</Text>
</TouchableOpacity>
        </View>

        <StatusBar style="auto"  barStyle="light-content" />
      
    </View>
  )
}

const styles=StyleSheet.create({
  row:{
flexDirection:'row',
flexWrap: 'wrap',
  }
})

export default Destination