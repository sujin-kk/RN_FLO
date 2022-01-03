import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { MAIN_COLOR } from "../colors";
import Swiper from "react-native-swiper";
import ChartHeader from "./ChartHeader";
import { Song } from "../Objects/Song";
import ChartList from "./ChartList";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Container = styled.View`
    flex: 1;
    border-radius: 15px;
    background-color: white;
    margin: 10px;
    width: 90%;
    align-self: center;
`;

interface ChartSlideProps {
    songData: any;
    maintext: string;
    subtext: string;
    overview: string;
};

const ChartSlide: React.FC<ChartSlideProps> = ({
    songData,
    maintext,
    subtext,
    overview,
}) => {
    
    return (
        <Container>
            <ChartHeader maintext={maintext} subtext={subtext} overview={overview} />
            <Swiper
                horizontal
                loop
                autoplay
                autoplayTimeout={3.5}
                showsButtons={false}
                activeDotColor={MAIN_COLOR}
                containerStyle={{
                    width: "100%",
                    height: SCREEN_HEIGHT / 2 - 50,
                }}
            >    
              <ChartList songData={songData.slice(0, 5)} index={0}/>
              <ChartList songData={songData.slice(5, 10)} index={5}/> 
              <ChartList songData={songData.slice(10, 15)} index={10}/>            
            </Swiper>
        </Container>

    )
};

export default ChartSlide;