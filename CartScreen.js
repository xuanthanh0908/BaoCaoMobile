import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View,Text,StyleSheet } from "react-native";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CartComponent from '../Component/CartComponent'
const Tabs = createMaterialTopTabNavigator();
const repurchase = () =>{
    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}
const TabTop = ()=>(
    <Tabs.Navigator >
        <Tabs.Screen name = 'CartAll' component = {CartComponent}></Tabs.Screen>
        <Tabs.Screen name = 'Repurchase' component = {repurchase}></Tabs.Screen>
    </Tabs.Navigator>
)
export default function CartScreen()
{
    return(
        <View>
            <CartComponent/>
            <TabTop />
        </View>
    )
}
const styles = StyleSheet.create({
    
})