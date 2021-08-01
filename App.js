import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';
import { LogBox, View } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

// Import Navigators from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Import Screens
import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import ChatScreen from './Screens/ChatScreen';
import Profile from './Screens/Profile';
import MessageScreen from './Screens/MessageScreen';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
function myTabs() {
  return (
    <View style={{ flex: 1, backgroundColor: '#d32f2f' }}>
      <Tab.Navigator
        initialRouteName="SplashScreen"
        tabBarOptions={{
          activeTintColor: '#d32f2f',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="myTabs"
          component={myTabs}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
