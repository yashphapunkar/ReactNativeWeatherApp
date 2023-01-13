import {View, Text, StatusBar, StyleSheet, KeyboardAvoidingView, ImageBackground} from 'react-native';
import React, { useState, useEffet } from 'react';


function WeatherScreen(props) {

    return (
        <View style={styles.weatherContainer}>
            <Text style={styles.topHeading}>Weather</Text>

            <View style={styles.cityContainer}>
            <ImageBackground source={require('../assets/sunphoto.jpeg')} style={styles.img}>
               <Text style={styles.heading}>{props.route.params.name}</Text>
               <Text style={styles.normalText}>{props.route.params.weatherText}</Text>
               <Text style={styles.normalText}>humidity: {props.route.params.humidity}</Text>
               </ImageBackground>
            </View>
           
            <View style={styles.tempContainer}>
            <ImageBackground source={require('../assets/night.jpg')} style={styles.nightImg}>
            <Text style={styles.heading}>{props.route.params.temprature} &deg; C</Text>
            <Text style={styles.sideText}>Max Temp: {props.route.params.maxTemp} &deg; C | Min Temp: {props.route.params.minTemp} &deg; C</Text>
            </ImageBackground>
            </View>

            <View style={styles.windContainer}>
                <ImageBackground source={require('../assets/space1.jpg')} style={styles.nightImg}>
                    <Text style={styles.heading}>Wind</Text>
                    <Text style={styles.normalText}>Speed: {props.route.params.windDetails[2]} m/s</Text>
                    <Text style={styles.normalText}>Deg: {props.route.params.windDetails[0]}</Text>
                    <Text style={styles.normalText}>Pressure: {props.route.params.pressure}</Text>

                </ImageBackground>
            </View>
        </View>
    )
}

export default WeatherScreen;

const m = StatusBar.currentHeight + 30;

const styles = StyleSheet.create({

    topHeading: {
        marginTop: m,
        marginHorizontal: '4%',
        fontSize: 45,
        fontWeight: 'bold',
        color: '#ECE8DD',
        marginBottom: '1%'
    },

    weatherContainer: {
        backgroundColor: '#1A120B',
        flex: 1
    },

    cityContainer: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#2C74B3',
        marginTop:'5%',
        marginHorizontal: '4%',
        // padding: '4%',
        borderRadius: 10,
        opacity: 0.75,
        elevation: 10
    },

    img: {
        paddingVertical: '7%',
        paddingHorizontal: '4%',
    },

    heading: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#ECE8DD'

    },

    normalText: {
        fontSize: 18,
        color: 'lightgrey',
        margin: 3
    },

    tempContainer: {
        backgroundColor: 'black',
        marginTop:'5%',
        marginHorizontal: '4%',
        borderRadius: 10,
        opacity: 0.75,
        elevation: 10
    },

    nightImg: {
        paddingHorizontal:'4%',
        paddingVertical: '10%'
    },

    sideText: {
        fontSize: 15,
        color: 'lightgrey',
        marginTop: 10
    },

    windContainer: {
        backgroundColor: 'black',
        marginTop:'5%',
        marginHorizontal: '4%',
        borderRadius: 10,
         opacity: 0.75
    }


})