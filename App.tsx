import React from 'react';
import { BaseNavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import { Provider } from 'react-redux';
import './configs/ReactotronConfig';
import HomeScreen from './src/screens/HomeScreen';
import store from './src/store';
import FlashMessage from 'react-native-flash-message';
import CoreScreen from './src/screens/CoreScreen';
import ProfileScreen from './src/screens/ProfileScreen';
const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Provider store={store}>
      <BaseNavigationContainer>
        <Stack.Navigator initialRouteName="loginScreen">
          <Stack.Screen
            name="loginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="coreScreen"
            component={CoreScreen}
            options={{
              headerBackImage: () => null,
              title: '',
              headerTransparent: true,
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="profileScreen"
            component={ProfileScreen}
            options={{
              headerBackImage: () => null,
              title: '',
              headerTransparent: true,
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </BaseNavigationContainer>
      <FlashMessage position="top" />
    </Provider>
  );
};

export default RootNavigation;
