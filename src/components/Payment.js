import { View, Text,Image,Keyboard, TouchableOpacity,StyleSheet,TouchableWithoutFeedback} from 'react-native'
import React,{useState,useRef} from 'react'
import PhoneInput from 'react-native-phone-number-input';


const Payment = ({navigation}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const phoneInput = useRef(null);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View>
      <Text className="font-bold  mt-4 ml-2">CHOOSE PAYMENT METHOD</Text>

<TouchableOpacity>
      <View className="w-full  flex-row items-center pl-6 shadow-lg py-4 mt-4 ">
      <Image className=" w-24 h-16 "source={require('../../public/images/momo.png')}></Image>
      <Text className="ml-10 font-bold ">Mobile Money</Text>
      </View>
      <View>

      </View>
      </TouchableOpacity>
      <View  className="mt-8 px-4" >
      <PhoneInput
      className=" h-8"
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="RW"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styles.phoneNumberView}
        textContainerStyle={{ paddingVertical: 0 }}
        onChangeFormattedText={text => {
          setPhoneNumber(text);
        }}
      />
      </View>

      <TouchableOpacity  className="mt-8  items-center py-4  mx-4 bg-blue-500"  onPress={()=>{navigation.navigate('Ticket')}}>
        <Text className="text-white font-bold " >Make Payment</Text>
      </TouchableOpacity >   
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles=StyleSheet.create({
    phoneNumberView: {
        width: '100%',
        height: 50,
        backgroundColor: 'white'
      },  
})

export default Payment