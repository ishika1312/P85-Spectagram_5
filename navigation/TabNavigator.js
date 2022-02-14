import React from 'react';
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab =  createMaterialBottomTabNavigator();
const BottomTabNavigator = () =>{
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions = {({route})=>({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed'){
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Create Post'){
            iconName = focused
              ? 'add-circle'
              : 'add-circle-outline';
          }
          return (
            <Ionicons
              style={styles.icons}
              name={iconName} 
              color={color} 
              size={RFValue(25)}
            />
          ); 
        }
      })}
        activeColor = {'#eb3948'}
        inactiveColor = {'grey'}
    >
      <Tab.Screen name = 'Feed' component = {Feed}/>
      <Tab.Screen name = 'Create Post' component = {CreatePost}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: '#292424',
    height: '8%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute'
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
})

export default BottomTabNavigator;