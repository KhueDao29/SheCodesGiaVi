import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Prompt from './assets/pages/ml/prompt';
import Home from './assets/pages/home/home';
import Profile from './assets/pages/personal/screen';

import Dashboard from './assets/pages/dashboard/dashboard';
import Login from './assets/pages/login/login'
import Regist from './assets/pages/registration/registration';
import Message from './assets/pages/message/message';

const Stack = createNativeStackNavigator();

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}


function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Thông Báo</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="AI"
      screenOptions={{
        tabBarActiveTintColor: '#ff9052',
      }}
    >
      <Tab.Screen
        name="Trang chủ"
        component={Message}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Công cụ AI"
        component={Prompt}
        options={{
          tabBarLabel: 'Một từ thật hay',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="auto-fix" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={Notifications}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cá nhân"
        component={Profile}
        options={{
          tabBarLabel: 'Cá nhân',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        {/* <Stack.Navigator> */}
            {/* { <Stack.Screen name = "Login" component={Login}/>} */}
            {/* <Stack.Screen name = "Regist" component={Regist}/> */}
        {/* </Stack.Navigator> */}
        <MyTabs />
    </NavigationContainer>
  );
}
