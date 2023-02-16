import { View, Text } from 'react-native'
import React from 'react'

const Seats = () => {
  return (
    <View>
     <View className="p-4 shadow-sm bg-white">
        <View className="w-full flex-row " >

        <View className="w-1/2 ">
        <Text className="font-bold">Selected Seats: 1</Text>
    </View>
    <View className="w-1/2">
<Text className="font-bold">Total Price:</Text>
    </View>
        </View>
        <View>
            <Text className="font-bold mt-2">Promo Seats: 0</Text>
        </View>

        <View className=" flex-row mt-4">
            <View className="flex-row">
         
            <View className="w-6 h-6 rounded-sm  bg-gray-300 "></View>
            <Text className="mt-1 ml-2">
                Booked
            </Text>
            </View>

            <View className="flex-row ml-4">
            <View className="w-6 h-6 rounded-sm  bg-green-500  "></View>
            <Text className="mt-1 ml-2">
               Selected
            </Text>
            </View>
            <View className="flex-row ml-4">
            <View className="w-6 h-6 rounded-sm  bg-blue-500"></View>
            <Text className="mt-1 ml-2">
               Reserved
            </Text>
            </View>
           
            
        </View>
     </View>
     <View className="p-2 flex-row justify-between ">
        <Text className="font-bold">
            Kigali - Bujumbura
        </Text>
        <Text className="font-bold">
            Time,Date
        </Text>

     </View>
    </View>
  )
}

export default Seats