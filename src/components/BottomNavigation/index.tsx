import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../../screens/LoginScreen';
import HomeScreen from '../../screens/HomeScreen';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../styles/colors';
import ProfileScreen from '../../screens/ProfileScreen';

const BottomNavigation: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.base,
        inactiveTintColor: colors.white,
        style: {
          backgroundColor: colors.slate,
        },
        labelStyle: {
          fontSize: 11,
        },
      }}>
      <Tab.Screen
        name="PROCESSOS"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return <Icon name={'folder'} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="PERFIL"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return <Icon name={'user'} size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
