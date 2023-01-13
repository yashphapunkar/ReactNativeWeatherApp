import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InputScreen from '../screens/InputScreen';
import WeatherScreen from '../screens/WeatherScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
       <NavigationContainer >
          <Stack.Navigator initialRouteName='InputScreen' screenOptions={{headerShown: false}} >
             <Stack.Screen name='InputScreen' component={InputScreen} ></Stack.Screen>
             <Stack.Screen name='WeatherScreen' component={WeatherScreen}></Stack.Screen>
          </Stack.Navigator>
       </NavigationContainer>
  )
}



const styles = StyleSheet.create({
  
})