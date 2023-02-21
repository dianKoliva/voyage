import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import NavigationStack from './src/routes/NavigationStack';
import { Provider } from 'react-redux';
// import { store } from './src/redux/store';

export default function App() {
  return (
    // <Provider store={store}>
    <TailwindProvider>
    <View style="" className="flex-1 " >
     <StatusBar style="auto" />
  <NavigationStack></NavigationStack>
    </View>
    </TailwindProvider>
    // </Provider>
  );
}



