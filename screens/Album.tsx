import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import { DARK_GREY, GREY, MAIN_COLOR } from "../colors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import musicData from "../musicData.json";
import AlbumLargeImage from "../components/AlbumLargeImage";
import Tracks from "./Tracks";

const Container = styled.View`
  background-color: white;
`;

const Header = styled.View`
  flex-direction: row;
  margin-top: 40px;
  margin-horizontal: 10px;
`;

const HeaderBtn = styled.TouchableWithoutFeedback``;

const HeaderImg = styled.Image`
  width: 30px;
  height: 30px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 5px;
`;

const Desc = styled.Text`
  font-weight: 300;
  font-size: 15px;
  color: ${DARK_GREY};
  margin-bottom: 5px;
`;

const Detail = () => (
  <View style={{ flex: 1 }} />
);

const Video = () => (
  <View style={{ flex: 1 }} />
);


const Album = ({
  navigation: { setOptions },
  route: {
    params: { id }
  }
}) => {
  const albumData = musicData.albums;
  const songData = musicData.songs;
  const { albumName, singer } = albumData.filter((album) => album.id === id)[0];
  // const tracks = songData.map((item) => item.albumIdx === id);

  const navigation = useNavigation();
  const Tab = createMaterialTopTabNavigator();

  return (
    <>
      <Container>
        <Header>
          <HeaderBtn onPress={() => navigation.goBack()} >
            <HeaderImg style={{ marginEnd: 270 }} source={require('../assets/btn_arrow_black.png')} />
          </HeaderBtn>
          <HeaderBtn >
            <HeaderImg style={{ marginEnd: 10 }} source={require('../assets/ic_my_like_off.png')} />
          </HeaderBtn>
          <HeaderBtn >
            <HeaderImg source={require('../assets/btn_player_more.png')} />
          </HeaderBtn>
        </Header>

        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginVertical: 20 }}>
          <Title>{albumName}</Title>
          <Desc>{singer}</Desc>
          <Desc style={{ color: GREY, fontSize: 14 }}>2021.03.25 | 정규 | 댄스 팝</Desc>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <AlbumLargeImage id={id}/>
            <Image style={{ width: 40, height: 190, marginTop: 15 }} source={require('../assets/img_album_lp.png')} />

          </View>
        </View>
      </Container>

      <Tab.Navigator
        initialRouteName="Tracks"
        screenOptions={{
          tabBarActiveTintColor: `${MAIN_COLOR}`,
          tabBarInactiveTintColor: `${DARK_GREY}`,
          tabBarIndicatorStyle: {
            backgroundColor: `${MAIN_COLOR}`,
          },
          tabBarLabelStyle: { fontSize: 15, fontWeight: "500" },
          tabBarStyle: { backgroundColor: 'white' },
        }}
      >
        <Tab.Screen name="Tracks" children={()=><Tracks id={ id }/>} options={{ title: "수록곡" }} />
        <Tab.Screen name="Detail" component={Detail} options={{ title: "상세정보" }} />
        <Tab.Screen name="Vedio" component={Video} options={{ title: "영상" }} />
      </Tab.Navigator>
    </>
  )
};

export default Album;
