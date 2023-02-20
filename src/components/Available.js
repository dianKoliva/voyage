import { View, Text, FlatList ,StatusBar,StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

const Available = ({navigation}) => {
    const [buses,setBuses]=useState([
        {name:"Volcano Express",date:"5th November 2010",from:"Kigali",to:"Burundi",price:"1200",key:1},
        {name:"Volcano Express",date:"5th November 2010",from:"Kigali",to:"Burundi",price:"1200",key:2},
        {name:"Volcano Express",date:"5th November 2010",from:"Kigali",to:"Burundi",price:"1200",key:3},
        {name:"Volcano Express",date:"5th November 2010",from:"Kigali",to:"Burundi",price:"1200",key:4},
        {name:"Volcano Express",date:"5th November 2010",from:"Kigali",to:"Burundi",price:"1200",key:5},
        {name:"Volcano Express",date:"5th November 2010",from:"Kigali",to:"Burundi",price:"1200",key:6}
    ])
  return (
    
    <View style={styles.container}>
        <View className="bg-white  shadow-md  py-3">
        <View className=" flex-row mt-2  font-bold justify-center ">
        <Text className="font-bold">From: Kigali</Text>
        <Text className="ml-3 font-bold">To: Burundi</Text>
        </View>
        <View className=" items-center mt-2 ">
            <Text className="font-bold ">On: Date</Text>
        </View>
      </View>
     <View style={styles.content}>

<View className="" style={styles.list}>
  <FlatList
 
  data={buses}
  renderItem={({item})=>(
    <TouchableOpacity onPress={()=>{navigation.navigate("Seats")}}>
<View className="bg-white shadow-sm border  border-gray-100 p-2 mt-4 ">
          <Text className=" text-blue-500 font-bold mb-2 ">{item.name}</Text>
            <Text className="mb-1">Departure Date:  {item.date}</Text>
            <Text className="mb-1">From:  {item.from}</Text>
            <Text className="mb-1">To:  {item.to}</Text>
            <Text className=" font-bold">Price:  {item.price} RWF</Text>

        </View>
        </TouchableOpacity>
  )}
  />



</View>
     </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
content:{
  padding: 10,
  flex:1
},
list:{
  marginTop:0,
  flex:1,
 
}
});

export default Available