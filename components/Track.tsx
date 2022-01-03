import React from "react";
import styled from "styled-components/native";
import { View, Text, Dimensions } from "react-native";
import { GREY, MAIN_COLOR } from "../colors";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Container = styled.View`
    flex-direction: row;
    padding: 5px;
    justify-content: space-between;
    align-items: flex-start;
`;

const Index = styled.View`
    margin-top: 2px;
    flex: 1;
    margin-left: 20px;
`;

const TitleNameWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
`;

const TitleSingerWrapper = styled.View`
    flex-direction: column;
    flex: 6;
    align-items: flex-start;
`;

const TitleMark = styled.View`
    background-color: ${MAIN_COLOR};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 15px;
    margin-right: 10px;
`;

const TitleText = styled.Text`
    color: white;
    font-size: 10px;
`;

const SongName = styled.Text`
    font-size: 16px;
`;

const Singer = styled.Text`
    font-size: 13px;
    color: ${GREY};
`;

const BtnIcon = styled.Image`
    width: 30px;
    height: 30px;
`;

const BtnWrapper = styled.View`
    flex: 3;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 10px;
`;

interface TrackProps {
    index: number;
    songName: string;
    singer: string;
    isTitle: boolean;
};

const Track: React.FC<TrackProps> = ({ index, songName, singer, isTitle }) => {
    return (
        <Container>
            <Index>
                <Text style={{ fontSize: 13 }}>{"0" + (index + 1)}</Text>
            </Index>
            <TitleSingerWrapper>
                <TitleNameWrapper>
                    {isTitle ? (
                        <TitleMark>
                            <TitleText>TITLE</TitleText>
                        </TitleMark>
                    ) : null
                    }
                    <SongName>{songName.slice(0, 15)}{songName.length > 15 ? "..." : null}</SongName>
                </TitleNameWrapper>
                <Singer>{singer}</Singer>
            </TitleSingerWrapper>
            <BtnWrapper>
                <BtnIcon source={require('../assets/btn_miniplayer_play.png')} />
                <BtnIcon source={require('../assets/btn_player_more.png')} />
            </BtnWrapper>
        </Container>
    )
}


export default Track;