// This is the main navigation file for the app.
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BibleScreen from '../screens/BibleScreen';
import DevotionalsScreen from '../screens/DevotionalsScreen';
import TestsScreen from '../screens/TestsScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Bible" component={BibleScreen} />
                <Stack.Screen name="Devotionals" component={DevotionalsScreen} />
                <Stack.Screen name="Tests" component={TestsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;