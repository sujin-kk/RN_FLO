import React, { useState } from 'react';
import { View, Text, Image, useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import { DARK_GREY, GREY, MAIN_COLOR } from "../colors";
// import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View``;

const Header = styled.View`
  flex-direction: row;
  margin-vertical: 50px;
  margin-left: 30px;
  margin-right: 30px;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 25px;
  font-weight: 600;
`;

const LoginText = styled.Text`
  font-size: 17px;
  color: ${MAIN_COLOR};
`;

const Tracks = () => (
  <View style={{ flex: 1 }} />
);

const Detail = () => (
  <View style={{ flex: 1 }} />
);

const Video = () => (
  <View style={{ flex: 1 }} />
);


const Locker = () => {
  const layout = useWindowDimensions();
  const Tab = createMaterialTopTabNavigator();
  const navigation = useNavigation();
  const goToLogin =() => {
    navigation.navigate("Stack", { screen: "Login", })
  }

  return (
    <>
    <Container>
      <Header>
        <Title style={{marginRight: "auto"}}>보관함</Title>
        <TouchableWithoutFeedback onPress={goToLogin}>
          <LoginText style={{marginLeft: "auto"}}>로그인</LoginText>
        </TouchableWithoutFeedback>
      </Header>

    </Container>

    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: `${MAIN_COLOR}`,
        tabBarInactiveTintColor: `${DARK_GREY}`,
        tabBarIndicatorStyle: {
          backgroundColor: `${MAIN_COLOR}`,
          
        },
        tabBarLabelStyle: { fontSize: 15, fontWeight: "500" },
        tabBarStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Tab.Screen name="수록곡" component={Tracks}/>
      <Tab.Screen name="상세정보" component={Detail}/>
      <Tab.Screen name="영상" component={Video}/>
    </Tab.Navigator>
    </>
  )
};

export default Locker;