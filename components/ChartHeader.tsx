import React from "react";
import { Text, Image } from "react-native";
import styled from "styled-components/native";
import { BTN_GREY, DARK_GREY, GREY, LIGHT_GREY } from "../colors";

const Container = styled.View`
  flex: 1;
  padding-top: 20px;
  padding-horizontal: 5px;
  justify-content: center;
  margin-bottom: -15px;
`;

const MainText = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: 600;
`;

const SubText = styled.Text`
  font-size: 14px;
  color: ${GREY};
  font-weight: 400;
`;

const HWrapper = styled.View`
  margin-horizontal: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ChartHeader = ({ maintext, subtext, overview }) => {
  return (
    <Container>
      <HWrapper>
        <Wrapper>
          <MainText>{maintext}</MainText>
          <SubText style={{marginLeft:5}}>{subtext}</SubText>
        </Wrapper>

        <Wrapper>
          <Image style={{ width: 20, height: 20 }} source={require('../assets/icon_browse_arrow_right.png')} />
          <Text style={{ marginLeft: 5, fontSize: 14, color: DARK_GREY }}>전체듣기</Text>
        </Wrapper>

      </HWrapper>
      <SubText style={{marginTop: 10, marginLeft: 15}}>{overview}</SubText>
    </Container>
  );
};
export default ChartHeader;