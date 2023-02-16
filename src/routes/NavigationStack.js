import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Destination from "../components/Destination";
import Available from "../components/Available";
import Seats from "../components/Seats";
import Ticket from "../components/Ticket";

const screens={
   Destination:{
        screen:Destination,
        navigationOptions:{ 
            title:"Le Voyage",
            headerShown: false,
          
        }

    },
Available:{
    screen:Available,
    navigationOptions:{
        title:"Bus Search Results",
      
    }
    },
Seats:{
    screen:Seats,
    navigationOptions:{
        title:"Seat Selection",
    }
},
Ticket:{
    screen:Ticket,
    navigationOptions:{
        title:"Ticket Information",
    }
},
}

const NavigationStack=createStackNavigator(screens,   {

    defaultNavigationOptions: {
        
        headerTintColor:"#444",
        headerStyle:{backgroundColor:"hsl(217.20000000000005, 91.2%, 59.8%)"},
    }
});
export default createAppContainer(NavigationStack);