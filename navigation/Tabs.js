import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Stack from "./Stack"
import Home from "../screens/Home";
import Look from "../screens/Look";
import Search from "../screens/Search";
import Locker from "../screens/Locker";
import { DARK_GREY, LIGHT_GREY, MAIN_COLOR, GREY, BTN_GREY } from "../colors";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
    <Tab.Navigator
        sceneContainerStyle={{
     
        }}
        initialRouteName="Home"
        screenOptions={{
            unmountOnBlur: true, // caching, not fetch again
            headerShown: false,
            tabBarStyle: { backgroundColor: "white" },
            tabBarActiveTintColor: MAIN_COLOR,
            tabBarInactiveTintColor: DARK_GREY,
            headerStyle: { backgroundColor: "white" },
            headerTitleStyle: { color: "black" },
            tabBarLabelStyle: { fontSize: 12, fontWeight: "600", marginTop: -5, }
        }}
    >
        <Tab.Screen name="Home" component={Home} options={{
            title: "홈",
            tabBarIcon : ({ focused }) => {
                return <Image source={ focused ? require('../assets/ic_bottom_home_select.png') : require('../assets/ic_bottom_home_no_select.png') } style={ focused ? { width: 25, height: 25}: {width: 30, height: 30}} />
            }
        }} />
        <Tab.Screen name="Look" component={Look} options={{
            title: "둘러보기",
            tabBarIcon : ({ focused }) => {
                return <Image source={ focused ? require('../assets/ic_bottom_look_select.png') : require('../assets/ic_bottom_look_no_select.png') } style={{ width: 30, height: 30 }} />
            }
        }} />
        <Tab.Screen name="Search" component={Search} options={{
            title: "검색",
            tabBarIcon : ({ focused }) => {
                return <Image source={ focused ? require('../assets/ic_bottom_search_select.png') : require('../assets/ic_bottom_search_no_select.png') } style={{ width: 30, height: 30 }} />
            }
        }} />
        <Tab.Screen name="Locker" component={Locker} options={{
            title: "보관함",
            tabBarIcon : ({ focused }) => {
                return <Image source={ focused ? require('../assets/ic_bottom_my_select.png') : require('../assets/ic_bottom_my_no_select.png') } style={{ width: 30, height: 30 }} />
            }
        }} />
    </Tab.Navigator>
    )
};

export default Tabs;