import React,{Component} from "react";
import { Text,View,StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = ({title,onPress}) => (
    <View style={styles.headerContainer}>
      {/*  */}
      <View style={styles.cartContainer}>
        <View style={styles.cartIcon} />
      </View>
      {/*  */}
      <Text style={styles.headerText}>{title}</Text>
      {/*  */}
      <View style={styles.cartContainer}>
        <TouchableOpacity onPress = {onPress}>
          <FontAwesome name="shopping-cart" size={HEADER_ICON_SIZE} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
  
  export default Header;
  
  const HEADER_ICON_SIZE = 24;
  
  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
    },
    headerContainer: {
      flexDirection: 'row',
      paddingTop: 50,
      backgroundColor: '#1e88e5',
      justifyContent: 'space-between',
      paddingBottom: 12,
    },
    cartContainer: {
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cartIcon: {
      width: HEADER_ICON_SIZE,
    },
    headerText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '500',
    },
  });