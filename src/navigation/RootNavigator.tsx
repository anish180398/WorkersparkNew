import React from 'react';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

// Define the structure of the user part of the state
interface UserState {
  isAuthenticated: boolean;
}

// Define the overall structure of the Redux state
interface RootState {
  user: UserState;
}
const RootNavigator = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuthenticated); // Replace with your actual authentication state logic

  return isAuth ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
