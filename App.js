import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeStack from './src/routes/HomeStack';
import Destination from './src/components/Destination';
import Available from './src/components/Available';
import Ticket from './src/components/Ticket';
import Seats from './src/components/Seats';
import NavigationStack from './src/routes/NavigationStack';

export default function App() {
  return (
    <TailwindProvider>
    <View style="" className="flex-1 " >
     <StatusBar style="auto" />
     <NavigationStack/>
     {/* <Seats></Seats> */}
     {/* <Ticket></Ticket> */}
{/* <Available/> */}
{/* <Destination/> */}
   {/* <HomeStack></HomeStack> */}
    </View>
    </TailwindProvider>
  );
}



