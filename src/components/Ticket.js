import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


const Ticket = () => {
  return (
    <View>
      <View className=" bg-white shadow-md mt-4 mx-4 ">
      <View className="px-4">
<Text className="font-bold mt-6">Volcano Express</Text>
<View className="mt-4">
    <Text className=" text-gray-400 ">Passenger</Text>
    <Text className="font-bold">John</Text>
</View>
<View className="mt-4">
    <Text className=" text-gray-400 ">Date</Text>
    <Text className="font-bold">MON, 16 JUL 2016</Text>
</View>
<View className=" flex-row  w-full mt-4">
    <View className=" w-1/2">
    <Text className=" text-gray-400 ">Boarding</Text>
    <Text className="font-bold mt-2">12:00 PM</Text>
    </View>
    <View className=" w-1/2 ">
    <Text className=" text-gray-400 ">Departure</Text>
    <Text className="font-bold mt-2">12:30 PM</Text>
    </View>
    
</View>
<View className=" flex-row w-full mt-4">
    <View className= " w-1/2">
    <Text className=" text-gray-400 ">FROM</Text>
    <Text className="font-bold mt-2">KIGALI</Text>
    </View>
    <View className=" w-1/2">
    <Text className=" text-gray-400 ">TO</Text>
    <Text className="font-bold mt-2">KAMPALA</Text>
    </View>
    
</View>
<View className=" flex-row w-full mt-4">
    <View className= " w-1/2">
    <Text className=" text-gray-400 ">BUS</Text>
    <Text className="font-bold mt-2">RAC250B</Text>
    </View>
    <View className=" w-1/2">
    <Text className=" text-gray-400 ">SEAT</Text>
    <Text className="font-bold mt-2">48</Text>
    </View>
</View>
</View>
<TouchableOpacity className=" bg-blue-500  mt-4 w-full rounded-sm p-2 ">
<View >
    <Text className="text-white">Ticket No:</Text>
    <Text className="text-white mt-1">NSN-IXP-NYJ-J2G</Text>
</View>
</TouchableOpacity>
      </View>
      

      </View>
   
  )
}

export default Ticket