import React,{Component, useState} from 'react'
import { View,Text,StyleSheet, ScrollView , Dimensions,Image} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Carousel from 'react-native-snap-carousel';
import { color } from 'react-native-reanimated';
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { useBottomModal, BottomModal,BottomModalRef } from 'react-native-lightning-modal';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
  } from 'react-native-reanimated';

import IMG1 from '../assets/iphoneImg1.jpg';
import IMG2 from '../assets/iphoneImg2.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';
const IMAGES = {
    image1 : require('../assets/iphoneImg1.jpg'),
    image2 : require('../assets/iphoneImg2.jpg')
  };

const SectionTypeItem = ({IMG,Price,Sale})=>{
    return(
        <TouchableOpacity style = {styles.SectionItem}>
            <Image style = {styles.TypeIMG} source = {IMG}/>
            <Text style = {styles.TypePrice}>{Price}</Text>
            <Text style = {styles.TypeSale}>{Sale}</Text>
        </TouchableOpacity>
    )
}
const WindwoWidth = Dimensions.get("window").width;
const DetailScreeen = ()=> {
    const { dismiss, show, modalProps } = useBottomModal();
    const [images, setImages] = useState([
        { id: '1', image: IMAGES.image1 },
        { id: '2', image: IMAGES.image2 },
        
      ]);
    return(
        <View style = {styles.Container}>
            <StatusBar barStyle = 'light-content'/>
            <ScrollView>
            <View style = {styles.HeaderIMG}>
                    <Carousel
                    layout='default'
                    data={images}
                    sliderWidth={WindwoWidth}
                    itemWidth={WindwoWidth}
                    renderItem={({ item, index }) => (
                    <View>
                        <Image
                            key={index}
                            style={{flex : 1, width: '100%', height: 300 }}
                            resizeMode='contain'
                            source={item.image}
                        />
                        <Text style = {styles.NumberImg}>{index + 1}/2</Text>
                    </View>
                    )}
                />
            </View>
                <View style = {styles.SectionContent}>
                    <View style = {styles.Tiltle}>
                        <View style = {styles.TiltleItem}>
                            <Text style = {styles.TextTilte} numberOfLines = {3}>Iphone 6s plus phiên bản đặc biệt</Text>
                            <Foundation style = {styles.IconSale} name="burst-sale" size={50} color="red" />
                        </View>
                        <View style = {styles.PriceContainer}>
                            <Text style = {styles.SalePrice}>100.000đ</Text>
                            <Text style = {styles.SectionDeal}>Mua kèm Deal Sốc</Text>
                        </View>
                        <Text style = {styles.RootPrice}>600.000đ</Text>
                    </View>
                    <View style = {styles.TextContainer}>
                        <TouchableOpacity>
                            <View style = {{flexDirection :'row',width : '80%',alignItems : "center"}}>
                                <Text style = {styles.TextChip}>Ở đâu rẻ hơn, Nun Hoàn tiền</Text>
                                <AntDesign name="bells" size={17} color="black" />
                            </View>
                            <View style = {{flexDirection : 'row',width : '90%'}}>
                                <Text style = {styles.TextVoucher}>Tìm được sản phẩm giá thấp hơn? Nhận Voucher MIỄN PHÍ tại đây </Text>
                                <View style = {{flex : 1}}></View>
                                <MaterialIcons name="chevron-right" size={40} color="#949494" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.textFlash}>
                        <FontAwesome name="flash" size={30} color="#1e88e5" />
                        <Text style = {{marginLeft : 10,fontWeight : '200',color :'#1e88e5'}}>Flash Sale từ 21:00 ngày 12 Th06</Text>
                        <View style = {{flex : 1}}></View>
                        <MaterialIcons name="chevron-right" size={40} color="#949494" />
                    </View>
                    <View style = {styles.Evaluate}>
                        <View style ={{flexDirection :'row'}}>
                            <AntDesign name="star" size={24} color="#FFC947" />
                            <AntDesign name="star" size={24} color="#FFC947" />
                            <AntDesign name="star" size={24} color="#FFC947" />
                            <AntDesign name="star" size={24} color="#FFC947" />
                            <AntDesign name="star" size={24} color="#FFC947" />
                        </View>
                        <Text style = {styles.ForSale}>Đã bán 5,6k</Text>
                        <View style = {{flex : 1}}></View>
                        <AntDesign name="hearto" size={24} color="black" />
                    </View>
                    <View style = {styles.ListItem}>
                        <View style = {styles.Item}>
                            <FontAwesome5 name="shipping-fast" size={15} color="black" />
                            <Text style = {styles.TextFree}>Miễn phí vận chuyển</Text>
                        </View>
                        <View style = {styles.Item}>
                            <AntDesign name="qrcode" size={15} color="black" />
                            <Text style = {styles.TextFree}>Chính hãng 100%</Text>
                        </View>
                        <View style = {styles.Item}>
                        <AntDesign name="earth" size={15} color="black" />
                            <Text style = {styles.TextFree}>Miễn phí trả hàng</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.SectionSeeMore}>
                    <View style = {styles.TextSeeMore}>
                        <Text style = {styles.SeeMoreTitle}>Mua thêm Deal cực sốc</Text>
                        <View style = {styles.SeeMoreTextContainer}>
                            <Text>Xem Thêm</Text>
                            <MaterialIcons name="chevron-right" size={40} color="#949494" />
                        </View>
                    </View>
                    <View style ={styles.TypeItem}>
                        {
                            [
                                {IMG : IMG1, price : '690.000 đ',sale : '599.000 đ'},
                                {IMG : IMG1, price : '690.000 đ',sale : '599.000 đ'},
                                {IMG : IMG1, price : '690.000 đ',sale : '599.000 đ'},
                                {IMG : IMG1, price : '690.000 đ',sale : '599.000 đ'},
                                {IMG : IMG1, price : '690.000 đ',sale : '599.000 đ'}
                            ].map((item,index)=>{
                                return (
                                    <SectionTypeItem key = {index.toString()}
                                        IMG = {item.IMG}
                                        Price = {item.price}
                                        Sale = {item.sale}
                                    />
                                )
                            })
                        }
                        
                    </View>
                </View>
                   
                    <View style = {styles.DeTailItem}>
                        <Text style ={styles.TilteDetail}>Chi tiết sản phẩm</Text>
                        <View>
                            <View style ={styles.DetailContent} >
                                <View style = {styles.TiltleItem}>
                                    <Text style = {{color : '#949494'}}>Kho</Text>
                                    <Text style = {{color : '#949494'}}>Thương hiệu</Text>
                                    <Text style = {{color : '#949494'}}>Gửi từ</Text>
                                </View>
                                <View style = {styles.ContentItm}>
                                    <Text>1010</Text>
                                    <Text>Apple</Text>
                                    <Text>TP.Hồ Chí Minh</Text>
                                </View>
                            </View>
                            <View>
                                 <Text style = {{fontWeight : 'bold',fontSize : 18}}>Mô tả sản phẩm</Text>
                                 <View>
                                     <Text>Lưu ý: Các sản phẩm sản xuất sau tháng 10/2020 sẽ không có củ sạc và tai nghe trong bộ sản phẩm.</Text>
                                     <Text></Text>
                                     <Text style = {{fontSize : 15}}>Tính năng nổi bật :</Text>
                                     <Text></Text>
                                     <Text>•	Màn hình Liquid Retina HD LCD 6.1 inch (3)  </Text>
                                     <Text>•	Chống nước và chống bụi (chống nước ở độ sâu 2 mét trong vòng tối đa 30 phút, đạt mức IP68) (1)   </Text>
                                     <Text>•	Hệ thống camera kép 12MP với camera Ultra Wide và Wide; chế độ Ban Đêm, chế độ Chân Dung và video 4K tốc độ tối đa 60fps   </Text>
                                     <Text>•	Camera trước TrueDepth 12MP với chế độ Chân Dung, quay video 4K và quay video chậm   </Text>
                                     <Text>•	Xác thực bảo mật với Face ID )  </Text>
                                     <Text>•	Chip A13 Bionic với Neural Engine thế hệ thứ ba   </Text>
                                     <Text>•	Khả năng sạc nhanh  </Text>
                                     <Text>•	iOS 13 cùng với chế độ Dark Mode, các công cụ chỉnh ảnh và quay video mới, và các tính năng bảo mật hoàn toàn mới </Text>
                                 </View>
                            </View>
                        </View>
                    </View>
                <View style = {styles.SectionSuggest}>

                </View>
            </ScrollView>
            <TouchableOpacity style = {styles.Button} onPress = {()=>show()}>
                        <Text style = {styles.TextButton}>Mua hàng</Text>
            </TouchableOpacity>
            <BottomModal  height={400} {...modalProps}>
                <View style = {styles.BottomModal}>
                    <View style = {styles.SelectItem}>
                        <Image style = {{height: 80, width : 60,resizeMode : 'contain'}} source = {IMG1}/>
                        <View style = {{flexDirection : 'column',marginLeft : 15,marginTop : 10}}>
                            <Text style = {styles.TypePrice}>699.000 đ</Text>
                            <Text style = {styles.TypeSale}>599.000 đ</Text>
                        </View>
                    </View>
                    <View style = {styles.SelectColor}>
                        <Text style = {styles.ColorTilte}>Màu sắc</Text>
                        <View style = {styles.SectionItemColor}>
                            {
                                [
                                    'Đỏ',
                                    'Tím',
                                    'Vàng',
                                    'Xanh',
                                    'Cam',
                                    'Trắng',
                                ].map((item,index)=>(
                                    <TouchableOpacity key = {index.toString()} style = {styles.ItemColor}>
                                        <Text style = {{fontWeight : '400'}}>{item}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                           
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style = {styles.ButtonSelect}>
                            <Text style = {styles.TextSelect}>Mua ngay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomModal>
        </View>
    )
}
export default DetailScreeen;
const styles = StyleSheet.create({

    Container :{
        backgroundColor : '#fff',
        flex : 1
    },
    NumberImg :{
        minHeight : 20,
        minWidth : 20,
        backgroundColor : '#F3F1F5',
        position : 'absolute',
        bottom : 30,
        right : 20,
        color : 'black',
        padding : 5,
        borderRadius : 10
    },
    PriceContainer : {
        flexDirection : 'row',
    },
    SectionDeal : {
        marginLeft : 20,
        padding : 2     ,
        borderWidth : 1,
        borderColor : 'red',
        color : 'red',
    },
    TiltleItem :{
        flexDirection : 'row',
    },
    TextTilte :{
        fontSize : 25,
        marginVertical : 10,
        fontWeight : 'bold',
        width : '90%'
    },
    IconSale : {
        position : 'absolute',
        top : 5,
        right : 15
    },
    SalePrice : {
        fontSize : 20,
        color : 'red',
        fontWeight : '600'
    },
    RootPrice : {
        fontSize : 20,
        marginTop : 10,
        color : '#949494',
        textDecorationLine : 'line-through'
    },
    TextContainer : {
        backgroundColor : '#D7E9F7',
        paddingVertical : 10,
        paddingHorizontal : 5,
        marginTop : 10
    },
    TextChip : {
        color : '#1e88e5',
        fontSize : 20,
        fontWeight : '600',
        marginRight : 10
    },
    TextVoucher :{
        color : '#949494',
    },
    textFlash : {
        flexDirection : 'row',
        paddingVertical : 10,
        borderBottomColor : '#949494',
        borderBottomWidth : 0.4,
        paddingHorizontal : 5,
        alignItems : 'center'
    },
    Evaluate : {
        flexDirection : 'row',
        paddingVertical : 10,
        borderBottomWidth : 0.4,
        paddingHorizontal : 5,
        paddingRight : 12
    },
    ForSale: {
        fontWeight : '900',
        fontSize : 17,
        marginLeft : 10,
    },
    ListItem : {
        flexDirection :'row',
        justifyContent : 'space-around',
        paddingVertical : 10,
        borderBottomWidth : 10,
        borderBottomColor : '#F0F3F3',
        paddingHorizontal : 5,
    },
    Item : {
        flexDirection : 'row',
        
    },
    TextFree :{
        fontSize : 12,
        color : '#949494',
        marginLeft : 5,
        
    },
    Button : {
        height : 30,
        backgroundColor : '#3498DB',
        justifyContent : 'center',
        alignItems : 'center',
        paddingVertical : 20,
        position : 'relative',
        bottom : 0
    },
    TextButton : {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#fff'
    },
    SeeMoreTitle : {
        fontSize : 17,
        fontWeight :'bold',
        paddingVertical : 10
    },
    SeeMoreTextContainer : {
        flexDirection : 'row',
        alignItems : 'center',
    },
    SectionSeeMore :{
        flexDirection : 'column',
    },
    TextSeeMore : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 5,
        justifyContent : 'space-between'
    },
    TypeItem : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginVertical : 10
    },  
    TypeIMG : {
        height : 50,
        width : 50,
        resizeMode : 'contain'
    },
    TypePrice : {
        textDecorationLine : 'line-through'
    },
    TypeSale : {
        color : 'red',
    },
    BottomModal : {
        flex : 1,
        flexDirection : 'column',
        height : 400
    },
    ButtonSelect :{
        position : 'relative',
        bottom : 0,
        height : 50,
        width : WindwoWidth,
        padding : 10,
        backgroundColor : '#3498DB',
        justifyContent : 'center',
        alignItems : 'center',
    },
    TextSelect : {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#fff'
    },
    SelectItem : {
        flexDirection : 'row',
        margin : 10
    },
    BorderBottom : {
        height : 0.4,
        backgroundColor : '#EEEEEE',
        width : '100%'
    },
    SelectColor : {
        position : 'relative',
    },
    SectionItemColor : {
        flexDirection : 'row',
        flexWrap : 'wrap'
    },
    ItemColor : {
        minHeight : 20,
        paddingHorizontal : 20,
        paddingVertical : 10,
        backgroundColor : '#EEEEEE',    
        margin : 10
    },
    ColorTilte : {
        fontSize : 18,
        fontWeight : 'bold',
        marginLeft : 10,
        borderBottomWidth : 0.8,
        borderBottomColor : '#eeeeee',
        height : 30
    },
    TilteDetail :{
        borderBottomColor : '#eeeeee',
        borderBottomWidth : 0.4,
        height : 30,
        fontWeight : 'bold',
        fontSize : 18
    },
    DetailContent : {
        flexDirection : 'row',
        minHeight : 100,
        paddingHorizontal : 10,
        marginTop : 20
    },
    DeTailItem : {
         paddingHorizontal : 15
    },
    TiltleItem : {
        flex : 1,
        height : 70,
        justifyContent : 'space-around'
    },
    ContentItm : {
        flex : 2,
        height : 70,
        justifyContent : 'space-around'
    }
})