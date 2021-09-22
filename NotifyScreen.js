import React,{Component} from "react";
import { View,StyleSheet,Text,TouchableOpacity} from "react-native";
import { StatusBar } from 'expo-status-bar';
import Header from "../Component/HeaderComponent";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FlatList } from "react-native-gesture-handler";

const NotifiItem = ({item})=>{
    return(
        <View style = {styles.ItemContainer}>
            <TouchableOpacity activeOpacity = {0.6} >
                <View style = {styles.SectionICON}>
                    <View style = {[styles.IconContainer,{backgroundColor : item.type === 1 ? '#fc820a' : '#dc3988'}]}>
                        <MaterialCommunityIcons
                            name={item.type === 1 ? 'sale' : 'backup-restore'}
                            color="#fff"
                            size={22}
                        />
                    </View>
                    <View style = {[styles.itemTopTextContainer]}>
                        <Text >{item.name}</Text>
                        <Text>{item.date}</Text>
                    </View>
                </View>
                <View style = {{borderBottomColor : '#5e5e5e',borderBottomWidth : 0.5,}}>
                    <Text style = {{marginBottom : 12,marginHorizontal : 10,color : '#949494'}}>{item.detail}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default class NotifyScreen extends Component{
    
    constructor(props)
    {
        super(props)
        this.state = {
                Active : 0,
                ObjectActive : [{id : 1},{id : 2},{id : 3}],
            }
        this.ToggleActive = this.ToggleActive.bind(this)
    }
    ToggleActive(index)
        {
            this.setState({
                Active : this.state.ObjectActive[index],
            })
        }
    render()
    {
        return(
            <View style = {styles.Container}>
                <StatusBar barStyle = 'light-content'/>
                {/* Header */}
                <Header title="Thông báo" />
                <View style = {styles.BodyContainer}>
                    <View style = {styles.SectionLeft}>
                        {
                            [
                                'home',
                                'backup-restore',
                                'sale',
                            ].map((e,index)=>(
                                <TouchableOpacity key = {index.toString()}
                                    onPress = {()=>this.ToggleActive(index)}
                                >
                                     <MaterialCommunityIcons 
                                       style = {(this.state.ObjectActive[index] === this.state.Active || index === this.state.Active) ?
                                       styles.IconLeftActive : styles.IconLeftInActive} name={e} size={24} color="#949494" />
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    <View style = {styles.SectionRight}>
                        <FlatList
                            data = {[
                                {
                                    id: 1,
                                    type: 1,
                                    name: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11',
                                    date: '13/11/2018',
                                    detail:
                                      'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11 - Số Lượng Có Hạn',
                                },
                                {
                                    id: 2,
                                    type: 2,
                                    name: 'GỢI Ý QUÀ TẶNG 20.10',
                                    date: '02/11/2018',
                                    detail:
                                      'NHẬP MÃ UUDAIT11 GIẢM 50K CHO ĐƠN HÀNG 700K. Áp dụng cho sản phẩm ngành Điện Gia Dụng. XEM NGAY!',
                                  },
                                  {
                                    id: 3,
                                    type: 1,
                                    name: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11',
                                    date: '13/11/2018',
                                    detail:
                                      'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11 - Số Lượng Có Hạn',
                                  },
                                  {
                                    id: 4,
                                    type: 2,
                                    name: 'GỢI Ý QUÀ TẶNG 20.10',
                                    date: '02/11/2018',
                                    detail:
                                      'NHẬP MÃ UUDAIT11 GIẢM 50K CHO ĐƠN HÀNG 700K. Áp dụng cho sản phẩm ngành Điện Gia Dụng. XEM NGAY!',
                                  },
                                  {
                                    id: 5,
                                    type: 1,
                                    name: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11',
                                    date: '13/11/2018',
                                    detail:
                                      'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11 - Số Lượng Có Hạn',
                                  },
                                  {
                                    id: 6,
                                    type: 2,
                                    name: 'GỢI Ý QUÀ TẶNG 20.10',
                                    date: '02/11/2018',
                                    detail:
                                      'NHẬP MÃ UUDAIT11 GIẢM 50K CHO ĐƠN HÀNG 700K. Áp dụng cho sản phẩm ngành Điện Gia Dụng. XEM NGAY!',
                                  },
                            ]}
                            keyExtractor = {item => item.id.toString()}
                            renderItem = {({item})=><NotifiItem item = {item}/>}
                        />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container :{
        backgroundColor : '#ededed',
        flex : 1
    },
    BodyContainer : {
        flexDirection : 'row',
    },
    SectionLeft :{
        
    },
    SectionRight : {
        borderLeftColor : '#5e5e5e',
        borderLeftWidth : 0.5,
        flex : 1,
    },
    IconLeftActive :{
        backgroundColor : '#fff',
        padding : 12,
        justifyContent : 'center',
        borderBottomColor : '#5e5e5e',
        borderBottomWidth : 0.5,
    },
    IconLeftInActive :{
        padding : 12,
        borderBottomColor : '#5e5e5e',
        borderBottomWidth : 0.5,
    },
    Mark : {
        width : 3,
        backgroundColor : '#1e88e5',
    },
    SectionICON :{
        flexDirection :'row',
        marginHorizontal : 10
    },
    IconContainer :{
        marginVertical : 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemTopTextContainer :{
        marginVertical : 10,
        marginRight : 40,
        marginLeft : 10
    },
    activeIcon :{
        padding : 12,
        marginLeft : -3
    }
    

})