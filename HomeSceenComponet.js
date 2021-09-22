import React ,{Component, useState} from "react";
import {AppState, Dimensions, Image, ScrollView, StyleSheet,Text, TextInput, View } from "react-native";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
const img_1 = require('../assets/item_image_1.png');
const img_2 = require('../assets/item_image_2.png');
const img_3 = require('../assets/item_image_3.png');
const img_4 = require('../assets/item_image_4.png');

const img_banner = require('../assets/section_banner.png');

const WindowHeight = Dimensions.get('window').height;
const WindowWidth = Dimensions.get('window').width;


const HomeScreenSection =({...PropsPhone})=>{
    const ProductItem = ({name,Img,Price})=>(
        <View style = {styles.SectionItem}>
            <TouchableOpacity activeOpacity ={0.8} onPress = {()=>PropsPhone.Navigation.navigate('Detail')}>
                <Image style = {styles.ItemIMG} source = {Img}/>
                <Text style ={styles.itemText} numberOfLines = {2}>{name}</Text>
                <Text style ={styles.ItemPrice}>{Price}</Text>
            </TouchableOpacity>
        </View>
    )
    const [AppState,ChangeState]= useState({
        activeObject : 0,
        Objects : [{id : 1},{id : 2},{id : 3},{id : 4}],
    });
    const [SectionState,ChangeSection] = useState({
        i1 : PropsPhone.img1,
        i2 : PropsPhone.img2,
        i3 : PropsPhone.img3,
        i4 : PropsPhone.img4,
        i5 : PropsPhone.img4,
        i6 : PropsPhone.img5,
        i7 : PropsPhone.img6,
        i8 : PropsPhone.img7,

        p1 : PropsPhone.p1,
        p2 : PropsPhone.p2,
        p3 : PropsPhone.p3,
        p4 : PropsPhone.p4,
        p5 : PropsPhone.p5,
        p6 : PropsPhone.p6,
        p7 : PropsPhone.p7,
        p8 : PropsPhone.p8,

        n1 : PropsPhone.n1,
        n2 : PropsPhone.n2,
        n3 : PropsPhone.n3,
        n4 : PropsPhone.n4,
        n5 : PropsPhone.n5,
        n6 : PropsPhone.n6,
        n7 : PropsPhone.n7,
        n8 : PropsPhone.n8,
        
    })

    function ChangeSelector(index) {
        if(index == 0)
        {
             ChangeSection({
                i1 : img_1,
                i2 : img_2,
                i3 : img_4,
                i4 : img_3,
                i5 : img_2,
                i6 : img_1,
                i7 : img_3,
                i8 : img_4,
        
                p1 : '699.000 đ',
                p2 : '699.000 đ',
                p3 : '699.000 đ',
                p4 : '699.000 đ',
                p5 : '699.000 đ',
                p6 : '699.000 đ',
                p7 : '699.000 đ',
                p8 : '699.000 đ',
        
                n1 : 'Iphone 6s plus bản đẹp',
                n2 : 'Iphone 6s plus bản đẹp',
                n3 : 'Iphone 6s plus bản đẹp',
                n4 : 'Iphone 6s plus bản đẹp',
                n5 : 'Iphone 6s plus bản đẹp',
                n6 : 'Iphone 6s plus bản đẹp',
                n7 : 'Iphone 6s plus bản đẹp',
                n8 : 'Iphone 6s plus bản đẹp',
        })}
        else if(index == 1)
        {
             ChangeSection({
                i1 : img_4,
                i2 : img_1,
                i3 : img_2,
                i4 : img_4,
                i5 : img_2,
                i6 : img_3,
                i7 : img_2,
                i8 : img_1,
        
                p1 : '799.000 đ',
                p2 : '899.000 đ',
                p3 : '999.000 đ',
                p4 : '299.000 đ',
                p5 : '399.000 đ',
                p6 : '499.000 đ',
                p7 : '799.000 đ',
                p8 : '699.000 đ',
        
                n1 : 'Iphone 9s plus bản đẹp',
                n2 : 'Iphone 8s plus bản đẹp',
                n3 : 'Iphone 7s plus bản đẹp',
                n4 : 'Iphone 6s plus bản đẹp',
                n5 : 'Iphone 5s plus bản đẹp',
                n6 : 'Iphone 4s plus bản đẹp',
                n7 : 'Iphone 3s plus bản đẹp',
                n8 : 'Iphone 2s plus bản đẹp',
        })}
    }
    function ToggleActive(index)
    {
        ChangeState({...AppState, activeObject : AppState.Objects[index]})
    }
    return(
        <View>
            <View style = {styles.sectionContainer}>
                    <Text style ={styles.sectionTitle}>Điện thoại - Máy tính bảng </Text>
                    <Image style ={styles.sectionIMG} source = {img_banner}/>
                </View>

                {/* ScrollView for ListTab */}
                <ScrollView horizontal = {true}>
                
                {
                    [
                        'Tất cả',
                        'Điện thoại SmartPhone',
                        'Máy tính bảng',
                        'Điện thoại'
                    ].map((e,index)=>(
                        <View key = {index.toString()}  style = {styles.ListTab}>
                                <TouchableOpacity 
                                    onPress = {()=>{
                                        ToggleActive(index)
                                        ChangeSelector(index)
                                    }}
                                >
                                    <Text  style = {(AppState.Objects[index]===AppState.activeObject || index  === AppState.activeObject) ?styles.FilterActive:styles.FilterInActive }>{e}</Text>
                                </TouchableOpacity>
                        </View>
                    ))
                }
            
            
                </ScrollView>
                {/* ListItemContainer */}
                <View style = {styles.ListItemContainer}>
                    <ScrollView horizontal = {true}>
                    {
                        [
                            {
                                image_1 : SectionState.i1,
                                name1 : SectionState.n1,
                                Price1 : SectionState.p1,
                                image_2 :SectionState.i2,
                                name2 : SectionState.n2,
                                Price2 : SectionState.p2
                            },
                            {
                                image_1 : SectionState.i3,
                                name1 : SectionState.n3,
                                Price1 : SectionState.p3,
                                image_2 :SectionState.i4,
                                name2 : SectionState.n4,
                                Price2 : SectionState.p4
                            },
                            {
                                image_1 : SectionState.i5,
                                name1 : SectionState.n5,
                                Price1 : SectionState.p5,
                                image_2 :SectionState.i6,
                                name2 : SectionState.n6,
                                Price2 : SectionState.p6
                            },
                            {
                                image_1 : SectionState.i7,
                                name1 : SectionState.n7,
                                Price1 : SectionState.p7,
                                image_2 :SectionState.i8,
                                name2 : SectionState.n8,
                                Price2 : SectionState.p8
                        },
                        ].map((e,index)=>(
                            <View key ={index.toString()}>
                                <ProductItem
                                    name = {e.name1}
                                    Img = {e.image_1}
                                    Price = {e.Price1}
                                    
                                />
                                <ProductItem
                                    name = {e.name2}
                                    Img = {e.image_2}
                                    Price = {e.Price2}
                                />
                        </View>
                        ))
                    }
                    
                    
                        
                    </ScrollView>
                </View>
                <View style = {styles.sectionSeemore}>
                        <TouchableOpacity activeOpacity = {0.6}>
                            <Text style = {styles.TextSeeMore}>XEM TẤT CẢ 636 SẢN PHẨM</Text>
                        </TouchableOpacity>
                </View>
        </View>
    )
}
export default HomeScreenSection;
const styles = StyleSheet.create({
    container : {
       backgroundColor : '#fff'
    },
    sectionTitle : {
        fontSize : 20,
        fontWeight : 'bold',
        marginVertical : 10
    },
    sectionIMG :{
        height : 130,
        borderRadius : 4,
        resizeMode : "stretch",
        width : WindowWidth - 20,
    },
    ListItemContainer : {
        flexDirection : 'row'
    },
    SectionItem :{
        width :100,
        marginRight : 10,
        marginVertical : 5
    },
    itemText : {
        fontSize: 14,
        color: '#484848',
        marginVertical: 4,
    },
    ItemPrice : {
        fontSize: 16,
        fontWeight: '500',
        color: '#2a2a2a',
    },
    ItemIMG : {
        width: 100,
        height: 120,
    },
    ListTab : {
        marginVertical : 10,
        flexDirection : 'row'
    },
    FilterActive : {
        borderWidth : 1,
        borderColor : '#5a5a5a',
        borderRadius : 4,
        backgroundColor : 'black',
        color : '#fff',
        paddingVertical : 5,
        paddingHorizontal : 10,
        marginRight : 10
    },
    FilterInActive : {
        borderRadius : 4,
        borderWidth : 1,
        borderColor : '#5a5a5a',
        backgroundColor : '#fff',
        color : 'black',
        paddingVertical : 5,
        paddingHorizontal : 10,
        marginRight : 10
    },
    sectionSeemore :{
        marginTop : 20,
        alignItems : 'center',
        borderTopColor : '#ededed',
        borderTopWidth : 0.7,
        padding : 12,
    },
    TextSeeMore :{
        color : '#0e45b4',
        fontSize : 17,
    }
}
)