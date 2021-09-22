import React,{Component} from "react";
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../Screen/ProfileScreen';
import CartScreen from "../Screen/CartScreen";
const HomeStack = createStackNavigator();

export default function TabProfile()
{
    return(
        <HomeStack.Navigator screenOptions = {{headerShown : false }} >
            <HomeStack.Screen name = 'Home' component = {ProfileScreen}></HomeStack.Screen>
            <HomeStack.Screen name = 'CartScreen' component = {CartScreen}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}