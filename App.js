import React from 'react';
import { TimelineScreen } from "./screens/TimelineScreen";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {SettingsScreen} from "./screens/SettingsScreen";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.view}>
        <StatusBar style="light" />
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'News Feed') {
              iconName =  'ios-archive';
            } else if (route.name === 'Settings') {
              iconName =  'md-settings';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={25} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2D88FF',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="News Feed" component={TimelineScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#c9cbd1',
    borderColor: '#2D88FF',
    borderTopWidth: 80,
  },
});
