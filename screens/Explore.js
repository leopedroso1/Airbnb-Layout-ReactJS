import React from 'react';

import { Animated, View, ScrollView, SafeAreaView, StyleSheet, TextInput, Platform, StatusBar, Image, Text, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Category from './components/Explore/Category';
import Home from './components/Explore/Home';
import Tag from './components/Explore/Tag';

const Explore = () => {    

const {height, width} = Dimensions.get('window');

// Animation at header height >> As we scroll the tag component will disapper 
let scrollY = new Animated.value(0);
let startHeaderHeight = 100 + StatusBar.currentHeight;
let endHeaderHeight = 70 + StatusBar.currentHeight;
let animatedHeaderHeight = scrollY.interpolate({
    inputRange:[0, 50],
    outputRange:[startHeaderHeight, endHeaderHeight],
    extrapolate: 'clamp'
})

let animatedOpacity = animatedHeaderHeight.interpolate({
    inputRange:[endHeaderHeight, startHeaderHeight],
    outputRange: [0, 1],
    extrapolate: 'clamp'
})

let animatedTagTop = animatedHeaderHeight.interpolate({
    inputRange:[endHeaderHeight, startHeaderHeight],
    outputRange: [-30, 10],
    extrapolate: 'clamp'
})

/* WORKS ONLY WITH REACT COMPONENTS! 
    componentWillMount(){
        
        this.startHeaderHeight=80

        if(Platform.OS == 'android'){

            this.startHeaderHeight = 100 + StatusBar.currentHeight

        }
    } */

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Animated.View style={{height: animatedHeaderHeight, // Change here for startHeaderHeight if error
                              backgroundColor: 'white', 
                              borderBottomWidth: 1, 
                              borderBottomColor: '#dddddd'}}>
                    
                    <View style={{flexDirection: 'row', 
                                  padding: 10, 
                                  backgroundColor: 'white', 
                                  marginHorizontal: 20,
                                  shadowColor: 'black', // iOS
                                  shadowOffset: {width:0, height:0},  // iOS
                                  shadowOpacity: 0.2,  // iOS
                                  elevation: 1, // Android
                                  marginTop: Platform.OS == 'android' ? 60: null
                                  }}>
                        <Icon name="ios-search" size={20} style={{padding: 5}} />
                        <TextInput underlineColorAndroid = "transparent"
                                   placeholder="Try London" 
                                   placeholderTextColor="grey"
                                   style={{flex: 1, fontWeight:'700', backgroundColor:'white'}}>

                        </TextInput>
                    </View>

                    <Animated.View style={{flexDirection: 'row', 
                                            marginHorizontal: 20, 
                                            position: 'relative', 
                                            top: animatedTagTop, 
                                            opacity: animatedOpacity}}>

                        <Tag name="Guests"/>
                        <Tag name="Dates"/>

                    </Animated.View>
                </Animated.View>
                <ScrollView scrollEventThrottle={16}
                            onScroll={Animated.event(
                                [
                                    {nativeEvent: {contentOffset:{y:scrollY}}}
                                ]
                            )}
                >

                    <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>

                        <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                            What can we help you find today?
                        </Text>

                        <View style={{height: 110, marginTop: 10, backgroundColor: 'white'}}>
                            <ScrollView horizontal={true}>

                               <Category imageUri={require('../assets/home.jpg')} name='Home'/>
                               <Category imageUri={require('../assets/experiences.jpg')} name='Experiences'/>
                               <Category imageUri={require('../assets/restaurant.jpg')} name='Restaurants'/>

                            </ScrollView>
                        </View>

                        <View style={{marginTop: 10, paddingHorizontal: 20}}>
    
                            <Text style={{fontSize: 24, fontWeight: '700'}}> 
                                Introducing Airbnb Panda
                            </Text>

                            <Text style={{fontWeight: '100', marginTop: 10}}>
                                A new selection of homes verified for quality and comfort
                            </Text>

                            <View style={{width:width-40, height: 200, marginTop: 20 }}>
                                 <Image style={{flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd'}}
                                        source={require('../assets/home.jpg')}/>
                            </View>

                        </View>
                    </View>              
                    
                    <View style={{ marginTop: 40}}>
                        <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                            Homes around the world
                        </Text>

                        <View style={{paddingHorizontal: 20, 
                                      marginTop: 20, 
                                      flexDirection: 'row', 
                                      flexWrap: 'wrap',
                                      justifyContent: 'space-between'}}>

                            <Home width={width} 
                                  name="The Cozy Place" 
                                  type="PRIVATE ROOM - 2 BEDS"
                                  price={'€ 82'}
                                  rating={4}
                            />
                            <Home width={width} 
                                  name="The Exquisite Place" 
                                  type="PRIVATE ROOM - 1 DOUBLE BED"
                                  price={'€ 100'}
                                  rating={5}
                            />
                            <Home width={width} 
                                  name="Luxurious Resort" 
                                  type="PRIVATE ROOM - 1 LUX BED"
                                  price={'€ 500'}
                                  rating={5}
                            />

                        </View>
                    </View>
                </ScrollView>                    
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Explore;