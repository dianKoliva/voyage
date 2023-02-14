import { createStackNavigator } from "react-navigation-stack";
import Login from "../Login";
import SignUp from "../SignUp";
import { createAppContainer } from "react-navigation";

const screens={
    Login:{
        screen:Login,
        navigationOptions:{
            headerShown: false,
            title:"Login",
            // headerStyle:{BackgroundColor:"pink"}
        }

    },
Signup:{
    
    screen:SignUp,
    navigationOptions:{
        headerShown: false,
        title:"Signup",
       
    },
 
}
}

const HomeStack=createStackNavigator(screens,   {

 
});
export default createAppContainer(HomeStack);