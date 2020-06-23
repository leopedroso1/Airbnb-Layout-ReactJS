import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation'; // Good Package!
import Icon from 'react-native-vector-icons/Ionicons'; // Icons pallete
import Explore from './screens/Explore';
import Inbox from './screens/Inbox';
import Saved from './screens/Save';
import Trips from './screens/Trips';
import Profile from './screens/Profile';


export default createBottomTabNavigator({

  Explore:{
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: (tintColor) => (
        <Icon name="ios-search" color={tintColor} size={24}/> // Works with android as well
      )
    }
  },

  Saved:{
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'Saved',
      tabBarIcon: (tintColor) => (
        <Icon name="ios-heart" color={tintColor} size={24}/> // Works with android as well
      )
    }
  },

  Trips:{
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'Trips',
      tabBarIcon: (tintColor) => (
        <Image source={require('./assets/airbnb.png')} style={{height: 24, width: 24, tintColor: tintColor}}/>
      )
    }
  },

  Inbox:{
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'Inbox',
      tabBarIcon: (tintColor) => (
        <Icon name="ios-chatboxes" color={tintColor} size={24}/> // Works with android as well
      )
    }
  },

  Profile:{
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: (tintColor) => (
        <Icon name="ios-person" color={tintColor} size={24}/> // Works with android as well
      )
    }
  }  
}, { // Options from Tab Navigator

  tabBarOptions:{
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    backgroundColor: 'white',
    borderTopWidth: 0,
    shadowOffset: {width: 5, height: 3}, // iOS
    shadowColor: 'black', // iOS
    shadowOpacity: 0.5, // iOS
    elevation: 5 // Android
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
