import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from "react-redux";
import { date } from 'yup';
import QRCode from 'react-native-qrcode-svg';

const Ticket = () => {
    const {day,passenger,seat,time,TicketId,journey,code,from,to} = useSelector((state) => state.app);
  return (
    <View>
      <View className=" bg-white shadow-md mt-4 mx-4 ">
      <View className="px-4">
<Text className="font-bold mt-6">Volcano Express</Text>
<View className="mt-4">
    <Text className=" text-gray-500 font-bold ">Passenger</Text>
    <Text className="mt-1">{passenger}</Text>
</View>
<View className="mt-4">
   
</View>
<View className=" flex-row  w-full mt-4">
   
    <View className=" w-1/2 ">
    <Text className=" text-gray-400 font-bold ">Date</Text>
    <Text className="mt-1">{day}</Text>
    </View>
    <View className=" w-1/2">
    <Text className=" text-gray-400 font-bold ">Time</Text>
    <Text className=" mt-1">12:00 PM</Text>
    </View>
</View>
<View className=" flex-row w-full mt-4">
    <View className= " w-1/2">
    <Text className=" text-gray-400 font-bold ">FROM</Text>
    <Text className=" mt-1">{from}</Text>
    </View>
    <View className=" w-1/2">
    <Text className=" text-gray-400 font-bold ">TO</Text>
    <Text className="mt-1">{to}</Text>
    </View>

</View>
<View className=" flex-row w-full mt-4">
    <View className= " w-1/2">
    <Text className=" text-gray-400 font-bold">BUS</Text>
    <Text className=" mt-2">RAC250B</Text>
    </View>
    <View className=" w-1/2">
    <Text className=" text-gray-400 font-bold">SEAT</Text>
    <Text className=" mt-2">{seat}</Text>
    </View>
</View>
<View className=" flex-row w-92 mt-8">
  <QRCode  className="" value={code}/>
</View>

</View>
<TouchableOpacity className=" bg-blue-500  mt-4 w-full rounded-sm p-2 ">
<View >
    <Text className="text-white">Ticket No:</Text>
    <Text className="text-white mt-1">{TicketId}</Text>
</View>
</TouchableOpacity>
      </View>
      

      </View>
   
  )
}

export default Ticket