import React from 'react';
import { BaseNavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import { Provider } from 'react-redux';
import './configs/ReactotronConfig';
import store from './src/store';
import FlashMessage from 'react-native-flash-message';
import CoreScreen from './src/screens/CoreScreen';
import CaseDetailScreen from './src/screens/CaseDetailScreen';
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
          <Stack.Screen
            name="caseDetail"
            component={CaseDetailScreen}
            options={{ title: 'Processo', headerBackTitleVisible: false }}
          />
        </Stack.Navigator>
      </BaseNavigationContainer>
      <FlashMessage position="top" />
    </Provider>
  );
};

export default RootNavigation;
