import { View, Text,StyleSheet,FlatList,TouchableOpacity ,ScrollView} from 'react-native'
import React,{useState} from 'react'

const Seats = ({navigation}) => {

  return (
    <ScrollView style={{ height: '100%'}}>
    <View style={{flex: 1}} >
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
     <View className="flex-row justify-between" >

        <View style={{flex: 1}}>
        <ScrollView className="px-4 py-4" >
     <Text className="font-bold mb-4">
            Kigali - Bujumbura
        </Text>
        <View className="flex-row">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
  </ScrollView>
        </View>

        <View style={{flex: 1}}>
        <ScrollView className="px-4 py-4 pl-6" >
     <Text className="font-bold mb-4">
            Kigali - Bujumbura
        </Text>
        <View className="flex-row">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
        <View className="flex-row mt-2">
        <View className="w-8 h-8 rounded-sm  bg-gray-300 justify-center items-center "><Text className="">1</Text></View>
        <View className="w-8 h-8 rounded-sm ml-8  bg-gray-300 justify-center items-center "><Text className="">2</Text></View>
        </View>
  </ScrollView>
        </View>
</View>

<TouchableOpacity onPress={()=>{navigation.navigate('Payment')}} className=" rounded-sm bg-blue-500 ml-4 mr-16 py-2 justify-center items-center mb-2">
<Text className="text-white  font-bold  ">Next</Text>
</TouchableOpacity>





    </View>
    </ScrollView>
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
    marginTop:20,
    flex:1,
   
  }
  });

export default Seats
