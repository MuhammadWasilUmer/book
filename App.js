import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from './components/Navbar'; // Your bottom tab navigator
import LoginScreen from './components/LoginScreen'; // Make sure this path is correct
import RegisterScreen from './components/RegisterScreen'; // Make sure this path is correct
import BookingForm from './screens/BookingForm';
import ProfileScreen from './components/ProfileScreen';
import TravelHistory from './components/TravelHistory';
import AlreadyLoggedInScreen from './components/AlreadyLoggedInScreen'; 
import Logout from './components/Logout';
import ForgetPassword from './components/ForgetPassword';
import ChangePassword from './components/ChangePassword';
import DeleteAccount from './components/DeleteAccount';
import Admin from './components/Admin';
import AddFlight from './components/AddFlight';

import ModifyAvailableFlights from './components/ModifyAvailableFlights';
import RegisteredUsers from './components/RegisteredUsers';
import UsersBookings from './components/UsersBookings';
import EditFlights from './components/EditFlights';

import FirstClass from './screens/FirstClass';
import BusinessClass from './screens/BusinessClass';
import EconomyClass from './screens/EconomyClass';
import OnboardLounge from './screens/OnboardLounge';
import ShowerSpa from './screens/ShowerSpa';
import ExploreCountries from './screens/ExploreCountries';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Navbar} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="BookingForm" component={BookingForm} />
           <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
           <Stack.Screen name="TravelHistory" component={TravelHistory} />
           <Stack.Screen name="AlreadyLoggedInScreen" component={AlreadyLoggedInScreen} />
            <Stack.Screen name="Logout" component={Logout} />
             <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
             <Stack.Screen name="ChangePassword" component={ChangePassword} />
              <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
               <Stack.Screen name="Admin" component={Admin} />
               <Stack.Screen name="AddFlight" component={AddFlight} />
                <Stack.Screen name="ModifyAvailableFlights" component={ModifyAvailableFlights} />
                <Stack.Screen name="RegisteredUsers" component={RegisteredUsers} />
                <Stack.Screen name="UsersBookings" component={UsersBookings} />
                 <Stack.Screen name="EditFlights" component={EditFlights} />

                 <Stack.Screen name="FirstClass" component={FirstClass} />
                 <Stack.Screen name="BusinessClass" component={BusinessClass} />
                 <Stack.Screen name="EconomyClass" component={EconomyClass} />
                 <Stack.Screen name="OnboardLounge" component={OnboardLounge} />
                 <Stack.Screen name="ShowerSpa" component={ShowerSpa} />
                 <Stack.Screen name="ExploreCountries" component={ExploreCountries} />


            
      </Stack.Navigator>
      
      
    </NavigationContainer>
  );
}
