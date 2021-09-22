import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screen/HomeScreen'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'; 
import TabHome from './TabScreen/TabHome';
import TabNotify from './TabScreen/TabNotify';
import TabProfile from './TabScreen/TabProfile';
const Tab = createBottomTabNavigator();


export default function App() {
  return ( 
    <NavigationContainer independent = {true}>
        <Tab.Navigator
          screenOptions  = {{
              tabBarLabelStyle : {
                color : 'black',
                fontSize : 14
              },
              tabBarActiveTintColor : '#157cdb',
              tabBarInactiveTintColor : '#262626',
              headerShown : false,
          }}
        >
          {/* HOME */}
          <Tab.Screen 
            name = 'Home' 
            component = {TabHome} 
            options = {{
              tabBarLabel : 'Trang chủ',
              tabBarIcon : ({color})=><MaterialIcons name="home" size={24} color={color} />
            }}  
          ></Tab.Screen>
          {/*  */}

          {/* Profile */}
          <Tab.Screen 
            name = 'Profile' 
            component = {TabProfile}
            options = {{
              tabBarLabel : 'Cá nhân',
              tabBarIcon : ({color})=><MaterialIcons name="person" size={24} color={color} />
            }}
          ></Tab.Screen>
          {/* Notify Screen */}
          <Tab.Screen 
            name = 'Notify' 
            component = {TabNotify}
            options = {{
              tabBarLabel : 'Thông báo',
              tabBarIcon : ({color})=><MaterialIcons name="notifications-none" size={24} color={color} />
            }}
          ></Tab.Screen>
        </Tab.Navigator>
        
        {/*  */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#fff',

  },
});