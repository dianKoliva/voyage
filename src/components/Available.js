import { View, Text, FlatList ,StyleSheet,TouchableOpacity} from 'react-native'
import React, { useState,useEffect } from 'react'
import { fonts } from "../utils/fonts";
import { useSelector } from "react-redux";
import { trips } from '../functions/api';
import {forSeat} from "../store/reducers";
import { useDispatch } from "react-redux";

const Available = ({navigation}) => {
  const dispatch=useDispatch();
  const { token,from,to} = useSelector((state) => state.app);
  const{date}=useSelector((state) => state.app);
  const [buses,setBuses]=useState([]);
  const [routeName,setRouteName]=useState("");
  const [routerNo,setRouteNo]=useState(0);
  const [time,setTime]=useState("");

  useEffect(()=>{
    trips(token,date,from,to).then((res) => {
      let list=res.data.map((p)=>{
        let obj = { time: p.dept_time, route:p.routeName,seats:p.capacity,date:p.dept_date,nom:p.route};
        return obj;
      });
   setBuses(list)
    
    })
    .catch((err) => console.log(err));
  },[])
 
  const setter=(t,name,no)=>{
    setTime(t);
    setRouteName(name);
    setRouteNo(no);
  dispatch(forSeat({routeName,routerNo,time}));
  }
  return (
    
    <View style={styles.container}>
        <View className="bg-white  shadow-md  py-3">
        <View className=" flex-row mt-2  font-bold justify-center ">
          <View className="flex-row">
          <Text className="font-bold">From:</Text>
          <Text className="">  {from}</Text>
          </View>
        
          <View className="flex-row px-4">
          <Text className="font-bold">To:</Text>
          <Text className="">  {to}</Text>
          </View>
        </View>
        <View className="  justify-center mt-2 flex-row ">
            <Text className="font-bold ">On:</Text>
            <Text>  {date} </Text>
        </View>
      </View>
     <View style={styles.content}>

<View className="" style={styles.list}>
  <FlatList
 
  data={buses}
  renderItem={({item})=>(
    <TouchableOpacity onPress={()=>{setter(item.time,item.route,item.nom)}}>
<View className="bg-white shadow-sm border  border-gray-100 p-2 mt-4 ">
          <Text className=" text-blue-500  mb-2  " style={[ fonts.dmSansBold]}>VOLCANO EXPRESS</Text>
            <Text className="mb-1" style={[ fonts.dmSansRegular]}>Departure Date:  {item.date}</Text>
            <Text className="mb-1" style={[ fonts.dmSansRegular]}>Departure Time:  {item.time}</Text>
            <Text className="mb-1" style={[ fonts.dmSansRegular]}>From:  {from}</Text>
            <Text className="mb-1" style={[ fonts.dmSansRegular]}>To:  {to}</Text>
       
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