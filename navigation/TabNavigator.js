import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from '../screens/Feed';
import CreateStory from '../screens/CreateStory';
import {RFValue} from "react-native-responsive-fontsize"

const Tab=createBottomTabNavigator()
const BottomTabNavigator = ()=>{
  return (
    
      <Tab.Navigator
      labled={false}
      barStyle={styles.bottomTabStyles}
      screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
          let iconName;
          if(route.name==='Feed'){
            iconName=focused?
            'book':
            'book-outline'
          }else if(route.name==='CreateStory'){
            iconName=focused?
            'create':
            'create-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} style={styles.icons}/>

        }
      })}
      tabBarOptions={{
        activeTintColor:'tomato',
        inactiveTintColor:'gray'
      }}
      >
        <Tab.Screen name="Feed"component={Feed}/>
        <Tab.Screen name="CreateStory"component={CreateStory}/>
      </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
      width:RFValue(30),
      height:RFValue(30)
  },
  bottomTabStyles: {
      backgroundColor:"#2f345d",
      height:"8%",
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      overflow:"hidden",
      position:'absolute'
  }
});

export default BottomTabNavigator 