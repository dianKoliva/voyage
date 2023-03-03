import { View, Text,StyleSheet,TouchableOpacity ,ScrollView,Alert} from 'react-native'
import React,{useEffect, useState} from 'react'
import { seats } from '../functions/api'
import { useSelector } from "react-redux";
import { ticket } from '../functions/api';
import { setTicket } from '../store/reducers';
import { useDispatch } from "react-redux";

const Seats = ({navigation}) => {
  const dispatch = useDispatch();
  const { token,from,to,time,routeNo,date,routeName} = useSelector((state) => state.app);
 
  const [available,setAvailable]=useState([]);
  const [selected,setSelected]=useState([]);
  const [sample,setSample]=useState([]);
  useEffect(()=>{
    seats(token,from,to,date,time,routeNo).then((res) => {
     
    let total=res.data.message.total_seats;
    let seats=res.data.message.seats;
   
      let list=seats.map((p)=>{
        let obj = { no: p.seat, status:p.status};
        return obj;
      });
 
    setAvailable(list);
    })
    .catch((err) => console.log(err));
  },[])

  function isObjEmpty (obj) {
    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            return true;
        }
    }
    return false;
}

  function finder(num){
 var result={};
  result = available.find(item => item.no == num);
 return isObjEmpty(result);
  }


  function exists(num){
if(selected.includes(num)){
  return true;
}
else{
  return false;
}
  }


  function selecter(num){
    if(selected.includes(num)){
       let filteredArray = selected.filter(item => item !== num);
       setSelected(filteredArray);
    }
    else{
  setSelected([...selected,num]);
    }
  }

function notify(){
  Alert.alert(
    "Voyage",
    "Seat is already booked",
    [
      {
        text: "OK",
      },
    ],
    { cancelable: false }
  );
}

