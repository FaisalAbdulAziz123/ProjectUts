import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen'; 
import DetailScreen from './src/screens/DetailScreen'; 

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen} 
                    options={{ title: 'Login' }}
                />
                <Stack.Screen 
                    name="Register" 
                    component={RegisterScreen} 
                    options={{ title: 'Register' }}
                />
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{ title: 'Home' }}
                />
                <Stack.Screen 
                    name="Detail" 
                    component={DetailScreen} 
                    options={{ title: 'Detail' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
