import { View, Text, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, 
  Keyboard, ImageBackground, Image } from 'react-native'
import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { Formik } from 'formik'
import * as yup from 'yup';
const loginSchema= yup.object({
  email:yup.string()
  .email()
  .min(11),
  password:yup.string()
  .required()
  .min(8),
})
const Login = ({navigation}) => {
  return (
    <ImageBackground source={require("../../public/images/1.png")} className="flex-1 justify-center ">
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View  >
    <Text  className="pb-8 text-center relative text-2xl font-bold text-black">Voyage</Text>   

      <View className="bg-white px-6 py-6">
  

<Formik initialValues={{email:'',password:''}}
validationSchema={loginSchema}
onSubmit={(values,actions)=>{
  actions.resetForm();
  console.log(values);
}}
>
{(props)=>(

<View>
<TextInput
value={props.values.email}
className=" border-b-[1.5px] border-solid border-black focus:border-blue-500 "
placeholder='email' onChangeText={props.handleChange('email')}
onBlur={props.handleBlur('email')}
/>
<Text  className="text-red-400">{ props.touched.email && props.errors.email}</Text>
 <TextInput
 onBlur={props.handleBlur('password')}
value={props.values.password}
className="mt-2 border-b-[1.5px] border-solid border-black focus:border-blue-500 "
placeholder='password' onChangeText={props.handleChange('password')}/>

<Text className="text-red-400">{ props.touched.password && props.errors.password}</Text>
<Text className="text-right mb-3 text-gray-400 ">Forgot password?</Text>
<TouchableOpacity   onPress={props.handleSubmit} className="bg-blue-500 py-3  items-center mt-2 ">
<Text className=" text-white" >
Sign In
</Text>
</TouchableOpacity>
<TouchableOpacity  className="bg-white shadow-xl py-3  items-center mt-3 ">
  <View className=" flex-row ">
   
<Image className="h-8 w-8  -left-8"source={require('../../public/images/go.png')}></Image>
  <Text  className=" mt-1" >

Sign in with google
</Text>


  </View>

</TouchableOpacity>
<View className=" flex-row-reverse">
  <Text className="mt-4 underline text-blue-500 " onPress={()=> navigation.navigate('Signup')}> Sign up</Text>
  <Text className="mt-4 ">Don't have an account?</Text>
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