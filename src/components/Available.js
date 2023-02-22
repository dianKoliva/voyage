import { View, Text, FlatList ,StyleSheet,TouchableOpacity} from 'react-native'
import React, { useState,useEffect } from 'react'
import { fonts } from "../utils/fonts";
import { useSelector } from "react-redux";
import { trips } from '../functions/api';

const Available = ({navigation}) => {
  const { token} = useSelector((state) => state.app);
  const{date}=useSelector((state) => state.app);
  const [buses,setBuses]=useState([])

  useEffect(()=>{
    trips(token,date).then((res) => {
      let list=res.data.map((p)=>{
        let obj = { time: p.dept_time, route:p.routeName,seats:p.capacity,date:p.dept_date};
        return obj;
      });
   setBuses(list)
    
    })
    .catch((err) => console.log(err));
  },[])
 
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
          <Text className=" text-blue-500  mb-2  " style={[ fonts.dmSansBold]}>{item.name}</Text>
            <Text className="mb-1" style={[ fonts.dmSansRegular]}>Departure Date:  {item.date}</Text>
            <Text className="mb-1" style={[ fonts.dmSansRegular]}>Departure Time:  {item.time}</Text>
            <Text className="mb-1" style={[ fonts.dmSansRegular]}>Route:  {item.route}</Text>
           
            <Text className=" " style={[ fonts.dmSansBold]}>Price:  {item.price} RWF</Text>

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