import { View, Text,StatusBar} from 'react-native'
import React from 'react'
import { useSelector } from "react-redux";
import Homestack from './routes/HomeStack'
import NavigationStack from './routes/NavigationStack'
import { TailwindProvider } from 'tailwindcss-react-native'

const Main = () => {
    const{isAuth}=useSelector((state) => state.app)
    
  return (
    <TailwindProvider>
    <View style="" className="flex-1 " >
     <StatusBar style="auto" />
     {!isAuth ? <Homestack/> : <NavigationStack />}
   
    </View>
    </TailwindProvider>
  )
}

export default Main