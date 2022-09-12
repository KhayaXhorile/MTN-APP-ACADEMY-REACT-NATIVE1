//import liraries
import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('window').height;
// create a component
const Login = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Email"

            />
            <TextInput
                style={styles.input}

                placeholder="Password"

            />
            </View>


            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={{color:'white'}}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    input: {
        height: 40,
        margin: 12,
        //borderWidth: 1, 
        borderBottomWidth: 1,
        padding: 10,
    },
    button:{
        alignItems: "center",
        backgroundColor: "#ef9a9a",
        padding: 10,
        margin:10,
        borderRadius:10,
       // position:'absolute',
        //bottom:0

    },
    form:{
        margin:16,
        paddingTop:windowHeigth/4 

    }
});

//make this component available to the app
export default Login;
