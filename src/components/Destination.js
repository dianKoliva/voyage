import { View, Text,StatusBar, TouchableOpacity, StyleSheet, Platform,Button} from 'react-native'
import React, {useState,useEffect} from 'react'
import { FontAwesome } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker'
import { stations } from '../functions/api';
import { useSelector } from "react-redux";
import { fonts } from "../utils/fonts";
import { useDispatch } from "react-redux";
import { setdate } from '../store/reducers';
import {setWay} from "../store/reducers"
const Destination = ({navigation}) => { 
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.app);
  const [selectedValue, setSelectedValue] = useState("select");
  const [secondValue,setSecondValue]=useState("");
  const [date,setDate]=useState(new Date());
 
  const [mode,setMode]=useState('date');
  const [show,setShow]=useState(false);
  const [text,setText]=useState("not set");
  const [places,setPlaces]=useState([]);
  const onChange=(event,selectedDate)=>{
    const currentDate=selectedDate || date;
    setShow(Platform.OS==="ios");
    setDate(currentDate);
    let fDate=currentDate.getFullYear()+'/'+(currentDate.getMonth()+1)+"/"+currentDate.getDate();
    setText(fDate);
  }

  const showMode=(currentMode)=>{
    setShow(true);
    setMode(currentMode);
  }

  const submitter=()=>{
 
    
    dispatch(setdate(text));
    dispatch(setWay({selectedValue,secondValue}));
    navigation.navigate("Available"); 
  }

  useEffect(()=>{
    stations(token).then((res) => {
      let list=res.map((p)=>{
        let obj = { short: p.country, name:p.name };
        return obj;
      });
      setPlaces(list);
    
    })
    .catch((err) => console.log(err));
  },[])

  return (
    <View>
        <View className="   py-4 bg-blue-500">
          <View className=" flex-row ml-4 mt-4">
            <View className="mt-2 mb-2  mr-4">
            <FontAwesome name="bars" size={16} color="white"  />
            </View>
         
          <Text className="text-white   text-xl  font-bold mt-[2px]" style={[ fonts.dmSansBold]}>Voyage Bus</Text>
          </View>
            
            <View className=" flex-row  pt-6 justify-between ">
                <Text className="text-white ml-4" style={[ fonts.dmSansRegular]}>ONE WAY </Text>
                
                <Text className="text-white mr-4 " style={[ fonts.dmSansRegular]}>MY BOOKINNGS</Text>
            
               
            </View>

        </View>
        <View>

<View className=" pt-4 pl-3 flex-row space-x-4 ">
  <View className="bg-white shadow-sm p-1  ">
  <Text style={[ fonts.dmSansBold]} className="font-bold">From</Text>
<Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {setSelectedValue(itemValue)}}
      >
        {places.map((item)=>(
 <Picker.Item key={item.short} label={item.name} value={item.name} />
        ))}
       
      </Picker>
  </View>
  <View className="bg-white shadow-sm p-1 ">
  <Text style={[ fonts.dmSansRegular]} className="font-bold">To</Text>
<Picker
        selectedValue={secondValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {setSecondValue(itemValue)}}
      >
        {places.map((item)=>(
 <Picker.Item style={[ fonts.dmSansRegular]} key={item.short} label={item.name} value={item.name} />
        ))}
      </Picker>
  </View>

</View>
<View className="items-center mt-10 bg-white shadow-sm mx-8">
<Text className="py-3 font-bold " style={[ fonts.dmSansBold]}>DEPART DATE</Text>
<View className="flex-row  py-3  ">
<View>
<Button title='Choose Date' onPress={()=>showMode('date')}/>
</View>



</View>
<View className="mb-2">
  <Text style={[ fonts.dmSansRegular]}>Time: {text} </Text>
</View>




{show &&(
  <DateTimePicker
  testID='="dateTimePicker'
  value={date}
  mode={mode}
  is24Hour={true}
  display='default'
  onChange={onChange} />
  )
  }
</View>
<TouchableOpacity className="bg-blue-500 mt-8 p-2 items-center mx-8" onPress={submitter}>
  <Text style={[ fonts.dmSansRegular]} className="text-white">Search Bus Trips</Text>
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