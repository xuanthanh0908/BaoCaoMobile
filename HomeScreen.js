import React,{Component} from "react";
import { StatusBar } from 'expo-status-bar';
import {Dimensions, Image, ScrollView, StyleSheet,Text, TextInput, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import HomeScreenSection from "../Component/HomeSceenComponet";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from '../Screen/DetailScreen'
const img_1 = require('../assets/item_image_1.png');
const img_2 = require('../assets/item_image_2.png');
const img_3 = require('../assets/item_image_3.png');
const img_4 = require('../assets/item_image_4.png');


export default HomeScreen = ({navigation})=>{
    const PropsPhone = {
        img1 : img_1,
        img2 : img_1,
        img3 : img_3,
        img4 : img_4,
        img5 : img_2,
        img6 : img_1,
        img7 : img_3,
        img8 : img_4,
    
        p1  : '799.000 đ',
        p2  : '699.000 đ',
        p3 : '699.000 đ',
        p4 : '699.000 đ',
        p5 : '699.000 đ',
        p6 : '699.000 đ',
        p7 : '699.000 đ',
        p8 : '699.000 đ',
    
        n1 : 'Iphone 7s plus phiên bản giới hạn',
        n2 : 'Iphone 8s plus phiên bản giới hạn',
        n3 : 'Iphone 9s plus phiên bản giới hạn',
        n4 : 'Iphone 6s plus phiên bản giới hạn',
        n5 : 'Iphone 6s plus phiên bản giới hạn',
        n6 : 'Iphone 6s plus phiên bản giới hạn',
        n7 : 'Iphone 6s plus phiên bản giới hạn',
        n8 : 'Iphone 6s plus phiên bản giới hạn',
        Navigation : navigation
    }
       return(
        <View style = {styles.container}>
        <StatusBar barStyle = 'light-content'/>
        <ScrollView >
            <View style = {styles.Header}>
                    <FontAwesome5 style = {styles.searchIcon} name="search" size={24} color="#969696" />
                    <TextInput style = {styles.SearchInput} placeholder = 'Bạn tìm gì hôm nay'/>
                    <FontAwesome5 style = {{marginLeft : 10}} name="shopping-cart" size={24} color="#fff" />
            </View>
            <View style = {styles.BodyContainer}>
                <HomeScreenSection 
                    {...PropsPhone}
                    {...navigation}
                />
                <HomeScreenSection 
                    {...PropsPhone}
                    {...navigation}
                />
            </View>
        </ScrollView>

        </View>
       )
}
const styles = StyleSheet.create({
    container : {
       backgroundColor : '#fff'
    },
    Header :{
        height : 100,
        backgroundColor : '#1e88e5',
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems :'center',
        paddingTop : 25,
    },
    SearchInput :{
        borderWidth : 1,
        borderColor : '#eee',
        width : '80%',
        textAlign : 'center',
        padding : 5,
        height : 40,
        backgroundColor : '#fff'
    },
    searchIcon : {
        position : 'relative',
        top : 0,
        left : 35,
        zIndex : 2
    },
    BodyContainer :{
        padding : 10
    },
}
)