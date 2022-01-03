import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import Album from "../screens/Album";
import Login from "../screens/Login";
import Tracks from "../screens/Tracks";

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator 
    screenOptions={{ 
        animation: "fade",
        headerShown: false, }}>
    <NativeStack.Screen name="Album" component={Album} />
    <NativeStack.Screen name="Login" component={Login} />
  </NativeStack.Navigator>
);

export default Stack;