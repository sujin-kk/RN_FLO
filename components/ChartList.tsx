import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import styled from "styled-components/native";
import ChartRow from "./ChartRow";

const ChartView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
`;

const ChartList = ({ index, songData }) => {
  
  return (
    <ChartView>
      <ChartRow
        index={index}
        albumIdx={songData[0].albumIdx}
        songName={songData[0].songName}
        singer={songData[0].singer}
      />
      <ChartRow
        index={index + 1}
        albumIdx={songData[1].albumIdx}
        songName={songData[1].songName}
        singer={songData[1].singer}
      />
      <ChartRow 
        index={index + 2}
        albumIdx={songData[2].albumIdx}
        songName={songData[2].songName}
        singer={songData[2].singer}
      />
      <ChartRow
        index={index + 3}
        albumIdx={songData[3].albumIdx}
        songName={songData[3].songName}
        singer={songData[3].singer}
      />
      <ChartRow
        index={index + 4}
        albumIdx={songData[4].albumIdx}
        songName={songData[4].songName}
        singer={songData[4].singer}
      />
    </ChartView>
  );
};
export default ChartList;