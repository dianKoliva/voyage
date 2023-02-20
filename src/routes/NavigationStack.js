import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Destination from "../components/Destination";
import Available from "../components/Available";
import Seats from "../components/Seats";
import Ticket from "../components/Ticket";
import Payment from "../components/Payment";

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
        title:"Search Results",
        headerTitleStyle: {
            color: 'white',
            fontSize:16
          },
     
       
    },
    
    },
Seats:{
    screen:Seats,
    navigationOptions:{
        title:"Seat Selection",
        headerTitleStyle: {
            color: 'white',
            fontSize:16
          },
     
    }
},
Payment:{
    screen:Payment,
    navigationOptions:{
        title:"Payment",
        headerTitleStyle: {
            color: 'white',
            fontSize:16
          },
     
    }
},
Ticket:{
    screen:Ticket,
    navigationOptions:{
        title:"Ticket Information",
        headerTitleStyle: {
            color: 'white',
            fontSize:16
          },
     
    }
},
}

const NavigationStack=createStackNavigator(screens,   {

    defaultNavigationOptions: {
        
        headerTintColor:"white",
        headerStyle:{backgroundColor:"hsl(217.20000000000005, 91.2%, 59.8%)",},
    }
});
export default createAppContainer(NavigationStack);