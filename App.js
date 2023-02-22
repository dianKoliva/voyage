import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import NavigationStack from './src/routes/NavigationStack';
import { Provider } from 'react-redux';
import Homestack  from "./src/routes/HomeStack"
import store from "./src/store";
import Main from './src/Main';
import {
  useFonts,
  DMSans_400Regular,
  DMSans_700Bold,
  DMSans_500Medium,
} from "@expo-google-fonts/dm-sans";
import { ActivityIndicator } from "react-native";


export default function App() {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_700Bold,
    DMSans_500Medium,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}



