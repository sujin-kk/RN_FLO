import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { MAIN_COLOR } from "../colors";

const Container = styled.View`
    height: 50px;
    flex-direction: row;
    align-items: center;
    padding: 5px;
`;

const Rank = styled.Text`
    color: ${MAIN_COLOR};
    font-size: 16px;
    margin-right: 25px;
`;

const Singer = styled.Text`
    font-size: 16px;
`;

interface RankingProps {
    id: string;
    singer: string;
};

const Ranking: React.FC<RankingProps> = ({id, singer }) => {
    return (
        <Container>
            <Rank>{id}</Rank>
            <Singer>{singer}</Singer>
        </Container>
    )
} 
    

export default Ranking;