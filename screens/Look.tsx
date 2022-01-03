import React from "react";
import { View, Text, ScrollView, FlatList, Dimensions, Image } from "react-native";
import styled from "styled-components/native";
import { BTN_GREY, GREY, LIGHT_GREY, MAIN_COLOR } from "../colors";
import ChartSlide from "../components/ChartSlide";
import musicData from "../musicData.json";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGTH } = Dimensions.get("window");
const filters = ["차트", "장르∙테마", "오디오", "영상", "크리에이터"];

const Header = styled.View`
  flex-direction: column;
  margin-vertical: 50px;
  margin-left: 20px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.Text`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 25px;
`;

const Filter = styled.View`
  background-color: ${BTN_GREY};
  border-radius: 20px;
  height: 35px;
  padding: 8px 14px;
  align-items: center;
  justify-content: center;
`

const FilterName = styled.Text`
  color: ${GREY};
  font-size: 16px;
  font-weight: 600;
`;

const Seperator = styled.View`
  width: 10px;
`;

const HWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const MiddleTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-left: 20px;
  margin-right: 3px;
`;

const Look = () => {
  const songData = musicData.songs;

  return (
    <ScrollView>
      <Header>
        <Title>둘러보기</Title>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={Seperator}
          data={filters}
          keyExtractor={(item) => filters.indexOf(item) + ""}
          renderItem={({ item, index }) => (
            <Filter style={{ backgroundColor: index === 0 ? MAIN_COLOR : BTN_GREY }}>
              <FilterName style={{ color: index === 0 ? "white" : GREY }}>{item}</FilterName>
            </Filter>
          )}
        />
      </Header>

      <HWrapper>
        <MiddleTitle>차트</MiddleTitle>
        <Image style={{ width: 23, height: 23 }} source={require('../assets/btn_arrow_more.png')} />
      </HWrapper>

      <ChartSlide
        songData={songData}
        maintext={"FLO 차트"}
        subtext={"00시 기준"}
        overview={"최근 24시간 집계, FLO 최고 인기곡 차트!"}
      />

      <ChartSlide
        songData={songData}
        maintext={"해외 소셜 차트"}
        subtext={"12/27~01/03"}
        overview={"유튜브, 틱톡 등 글로벌 트렌드를 한 눈에!"}
      />

      <ChartSlide
        songData={songData}
        maintext={"V컬러링 차트"}
        subtext={"12/26~01/02"}
        overview={"나를 표현하는 '보이는 컬러링' 요즘엔 어떤 거?"}
      />
    </ScrollView>
  )
};

export default Look;