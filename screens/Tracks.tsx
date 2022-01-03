import React from "react";
import { TouchableNativeFeedback, Text, FlatList, Dimensions } from "react-native";
import styled from "styled-components/native";
import { DARK_GREY, GREY, LIGHT_GREY } from "../colors";
import musicData from '../musicData.json';
import Track from '../components/Track';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGTH } = Dimensions.get("window");

const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: white;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;

const MixView = styled.View`
    background-color: ${LIGHT_GREY};
    height: 45px;
    width: 45%;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    flex-direction: row;
`;

const ToggleImage = styled.Image`
    width: 40px;
    height: 25px;
    margin-left: 5px;
`;

const Seperator = styled.View`
    height: 15px;
`;

const AllWrapper = styled.View`
    margin-top: 10px;
    flex-direction: row;
    width: ${SCREEN_WIDTH};
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
`;

const HWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

const AllIcon =styled.Image`
    width: 20px;
    height: 20px;
    margin-right: 3px;
`;

const AllText = styled.Text`
    color:${DARK_GREY};
    font-size: 13px;
`;

const Tracks = ({ id }) => {
    const songData = musicData.songs;
    const targetTracks = songData.filter((song) => song.albumIdx === id);
    console.log(targetTracks);

    return (
        <Container>
            <TouchableNativeFeedback>
                <MixView>
                    <Text>내 취향 MIX</Text>
                    <ToggleImage source={require('../assets/btn_toggle_off.png')}/>
                </MixView>
            </TouchableNativeFeedback>

            <AllWrapper>
                <HWrapper>
                    <AllIcon source={require('../assets/btn_playlist_select_off.png')}/>
                    <AllText>전체선택</AllText>
                </HWrapper>
                <HWrapper>
                    <AllIcon source={require('../assets/icon_browse_arrow_right.png')}/>
                    <AllText>전체듣기</AllText>
                </HWrapper>
            </AllWrapper>

            <FlatList
                style={{marginTop:  20, width: SCREEN_WIDTH }}
                ItemSeparatorComponent={Seperator} 
                data={targetTracks}
                keyExtractor={(item) => item.id+""}
                renderItem={({ item, index }) =>(
                    <Track
                        index={index}
                        isTitle={item.isTitle}
                        singer={item.singer}
                        songName={item.songName}
                    />
                )}
            />
        </Container>
    );
};

export default Tracks;