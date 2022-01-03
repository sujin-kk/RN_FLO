import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import { DARK_GREY, BLACK, GREY } from "../colors";
import AlbumImage from "./AlbumImage";

const Album = styled.View`
  align-items: flex-start;
`;

const Title = styled.Text`
  color: ${BLACK};
  font-weight: 400;
  margin-top: 7px;
  margin-bottom: 5px;
  font-size: 15px;
`;

const Singer = styled.Text`
  color: ${GREY};
  font-weight: 300;
  font-size: 12px;
`;

interface AlbumMediaProps {
  albumName: string;
  singer: string;
  id: number;
}

const AlbumMedia: React.FC<AlbumMediaProps> = ({
  albumName,
  singer,
  id
}) => {
  const navigation = useNavigation();
  const goToAlbum = () => {
      navigation.navigate("Stack", { 
        screen: "Album",
        params: {
          id,
        }
      });
  };

  return (
    <TouchableWithoutFeedback onPress={goToAlbum}>
      <Album>
        <AlbumImage id={id} />
        <Title>
          {albumName.slice(0, 14)}
          {albumName.length > 14 ? "..." : null}
        </Title>
        <Singer>
          {singer}
        </Singer>
      </Album>
    </TouchableWithoutFeedback>
  );
}

export default AlbumMedia;