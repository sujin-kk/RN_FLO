import React from "react";
import styled from "styled-components/native";
import { StyleSheet, useColorScheme, View } from "react-native";
import { BlurView } from "expo-blur";

const BgImg = styled.Image``;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: "white";
`;

const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  width: 90%;
  margin: 10px auto;
  justify-content: space-around;
  align-items: center;
`;

const Column = styled.View`
  width: 60%;
`;

interface SlideProps {
    path: string;
};

const Slide:React.FC<SlideProps> = ({
    path,
 }) => {
    return (
        <View style={{ flex: 1 }}>
          <BgImg
            style={StyleSheet.absoluteFill} 
            source={ require('../assets/img_album_exp10.jpg') } />
          <BlurView
            intensity={70} 
            style={StyleSheet.absoluteFill}>
        
          </BlurView>
         </View>
    )
};

export default Slide;