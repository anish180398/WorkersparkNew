import React, { useEffect, useState }from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { Provider as PaperProvider } from 'react-native-paper';
import store from './src/state/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import WalkthroughScreens from './src/screens/WalkthroughScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefaultTheme } from 'react-native-paper';

const App = () => {

  const [showWalkthrough, setShowWalkthrough] = useState(false);
  useEffect(() => {
    const checkFirstTime = async () => {
      const isFirstTime = await AsyncStorage.getItem('firstTime');
      if (isFirstTime === null) {
        setShowWalkthrough(true);
      }
    };

    checkFirstTime();
  }, []);
  const theme = {
    ...DefaultTheme,
    // Customize your theme here
    colors: {
      ...DefaultTheme.colors,
      primary: '#6200ee',
      accent: '#03dac4',
    },
  };
  const handleDone = async () => {
    await AsyncStorage.setItem('firstTime', 'no');
    setShowWalkthrough(false);
  };
  return (
    <StoreProvider store={store}>
            <PaperProvider theme={theme}>

      <SafeAreaProvider>
        <NavigationContainer>
          {showWalkthrough ? <WalkthroughScreens onDone={handleDone} /> : <RootNavigator />}
        </NavigationContainer>
      </SafeAreaProvider>
      </PaperProvider>

    </StoreProvider>
  );
};

export default App;
