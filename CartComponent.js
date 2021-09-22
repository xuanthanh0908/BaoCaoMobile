import React, { useState } from "react";
import { View,Text,StyleSheet, CheckBox,Image,Picker,Switch } from "react-native";
import HeaderComponent from '../Component/HeaderComponent';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Label, {Orientation} from "react-native-label"; // Ribbon

const img_1 = require('../assets/iphoneImg1.jpg');
const img_2 = require('../assets/iphoneImg2.jpg');

const ProductItem = ({name,Img,Price,Sold})=>(
    <View style = {styles.SectionItem}>
        <TouchableOpacity activeOpacity ={0.8} >
            <View >
                <Label
                    orientation={Orientation.TOP_LEFT}
                    containerStyle={{
                        height : 250,
                        width : 180,
                    }}
                    title="Giảm 60%"
                    color="orange"
                    distance={80}
                    style = {
                        {
                            fontSize: 15, 
                            color: 'white', textAlign: 'center', 
                            alignItems: 'center', 
                            justifyContent: 'center'}
                    }
                    shadowProps= {
                        {
                            shadowColor: "#000", 
                            shadowOffset: { width: 1, height: 20, }, 
                            shadowOpacity: 1, 
                            shadowRadius: 10, 
                            elevation: 30
                        }
                    }
                >
                    <Image style = {styles.IMGProduct} source = {Img}/>
                </Label>
            </View>
            <Text style ={styles.itemText} numberOfLines = {2}>{name}</Text>
            <View style = {styles.ViewSee}>
                <Text style ={styles.ItemPrice}>{Price}</Text>
                <Text style ={styles.ItemSold}>{Sold}</Text>
            </View>
        </TouchableOpacity>
    </View>
)
const Item = ({Name,Price,IMG})=>{
    const [selectedValue, setSelectedValue] = useState("Iphone 6s plus xám");
    const [Count,SetCount] = useState(0);
    const [isSelected, setSelection] = useState(false);
    return(
        <View style = {styles.ItemContainer} >
            <View style = {styles.HeaderItem}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    tintColors={{ true: Color, false: 'black' }}
                />
                <Text style = {styles.TextLove}>Yêu thích</Text>
                <Text style = {styles.TextName}>Cửa hàng A</Text>
                <View style = {{flex : 1}}></View>
                <TouchableOpacity>
                    <Text style = {styles.TextEdit}>Sửa</Text>
                </TouchableOpacity>
            </View>
            <View style = {{flexDirection :'row',paddingHorizontal : 10,paddingVertical : 10}}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    tintColors={{ true: Color, false: 'black' }}
                />
                <View style = {styles.ItemIMGContainer}>
                    <Image style = {styles.ItemIMG} source = {IMG} />
                </View>
                <View style = {styles.ItemContent}>
                    <Text style = {styles.PhoneName}>{Name}</Text>
                    <View style = {styles.SelectPicker}>
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Iphone 6s plus đỏ" value ="đỏ" />
                            <Picker.Item label="Iphone 6s plus vàng" value="vàng" />
                        </Picker>
                    </View>
                    <View style = {styles.TextContainer}>
                        <Text style = {styles.TextPrice}>{Price}</Text>
                    </View>
                    <View style = {styles.Button}>
                        <TouchableOpacity onPress = {()=>Count >=1 && SetCount(Count - 1)}>
                            <Text style = {{fontSize : 18,fontWeight : 'bold',paddingRight : 10}}>-</Text>
                        </TouchableOpacity>
                        <Text style = {styles.TextCount}>{Count}</Text>
                        <TouchableOpacity onPress = {()=>SetCount(Count + 1)}>
                            <Text style = {{fontSize : 18,fontWeight : 'bold',paddingLeft : 10}}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default function CartComponent({navigation})
{
    const [selectedIndex,SetSelectIndex] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false);
    const [isSelected, setSelection] = useState(false);
    return(
        <View style = {styles.Container}>
            <View style = {styles.Header}>
                <HeaderComponent title = 'Giỏ hàng'/>
            </View>
            <View style = {styles.BodyContainer}>
                    <View style = {styles.BodyHeader}>
                        <FontAwesome5 name="shipping-fast" size={30} color = {Color} />
                        <Text style = {styles.TextFree}>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé</Text>
                    </View>
                    <View style = {styles.Tabs}>
                        <SegmentedControlTab
                            values = {['Tất cả', 'Mua lại   ']}
                            selectedIndex = {selectedIndex}
                            onTabPress = {index => SetSelectIndex(index)}
                            tabTextStyle = {
                                {
                                    fontSize : 15,
                                    fontWeight : '600'
                                }
                            }
                        />
                    </View>
                    <ScrollView>
                        <View style = {styles.ListItem}>
                            <View >                  
                                <View style = {styles.BodyItem}>
                                    <ScrollView style = {{height : 400}}>
                                        <Item 
                                            Name = 'Iphone 6s plus phiên bản đặc biệt'
                                            Price  = '699.000 đ'
                                            IMG = {img_1}
                                        />
                                        <View style = {styles.Divide}></View>
                                        <Item 
                                            Name = 'Iphone 7s plus phiên bản đặc biệt'
                                            Price  = '999.000 đ'
                                            IMG = {img_2}
                                        />
                                        <View style = {styles.Divide}></View>
                                        <Item 
                                            Name = 'Iphone 7s plus phiên bản đặc biệt'
                                            Price  = '999.000 đ'
                                            IMG = {img_2}
                                        />
                                        <View style = {styles.Divide}></View>
                                        <View style = {styles.ShowMoreContainer}>
                            <View style = {styles.MayBeYL}>
                                <Text style = {styles.MayBeText}>Có thể bạn cũng quan tâm</Text>
                                <View style = {styles.ListProduct}>
                                            {
                                                [
                                                    {
                                                        name : 'Iphone 6s plus',
                                                        Img : img_2,
                                                        Price : '699.000 đ',
                                                        name2 : 'Iphone 6s plus',
                                                        Img2 : img_1,
                                                        Price2 : '699.000 đ',
                                                        Sold : 'Đã bán 2.5k',
                                                        Sold2 : 'Đã bán 3.5k'
                                                    },
                                                    {
                                                        name : 'Iphone 6s plus',
                                                        Img : img_1,
                                                        Price : '699.000 đ',
                                                        name2 : 'Iphone 6s plus',
                                                        Img2 : img_1,
                                                        Price2 : '699.000 đ',
                                                        Sold : 'Đã bán 5.5k',
                                                        Sold2 : 'Đã bán 7.5k'
                                                    },
                                                ].map((e,index)=>(
                                                    <View key ={index.toString()}>
                                                        <ProductItem
                                                            name = {e.name}
                                                            Img = {e.Img}
                                                            Price = {e.Price}
                                                            Sold = {e.Sold}
                                                        />
                                                        <ProductItem
                                                            name = {e.name2}
                                                            Img = {e.Img2}
                                                            Price = {e.Price2}
                                                            Sold = {e.Sold2}
                                                        />
                                                    </View>
                                                ))
                                            }
                                </View>
                            </View>
                        </View>
                                    </ScrollView>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
            </View>
            <View style = {styles.Fixed}>
                <View style = {styles.Footer}>
                    <View style = {styles.Voucher}>
                        <View style = {{flexDirection : 'row',alignItems : 'center',paddingVertical : 10}}>
                            <Entypo name="v-card" size={30} color = {Color} />
                            <Text style = {styles.NunVoucher}>Nun Voucher</Text>
                        </View>
                        <Text style = {styles.TextVoucher}>Chọn mã </Text>
                    </View>
                    <View style = {styles.HaveMoney}>
                        <View style = {{flexDirection : 'row',alignItems : 'center',paddingVertical : 10}}>
                            <FontAwesome5 name="money-check-alt" size={30} color= {Color} />
                            <Text style = {{...styles.NunVoucher,marginRight: 10}}>Bạn chưa có mã</Text>
                            <AntDesign name="questioncircleo" size={24} color="black" />
                        </View>
                        <View>
                            <Switch
                                trackColor={{ false: "#767577", true: Color }}
                                thumbColor={"#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={(value)=>setIsEnabled(value)}
                                value={isEnabled}
                                style = {{transform : [{scaleX : 1.3},{scaleY : 1.3}]}}
                            />
                        </View>
                    </View>
                    <View style = {styles.Payment}>
                        <View style = {styles.SelectALL}>
                            <View style = {styles.ALLContainer}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                    tintColors={{ true: Color, false: 'black' }}
                                />
                                <Text style = {{fontSize : 16,fontWeight : '500'}}>Tất cả</Text>
                            </View>
                            <View style ={styles.ByNowContainer}>
                                <View style = {{flexDirection : 'row',alignItems : 'center',marginRight : 10}}>
                                    <Text style = {{fontWeight : '600'}}>Tổng tiền : </Text>
                                    <Text style = {{color : 'red',fontWeight : '600'}}>699.000 đ</Text>
                                </View>
                                <TouchableOpacity style={styles.BuyNowButton}>
                                    <Text style = {styles.TextByNow}>Mua ngay</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
const Color = '#1e88e5';
const BGColor_Opacity =  '#D7E9F7';

const styles = StyleSheet.create({
    Container : {
        flex : 1,
        minHeight : '100%',
    },
    Tabs : {
        marginTop : 2
    },
    BodyHeader : {
        flexDirection : 'row',
        padding : 10,
        alignItems : 'center',
        backgroundColor : BGColor_Opacity
    },
    TextFree : {
        marginLeft : 10,
        fontSize : 17,
        fontWeight : '200'
    },
    ItemContainer: {
        flexDirection : 'column',
        paddingBottom : 20
    },
    HeaderItem :{
        flexDirection : 'row',
        paddingHorizontal : 10,
        minHeight : 15,
        alignItems : 'center',
        borderBottomColor : '#949494',
        borderBottomWidth : 0.4,
        paddingVertical : 15
    },
    TextLove :{
        color : '#fff',
        padding : 5,
        backgroundColor : Color,
        fontWeight : '600',
        fontSize : 15,
        borderRadius : 5
    },
    TextName : {
        fontWeight : '600',
        fontSize : 15,
        marginLeft : 10
    },
    TextEdit : {
        fontWeight : '600',
        fontSize : 15,
        color : '#949494'
    },
    checkbox : {
        alignSelf : 'center',
        marginRight : 10,
        transform : [{scaleX : 1.4},{scaleY : 1.4}]
    },
    BodyItem :{
        flexDirection : 'column',
        alignSelf : 'stretch',
    },
    // May be You Like :
    MayBeYL : {
        minHeight  : 100,
        paddingHorizontal : 10
    },
    MayBeText : {
        fontSize : 16,
        fontWeight : '500',
        color : '#949494',
        textAlign : 'center',
        marginVertical : 10,
    },
    ListProduct: {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    IMGProduct: {
        height : 250,
        width : 180,
        backgroundColor: 'blue',
        resizeMode : "cover"
    },
    ItemContent :{
        flexDirection : 'column',
        flex : 1,
    },
    PhoneName :{
        fontSize : 17,
        fontWeight : '500',
        width : '90%',
        marginLeft : 10,
        marginVertical : 10
    },
    SelectPicker: {
        height: 40,
        minWidth : 50,
        borderColor : '#949494',
        borderWidth : 0.7, 
        justifyContent : 'center',
        marginHorizontal : 10,
        backgroundColor : '#eeeeee',
    },
    TextContainer : {
        height : 30,
        justifyContent : 'center',
    },
    TextPrice : {
        marginLeft : 10,
        color : 'red',
        fontSize : 18,
        fontWeight : 'bold'
    },
    Button: {
        flexDirection : 'row',
        width : 100,
        justifyContent : 'space-around',
        alignItems : 'center',
        borderColor : '#949494',
        borderWidth : 0.7, 
        marginVertical : 10,
        marginLeft : 10,
        paddingHorizontal : 10,
    },
    TextCount: {
        fontSize : 18,
        fontWeight : 'bold',
        borderColor : '#949494',
        borderLeftWidth : 0.7, 
        borderRightWidth : 0.7,
        width : 50,
        paddingVertical : 5,
        textAlign : 'center'
    },
    Divide : {
        height : 10,
        backgroundColor : '#DDDDDD'
    },  
    SectionItem :{
        minWidth :100,
        marginRight : 10,
        marginVertical : 5
    },
    ViewSee : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    itemText : {
        fontSize: 15,
        color: '#484848',
        marginVertical: 4,
    },
    ItemPrice : {
        fontSize: 16,
        fontWeight: '500',
        color: 'red',
    },
    ItemSold : {
        fontSize: 14,
        fontWeight: '500',
        color : 'black'
    },
    ItemIMG : {
        width: 100,
        height: 120,
    },
    Fixed : {
        position : 'absolute',
        bottom : 0,
        height : 150,
        width : '100%',
        backgroundColor : '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 7,

        elevation: 15,
    },
    Voucher: {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingHorizontal : 10,
        alignItems : 'center',
        borderBottomColor : '#dddddd',
        borderBottomWidth : 1
    },
    TextVoucher : {
        fontSize : 16,
        fontWeight : '500',
        color : '#949494'
    },
    NunVoucher : {
        fontSize : 16,
        fontWeight : '500',
        marginLeft : 20
    },
    HaveMoney : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingHorizontal : 10
    },
    SelectALL :{
        flexDirection : 'row',
        paddingLeft : 10,
        justifyContent : 'space-between',
    },
    ALLContainer :{
        flexDirection : 'row',
        alignItems : 'center'
    },
    ByNowContainer : {
        flexDirection : 'row'
    },
    BuyNowButton :{
        width : 100,
        backgroundColor : Color,
        paddingVertical : 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    TextByNow :{
        fontSize : 18,
        fontWeight : 'bold' ,
        color : '#fff'
    }
})