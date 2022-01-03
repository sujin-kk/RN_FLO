import React from "react";
import { Text, Image } from "react-native";
import styled from "styled-components/native";
import { GREY } from "../colors";
import AlbumSmallImage from "./AlbumSmallImage";

const View = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 5px;
`;

const Column = styled.View`
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  flex: 3;
`;
const Title = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Singer = styled.Text`
  color: ${GREY};
  font-size: 13px;
`;

const ChartRow = ({ index, albumIdx, songName, singer }) => (
  <View>
    <AlbumSmallImage albumIdx={albumIdx} />
    <Text style={{ marginTop: 5, alignSelf:"flex-start", fontWeight: "600", fontSize: 18, flex: 1, marginLeft: 20 }}>
      {index + 1}
    </Text>
    <Column>
      <Title>{songName.slice(0, 11)}{songName.length > 11 ? "..." : null}</Title>
      <Singer>{singer}</Singer>
    </Column>
    <Image style={{ width: 35, height: 35, borderRadius: 5 }} source={require('../assets/btn_miniplayer_play.png')}/>
  </View>
);
export default ChartRow;