import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Home from './src/SignUp';
import HomeStack from './src/routes/HomeStack';

export default function App() {
  return (
    <TailwindProvider>
    <View style="" className="flex-1 " >
     <StatusBar style="auto" />


   <HomeStack></HomeStack>
    </View>
    </TailwindProvider>
  );
}



