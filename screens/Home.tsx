import { BlurView } from "expo-blur";
import react from "react";
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from "react-native";
import styled from "styled-components/native";
import AlbumList from "../components/AlbumList";
import musicData from "../musicData.json";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const HeaderBtn = styled.Image`
  width: 40px;
  height: 40px;
  margin-horizontal: 5px;
`;

const Wrapper = styled.View`
  flex-direction: column;
  height: 100%;
  width: 90%;
  margin: 10px auto;
  justify-content: space-around;
  align-items: center;
`;

const CircleImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 400px;
  background-color: rgba(255, 255, 255, 0.5);
  position: relative;
  z-index: 0;
`;

const Home = () => {

  // const albumData = musicData.albums;
  const latestData = musicData.latest;
  const todayData = musicData.today;

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Image
          style={{ width: "100%", height: SCREEN_HEIGHT / 2.2 }}
          source={require('../assets/img_album_exp10.jpg')}
        />
        <BlurView
          intensity={40}
          style={StyleSheet.absoluteFill}>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", marginEnd: 10, marginTop: 35 }}>
            <HeaderBtn source={require('../assets/btn_nugu.png')} />
            <HeaderBtn source={require('../assets/btn_main_ticket.png')} />
            <HeaderBtn source={require('../assets/btn_main_setting.png')} />
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <View style={{ flexDirection: "column", alignItems: "flex-start", marginTop: 15, marginStart: 10 }}>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500", marginBottom: 5 }}>좋아할만한 아티스트 MIX</Text>
              <Text style={{ color: "white", fontSize: 25, fontWeight: "600" }}>Jay Park, Aespa,</Text>
              <Text style={{ color: "white", fontSize: 25, fontWeight: "600" }}>오왼(Owen), Jhonvr...</Text>
            </View>
            <Image source={require('../assets/btn_panel_play_large.png')} style={{ width: 50, height: 50, marginVertical: 25 }} />
          </View>

          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 50 }}>
            <CircleImage source={require('../assets/img_album_exp5.jpg')}/>
            <CircleImage style={{width: 130, height: 130, zIndex: 1, marginTop: -10 }} source={require('../assets/img_album_exp10.jpg')}/>
            <CircleImage source={require('../assets/img_album_exp8.jpg')}/>

          </View>

        </BlurView>
      </View>
      <View style={{ marginBottom: 20 }}></View>

      <AlbumList title="좋아할만한 최신 앨범" data={latestData} />
      <Image
        style={{ width: "100%", height: 80, marginBottom: 20 }}
        source={require('../assets/img_home_viewpager_exp.png')}
      />
      <AlbumList title="오늘 발매 음악" data={todayData} />
      <Image
        style={{ width: "90%", height: 320, marginBottom: 20, justifyContent: "center", alignSelf: "center" }}
        source={require('../assets/discovery_banner_aos.jpg')}
      />
      <Image
        style={{ width: "100%", height: 120, marginBottom: 20 }}
        source={require('../assets/img_home_viewpager_exp2.png')}
      />
    </ScrollView>
  )
};

export default Home;