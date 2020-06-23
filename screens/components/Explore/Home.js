import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';

// import { Container } from './styles';

// react-native-star-rating >> Dependency that creates ratings using stars

const Home = (props) => {
  return (

    <View style={{width: props.width / 2 - 30, 
                  height: props.width / 2 - 20, 
                  borderWidth: 0.5, 
                  borderColor: '#dddddd',
                  marginBottom: 10}}>
        
        <View style={{flex: 1}}>
            <Image  style={{flex: 1, 
                            width: null, 
                            height: null, 
                            resizeMode: 'cover'}}
                    source={require('../../../assets/home.jpg')} />
        
        </View>
        
        <View style={{flex: 1, 
                      alignItems: 'flex-start', 
                      justifyContent: 'space-evenly', 
                      paddingLeft: 10}}>

            <Text style={{fontSize: 10, color: '#b63838'}}>{props.type}</Text>                                   
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>{props.name}</Text>                                   
            <Text style={{fontsize: 10}}>{props.price}</Text>                                   
    
            <StarRating disable={true} maxStars={5} rating={props.rating} starSize={10} />
        </View>

    </View>
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


export default Home;