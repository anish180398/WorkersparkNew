import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FindScreen from '../screens/FindScreen';
import { Ionicons } from '@expo/vector-icons';
import HomeStackNavigator from './HomeStackNavigator'; // Import the stack navigator

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        height: 80,
        paddingHorizontal: 5,
        paddingTop: 0,
        backgroundColor: '#032873',
        position: 'absolute',
        borderTopWidth: 0,
    },
    tabBarLabelStyle:{
      color: '#fff'
    },
    tabBarActiveTintColor:'#000'
  })}>
    <Tab.Screen name="Home" component={HomeStackNavigator} options={{
   
      tabBarIcon: () => (
        <Ionicons name="home" color={'#fff'} size={30} />
      ),
    }}/>
    <Tab.Screen name="Explore" component={FindScreen} options={{
     
      tabBarIcon: () => (
        <Ionicons name="search" color={'#fff'} size={30} />
      ),
    }} />
    <Tab.Screen name="Favourites" component={HomeScreen} options={{
 
      tabBarIcon: () => (
        <Ionicons name="heart" color={'#fff'} size={30} />
      ),
    }} />
    <Tab.Screen name="Settings" component={HomeScreen} options={{

      tabBarIcon: () => (
        <Ionicons name="settings" color={'#fff'} size={30} />
      ),
    }}/>


    {/* ... other tab screens */}
  </Tab.Navigator>
  );
};

export default AppNavigator;
