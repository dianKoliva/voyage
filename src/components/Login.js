import { View, Text, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, 
  Dimensions,
  Keyboard, ImageBackground, Image,Alert} from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { login } from '../functions/api';
import { useDispatch } from "react-redux";
import { authenticate } from "../store/reducers";
import * as yup from 'yup';
import { fonts } from "../utils/fonts";
const loginSchema= yup.object({
  name:yup.string()
  .min(3),
  password:yup.string()
  .required()
  .min(8),
})
const Login = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <ImageBackground source={require("../../public/images/1.png")} className="flex-1 justify-center ">
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View  >
      <View className="bg-white px-6 py-6">
  
      <Text  className="pb-8 text-center relative text-2xl font-bold text-black" style={[ fonts.dmSansBold]}>Voyage</Text>   
<Formik initialValues={{name:'',password:''}}
validationSchema={loginSchema}
onSubmit={(values,actions)=>{
  actions.resetForm();
login(values.name,values.password).then((res) => {
  if(res.success){
    dispatch(authenticate({ token: res.token, user: res.user }));
  }
  else{
    Alert.alert(
      "Voyage",
      "Invalid credentials",
      [
        {
          text: "OK",
        },
      ],
      { cancelable: false }
    );
  }

})
.catch((err) => console.log(err));
}}
>
{(props)=>(

<View>
<TextInput
style={[ fonts.dmSansRegular]}
value={props.values.name}
className="border-b-[1px] border-solid border-black focus:border-blue-500 "
placeholder='username' onChangeText={props.handleChange('name')}
onBlur={props.handleBlur('name')}
/>
<Text  className="text-red-400">{ props.touched.name && props.errors.name}</Text>
 <TextInput
 style={[ fonts.dmSansRegular]}
 onBlur={props.handleBlur('password')}
value={props.values.password}
className="mt-2 border-b-[1px] border-solid border-black focus:border-blue-500 "
placeholder='password' onChangeText={props.handleChange('password')}/>

<Text className="text-red-400" style={[ fonts.dmSansRegular]}>{ props.touched.password && props.errors.password}</Text>
<Text className="text-right mb-3 text-gray-400 " style={[ fonts.dmSansRegular]}>Forgot password?</Text>
<TouchableOpacity   onPress={props.handleSubmit} className="bg-blue-500 py-3  items-center mt-2 ">
<Text className=" text-white" style={[ fonts.dmSansRegular]} >
Sign In
</Text>
</TouchableOpacity>
<TouchableOpacity  className="bg-white shadow-xl py-3  items-center mt-3 ">
  <View className=" flex-row ">
   
<Image className="h-8 w-8  -left-8"source={require('../../public/images/go.png')}></Image>
  <Text  className=" mt-1" style={[ fonts.dmSansRegular]} >

Sign in with google
</Text>


  </View>

</TouchableOpacity>
<View className=" flex-row-reverse">
  <Text className="mt-4 underline text-blue-500 " onPress={()=> navigation.navigate('Signup')} style={[ fonts.dmSansMedium]}> Sign up</Text>
  <Text className="mt-4 " style={[ fonts.dmSansRegular]}>Don't have an account?</Text>
  </View>


</View>

)}
</Formik>
      </View>
    </View>

    </TouchableWithoutFeedback>
    </ImageBackground>
  )
}

export default Login