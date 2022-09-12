//import liraries
import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { SafeAreaView } from 'react-native-safe-area-context';
import serviceData from './Data';
const windowWidth = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('window').height;


// create a component
const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <FlatList
                data={serviceData}
                contentInset={{padding: 12,}}
                renderItem={({item}) =>{
                    return(
                        <TouchableOpacity style={{margin:10, height:windowHeigth * 0.2,backgroundColor:item.bgColor, borderBottomEndRadius:10}}>
                            <View style={{backgroundColor:item.bgColor}}>
                            <Text style={styles.category}>
                                {item.category}
                            </Text>
                            <Text style={styles.name}>
                                {item.name}
                            </Text>
                            <Text>
                                {item.numberCompany}
                            </Text>
                            

    
                            </View>
                            <Image style={{
                                height:90, width:100, position:'absolute', right:0, margin:10, bottom:0
                            }}source={item.image}/>

                        </TouchableOpacity>
                    )
                }}
            >

            </FlatList>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#white',
        
    },
    category:{
        fontSize:24,
        fontWeight:'200',
        color:'white'
    },
    name:{
        fontSize:20,
        fontWeight:"400"
    },

});

//make this component available to the app
export default Home;
