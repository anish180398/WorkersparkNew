import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import AgentBioScreen from '../screens/AgentBioScreen';
import React from 'react'; // This import is necessary for JSX

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeStackHome" component={HomeScreen} />
      <HomeStack.Screen name="Category" component={CategoryScreen} />
      <HomeStack.Screen name="AgentBio" component={AgentBioScreen} options={{ headerShown: true, title: 'Agent Bio' }} />

    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