function book(){
  if(selected.length===0){
    Alert.alert(
      "Voyage",
      "Please select a seat",
      [
        {
          text: "OK",
        },
      ],
      { cancelable: false }
    );
    
  }
  else{
    const one=selected[0];
    
ticket(token,from,to,date,time,routeNo,one).then((res)=>{
  
  setSample(res);
  if(res.data.success){
  let id=res.data["tickets"].tickets[0].id;
  let price= res.data["tickets"].common.price;
  dispatch(setTicket({price,id}));
navigation.navigate('Payment');          
}else{
   Alert.alert(
     "Voyage",
     "Seat is already booked",
    [
      {
        text: "OK",
      },
    ],
    { cancelable: false }
  );
}
  

}).catch((err)=>{
  console.log(err);
})

  
  }
}
  return (
    <ScrollView style={{ height: '100%'}}>
    <View style={{flex: 1}} >
     <View className="p-4 shadow-sm bg-white">
        <View className="w-full flex-row " >

        <View className="w-1/2 flex-row">
        <Text className="font-bold">Selected Seats : </Text>
        <Text>{selected.length}</Text>
    </View>
    <View className="w-1/2">
<Text className="font-bold">Total Price :</Text>
    </View>
        </View>
        <View className="flex-row mt-2">
            <Text className="font-bold  ">Promo Seats : </Text>
            <Text >0</Text>
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
               available
            </Text>
            </View>
           
            
        </View>
     </View>
     <View className="flex-row justify-between" >

        <View style={{flex: 1}}>
        <ScrollView className="px-4 py-4" >
     <Text className="font-bold mb-4">
            {routeName}
        </Text>
        <View className="flex-row">
          <TouchableOpacity onPress={()=>{finder(1)?selecter(1):notify()}}>
        <View  className={finder(1)?exists(1)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">1</Text></View>
      </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(2)?selecter(2):notify()}}>
        <View  className={finder(2)?exists(2)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">2</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(3)?selecter(3):notify()}}>
        <View  className={finder(3)?exists(3)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">3</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(4)?selecter(4):notify()}}>
        <View  className={finder(4)?exists(4)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">4</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(5)?selecter(5):notify()}}>
        <View  className={finder(5)?exists(5)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">5</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(6)?selecter(6):notify()}}>
        <View  className={finder(6)?exists(6)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">6</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(7)?selecter(7):notify()}}>
        <View  className={finder(7)?exists(7)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">7</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(8)?selecter(8):notify()}}>
        <View  className={finder(8)?exists(8)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">8</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(9)?selecter(9):notify()}}>
        <View  className={finder(9)?exists(9)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">9</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(10)?selecter(10):notify()}}>
        <View  className={finder(10)?exists(10)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">10</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(11)?selecter(11):notify()}}>
        <View  className={finder(11)?exists(11)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">11</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(12)?selecter(12):notify()}}>
        <View  className={finder(12)?exists(12)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">12</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(13)?selecter(13):notify()}}>
        <View  className={finder(13)?exists(13)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">13</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(14)?selecter(14):notify()}}>
        <View  className={finder(14)?exists(14)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">14</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(15)?selecter(15):notify()}}>
        <View  className={finder(15)?exists(15)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">15</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(16)?selecter(16):notify()}}>
        <View  className={finder(16)?exists(16)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">16</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(17)?selecter(17):notify()}}>
        <View  className={finder(17)?exists(17)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">17</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(18)?selecter(18):notify()}}>
        <View  className={finder(18)?exists(18)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">18</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(19)?selecter(19):notify()}}>
        <View  className={finder(19)?exists(19)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">19</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(20)?selecter(20):notify()}}>
        <View  className={finder(20)?exists(20)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">20</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(21)?selecter(21):notify()}}>
        <View  className={finder(21)?exists(21)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">21</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(22)?selecter(22):notify()}}>
        <View  className={finder(22)?exists(22)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">22</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(23)?selecter(23):notify()}}>
        <View  className={finder(23)?exists(23)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">23</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(24)?selecter(24):notify()}}>
        <View  className={finder(24)?exists(24)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">24</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(25)?selecter(25):notify()}}>
        <View  className={finder(25)?exists(25)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">25</Text></View>
        </TouchableOpacity>
        </View>
  </ScrollView>
        </View>
        <View style={{flex: 1}}>
        <ScrollView className=" ml-4 py-4" >
     <Text className="font-bold mb-4">
            {time} {date}
        </Text>
        <View className="flex-row">
        </View>
        <View className="flex-row mt-10">
        <TouchableOpacity onPress={()=>{finder(26)?selecter(26):notify()}}>
        <View  className={finder(26)?exists(26)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">26</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(27)?selecter(27):notify()}}>
        <View  className={finder(27)?exists(27)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">27</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(28)?selecter(28):notify()}}>
        <View  className={finder(28)?exists(28)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">28</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(29)?selecter(29):notify()}}>
        <View  className={finder(29)?exists(29)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">29</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(30)?selecter(30):notify()}}>
        <View  className={finder(30)?exists(30)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">30</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(31)?selecter(31):notify()}}>
        <View  className={finder(31)?exists(31)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">31</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(32)?selecter(32):notify()}}>
        <View  className={finder(32)?exists(32)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">32</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(33)?selecter(33):notify()}}>
        <View  className={finder(33)?exists(33)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">33</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(34)?selecter(34):notify()}}>
        <View  className={finder(34)?exists(34)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">34</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(35)?selecter(35):notify()}}>
        <View  className={finder(35)?exists(35)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">35</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(36)?selecter(36):notify()}}>
        <View  className={finder(36)?exists(36)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">36</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(37)?selecter(37):notify()}}>
        <View  className={finder(37)?exists(37)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">37</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(38)?selecter(38):notify()}}>
        <View  className={finder(38)?exists(38)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">38</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(39)?selecter(39):notify()}}>
        <View  className={finder(39)?exists(39)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">39</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(40)?selecter(40):notify()}}>
        <View  className={finder(40)?exists(40)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">40</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(41)?selecter(41):notify()}}>
        <View  className={finder(41)?exists(41)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">41</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(42)?selecter(42):notify()}}>
        <View  className={finder(42)?exists(42)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">42</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(43)?selecter(43):notify()}}>
        <View  className={finder(43)?exists(43)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">43</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(44)?selecter(44):notify()}}>
        <View  className={finder(44)?exists(44)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">44</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(45)?selecter(45):notify()}}>
        <View  className={finder(45)?exists(45)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">45</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(46)?selecter(46):notify()}}>
        <View  className={finder(46)?exists(46)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">46</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(47)?selecter(47):notify()}}>
        <View  className={finder(47)?exists(47)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">47</Text></View>
        </TouchableOpacity>
        </View>
        <View className="flex-row mt-2">
        <TouchableOpacity onPress={()=>{finder(48)?selecter(48):notify()}}>
        <View  className={finder(48)?exists(48)?"w-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">48</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{finder(49)?selecter(49):notify()}}>
        <View  className={finder(49)?exists(49)?"w-8 ml-8 h-8 rounded-sm  bg-green-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm  bg-blue-500 justify-center items-center ":"w-8 h-8 ml-8 rounded-sm bg-gray-300 justify-center items-center"}><Text className="">49</Text></View>
        </TouchableOpacity>
        </View>
  </ScrollView>
        </View>


</View>

<TouchableOpacity onPress={()=>{book()}} className=" rounded-sm bg-blue-500 ml-4 mr-16 py-2 justify-center items-center mb-2">
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
